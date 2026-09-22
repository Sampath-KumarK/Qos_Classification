#!/usr/bin/env python3
"""
Scikit-Learn Random Forest Pipeline for Network QoS Prediction
Requires: pandas, scikit-learn, joblib

Run:
  pip install -r requirements.txt
  python3 train_sklearn.py
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import joblib

def main():
    print("Loading qos_network_dataset.csv...")
    df = pd.read_csv("qos_network_dataset.csv")
    print(f"Dataset shape: {df.shape}")
    print("\nClass distribution:")
    print(df['qos_class'].value_counts())

    # Features and Target
    feature_cols = ['latency_ms', 'jitter_ms', 'packet_loss_pct', 'throughput_mbps']
    X = df[feature_cols]
    y = df['qos_class']

    # Train / Test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )

    print(f"\nTraining set: {len(X_train)} | Testing set: {len(X_test)}")

    # Initialize Random Forest Classifier
    rf = RandomForestClassifier(
        n_estimators=100,
        criterion='gini',
        max_depth=6,
        min_samples_split=2,
        random_state=42,
        n_jobs=-1
    )

    print("\nFitting Random Forest Classifier...")
    rf.fit(X_train, y_train)

    # Predictions
    y_pred = rf.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"\n>>> Scikit-Learn Model Test Accuracy: {acc * 100:.2f}% <<<")

    print("\nConfusion Matrix:")
    labels = ["GOOD", "MEDIUM", "BAD"]
    cm = confusion_matrix(y_test, y_pred, labels=labels)
    cm_df = pd.DataFrame(cm, index=[f"Actual {l}" for l in labels], columns=[f"Pred {l}" for l in labels])
    print(cm_df)

    print("\nClassification Report:")
    print(classification_report(y_test, y_pred, labels=labels))

    print("\nFeature Importances (MDI / Gini):")
    for feat, imp in sorted(zip(feature_cols, rf.feature_importances_), key=lambda x: x[1], reverse=True):
        print(f"  {feat:<20}: {imp * 100:.2f}%")

    # Save artifact
    joblib.dump(rf, "qos_model.joblib")
    print("\nSerialized model saved to 'qos_model.joblib'")

if __name__ == "__main__":
    main()
