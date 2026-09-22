#!/usr/bin/env python3
"""
Python script to predict Network QoS quality using the trained Random Forest model.

Usage:
  python3 predict.py --latency 42 --jitter 8 --loss 0.5 --throughput 45
  python3 predict.py --sample-id 15
  python3 predict.py --test-all
  python3 predict.py --latency 180 --jitter 35 --loss 5.5 --throughput 2.1 --json
"""

import argparse
import csv
import json
import os
import sys

def load_model(model_path="qos_rf_model.json"):
    if not os.path.exists(model_path):
        print(f"[!] Model file '{model_path}' not found. Automatically training new model...")
        import train_model
        train_model.main()
    with open(model_path, "r", encoding="utf-8") as f:
        return json.load(f)

def predict_tree(node, row):
    if isinstance(node, str):
        return node
    val = row.get(node["feature"])
    if val is None:
        val = 0.0
    if val < node["value"]:
        if isinstance(node["left"], dict):
            return predict_tree(node["left"], row)
        else:
            return node["left"]
    else:
        if isinstance(node["right"], dict):
            return predict_tree(node["right"], row)
        else:
            return node["right"]

def evaluate_applications(prediction, latency, packet_loss, throughput):
    """Assess suitability for major application categories."""
    lat = float(latency)
    loss = float(packet_loss)
    tp = float(throughput)
    gaming = "EXCELLENT" if (lat < 45 and loss < 0.5) else ("GOOD" if lat < 75 and loss < 1.5 else "POOR")
    video = "EXCELLENT" if (lat < 100 and loss < 1.5 and tp > 15) else ("GOOD" if tp > 5 and loss < 3.0 else "POOR")
    download = "HIGH SPEED" if tp > 40 else ("MODERATE" if tp > 12 else "SLOW")
    return {
        "cloud_gaming": gaming,
        "video_conferencing": video,
        "large_file_downloads": download
    }

def predict_network_qos(latency, jitter, packet_loss, throughput, model=None):
    if model is None:
        model = load_model()

    trees = model["trees"]
    row = {
        "latency_ms": float(latency),
        "jitter_ms": float(jitter),
        "packet_loss_pct": float(packet_loss),
        "throughput_mbps": float(throughput)
    }

    votes = {"GOOD": 0, "MEDIUM": 0, "BAD": 0}
    for tree in trees:
        pred = predict_tree(tree, row)
        if pred in votes:
            votes[pred] += 1

    total = len(trees)
    prediction = max(votes, key=votes.get)
    confidence = round((votes[prediction] / total) * 100, 1)

    apps = evaluate_applications(prediction, latency, packet_loss, throughput)

    result = {
        "prediction": prediction,
        "confidence": confidence,
        "probabilities": {
            "good": round(votes["GOOD"] / total, 2),
            "med": round(votes["MEDIUM"] / total, 2),
            "bad": round(votes["BAD"] / total, 2)
        },
        "votes": votes,
        "total_estimators": total,
        "input": row,
        "application_ratings": apps
    }
    return result

def main():
    parser = argparse.ArgumentParser(description="Predict Network QoS using Python Random Forest")
    parser.add_argument("--latency", type=float, default=None, help="Latency in milliseconds (RTT)")
    parser.add_argument("--jitter", type=float, default=None, help="Jitter in milliseconds")
    parser.add_argument("--loss", type=float, default=None, help="Packet loss in percentage")
    parser.add_argument("--throughput", type=float, default=None, help="Throughput in Mbps")
    parser.add_argument("--sample-id", type=int, default=None, help="Predict based on sample ID from qos_network_dataset.csv")
    parser.add_argument("--test-all", action="store_true", help="Run validation against all rows in dataset")
    parser.add_argument("--json", action="store_true", help="Output raw JSON format")

    args = parser.parse_args()
    model = load_model()

    # Mode 1: Test against entire dataset
    if args.test_all:
        if not os.path.exists("qos_network_dataset.csv"):
            print("Dataset file 'qos_network_dataset.csv' not found.")
            return
        correct = 0
        total = 0
        with open("qos_network_dataset.csv", mode="r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                res = predict_network_qos(
                    row["latency_ms"], row["jitter_ms"],
                    row["packet_loss_pct"], row["throughput_mbps"],
                    model=model
                )
                if res["prediction"] == row["qos_class"]:
                    correct += 1
                total += 1
        print(f"Dataset Evaluation: {correct}/{total} predictions correct ({round(correct/total*100, 2)}% accuracy)")
        return

    # Mode 2: Sample ID from dataset
    if args.sample_id is not None:
        target_row = None
        with open("qos_network_dataset.csv", mode="r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                if int(row["sample_id"]) == args.sample_id:
                    target_row = row
                    break
        if not target_row:
            print(f"Sample ID {args.sample_id} not found in dataset.")
            return

        res = predict_network_qos(
            target_row["latency_ms"], target_row["jitter_ms"],
            target_row["packet_loss_pct"], target_row["throughput_mbps"],
            model=model
        )

        if args.json:
            print(json.dumps(res, indent=2))
            return

        print("\n=======================================================")
        print(f"  PREDICTION FOR DATASET SAMPLE #{target_row['sample_id']}")
        print("=======================================================")
        print(f"Network Type:   {target_row['network_type']}")
        print(f"Input Metrics:  Latency={target_row['latency_ms']}ms | Jitter={target_row['jitter_ms']}ms | Loss={target_row['packet_loss_pct']}% | BW={target_row['throughput_mbps']}Mbps")
        print(f"Ground Truth:   {target_row['qos_class']}")
        print(f"ML PREDICTION:  {res['prediction']} (Confidence: {res['confidence']}%)")
        print(f"Vote Split:     GOOD: {res['votes']['GOOD']} | MED: {res['votes']['MEDIUM']} | BAD: {res['votes']['BAD']} ({res['total_estimators']} trees)")
        print(f"Applications:   Gaming={res['application_ratings']['cloud_gaming']} | Video={res['application_ratings']['video_conferencing']} | Download={res['application_ratings']['large_file_downloads']}")
        return

    # Mode 3: Custom or default inputs
    lat = args.latency if args.latency is not None else 42.0
    jit = args.jitter if args.jitter is not None else 8.0
    loss = args.loss if args.loss is not None else 0.5
    tp = args.throughput if args.throughput is not None else 45.0

    res = predict_network_qos(lat, jit, loss, tp, model=model)

    if args.json:
        print(json.dumps(res, indent=2))
        return

    print("\n=======================================================")
    print("      PYTHON RANDOM FOREST NETWORK QOS PREDICTOR")
    print("=======================================================")
    print(f"Input Telemetry:")
    print(f"  - Latency:     {lat} ms")
    print(f"  - Jitter:      {jit} ms")
    print(f"  - Packet Loss: {loss} %")
    print(f"  - Throughput:  {tp} Mbps")
    print("-" * 55)
    print(f">> PREDICTED QOS: {res['prediction']} (Confidence: {res['confidence']}%) <<")
    print(f"Probability Distribution:")
    print(f"  - P(GOOD):   {res['probabilities']['good']} ({res['votes']['GOOD']}/{res['total_estimators']} trees)")
    print(f"  - P(MEDIUM): {res['probabilities']['med']} ({res['votes']['MEDIUM']}/{res['total_estimators']} trees)")
    print(f"  - P(BAD):    {res['probabilities']['bad']} ({res['votes']['BAD']}/{res['total_estimators']} trees)")
    print("-" * 55)
    print("Application Suitability:")
    print(f"  - Cloud Gaming:       {res['application_ratings']['cloud_gaming']}")
    print(f"  - Video Conferencing: {res['application_ratings']['video_conferencing']}")
    print(f"  - Large Downloads:    {res['application_ratings']['large_file_downloads']}")
    print("=======================================================\n")

if __name__ == "__main__":
    main()
