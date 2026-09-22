#!/usr/bin/env python3
"""
Generates a realistic Network QoS dataset based on ITU-T G.1010 and 3GPP standards.
Features:
- sample_id: integer
- latency_ms: RTT in milliseconds
- jitter_ms: packet delay variation in milliseconds
- packet_loss_pct: packet loss percentage
- throughput_mbps: available bandwidth in Mbps
- network_type: Fiber, 5G Ultra, 4G LTE, Wi-Fi 6, Congested Wi-Fi, Satellite
- qos_class: GOOD, MEDIUM, BAD
- recommended_apps: applications suitable for this connection
"""

import csv
import random

random.seed(42)

def generate_qos_data():
    records = []
    sample_id = 1

    # 1. Tier 1: GOOD Connections (Fiber, 5G, Wi-Fi 6) - ~75 samples
    # Low latency (< 50ms), low jitter (< 10ms), zero/low loss (< 1.0%), high throughput (> 30 Mbps)
    good_profiles = [
        ("Fiber Gigabit", (8, 25), (1, 4), (0.0, 0.2), (100, 500), "Cloud Gaming, 4K HDR, VoIP, AR/VR"),
        ("Fiber Broadband", (15, 38), (2, 7), (0.0, 0.5), (50, 150), "Cloud Gaming, 4K Stream, Team Calls"),
        ("5G Ultra Wideband", (18, 35), (3, 8), (0.1, 0.6), (60, 250), "Live Streaming, Cloud Gaming, 4K"),
        ("5G Sub-6", (25, 48), (4, 9), (0.2, 0.8), (35, 90), "4K Streaming, VoIP, Online Multiplayer"),
        ("Wi-Fi 6 (Low Load)", (12, 32), (2, 6), (0.0, 0.4), (70, 200), "Cloud Gaming, HD Video, Fast DL"),
    ]

    for profile_name, lat_r, jit_r, loss_r, tp_r, apps in good_profiles:
        for _ in range(15):
            lat = round(random.uniform(*lat_r), 1)
            jit = round(random.uniform(*jit_r), 1)
            loss = round(random.uniform(*loss_r), 2)
            tp = round(random.uniform(*tp_r), 1)
            records.append({
                "sample_id": sample_id,
                "latency_ms": lat,
                "jitter_ms": jit,
                "packet_loss_pct": loss,
                "throughput_mbps": tp,
                "network_type": profile_name,
                "qos_class": "GOOD",
                "recommended_apps": apps
            })
            sample_id += 1

    # 2. Tier 2: MEDIUM Connections (4G LTE, Average Wi-Fi, DSL, Mild Congestion) - ~65 samples
    # Moderate latency (55 - 145ms), moderate jitter (10 - 24ms), moderate loss (1.0 - 2.8%), moderate throughput (5 - 30 Mbps)
    med_profiles = [
        ("4G LTE Standard", (55, 95), (10, 18), (1.0, 2.2), (12, 28), "1080p Video, Web, Standard Calls"),
        ("Wi-Fi (Multi-User)", (50, 85), (11, 20), (1.1, 2.5), (15, 32), "Zoom Calls, YouTube 1080p, Web"),
        ("VDSL / Cable", (60, 110), (12, 22), (1.2, 2.6), (10, 25), "Video Meetings, Buffered Streaming"),
        ("4G Edge Cell", (80, 140), (14, 24), (1.4, 2.9), (6, 18), "720p Video, Social Media, Audio"),
        ("Rural Fixed Wireless", (90, 145), (15, 25), (1.5, 3.0), (8, 20), "Web Browsing, Standard Video"),
    ]

    for profile_name, lat_r, jit_r, loss_r, tp_r, apps in med_profiles:
        for _ in range(13):
            lat = round(random.uniform(*lat_r), 1)
            jit = round(random.uniform(*jit_r), 1)
            loss = round(random.uniform(*loss_r), 2)
            tp = round(random.uniform(*tp_r), 1)
            records.append({
                "sample_id": sample_id,
                "latency_ms": lat,
                "jitter_ms": jit,
                "packet_loss_pct": loss,
                "throughput_mbps": tp,
                "network_type": profile_name,
                "qos_class": "MEDIUM",
                "recommended_apps": apps
            })
            sample_id += 1

    # 3. Tier 3: BAD Connections (Heavy Congestion, Satellite, Weak Signal, High Packet Loss) - ~60 samples
    # High latency (> 150ms), high jitter (> 25ms), high loss (> 3.0%), low throughput (< 6 Mbps)
    bad_profiles = [
        ("Congested Public Wi-Fi", (155, 240), (25, 45), (3.5, 7.5), (1.2, 5.0), "Basic Web, Text Chat (Frequent Lag)"),
        ("Legacy Geostationary Satellite", (480, 720), (30, 60), (3.0, 6.0), (2.0, 10.0), "Buffered Web, Email Only"),
        ("3G / Degraded Cellular", (160, 260), (26, 42), (4.0, 8.5), (0.8, 3.5), "Low-Res Audio, Text Messaging"),
        ("Packet Storm / Bufferbloat", (190, 320), (35, 55), (5.0, 12.0), (1.5, 4.2), "Severely Impaired (Dropped Packets)"),
        ("Extreme Range Wi-Fi", (170, 280), (28, 48), (3.8, 9.0), (1.0, 3.0), "Connection Dropouts, Text Only"),
    ]

    for profile_name, lat_r, jit_r, loss_r, tp_r, apps in bad_profiles:
        for _ in range(12):
            lat = round(random.uniform(*lat_r), 1)
            jit = round(random.uniform(*jit_r), 1)
            loss = round(random.uniform(*loss_r), 2)
            tp = round(random.uniform(*tp_r), 1)
            records.append({
                "sample_id": sample_id,
                "latency_ms": lat,
                "jitter_ms": jit,
                "packet_loss_pct": loss,
                "throughput_mbps": tp,
                "network_type": profile_name,
                "qos_class": "BAD",
                "recommended_apps": apps
            })
            sample_id += 1

    return records

if __name__ == "__main__":
    data = generate_qos_data()
    filename = "qos_network_dataset.csv"
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "sample_id", "latency_ms", "jitter_ms", "packet_loss_pct",
            "throughput_mbps", "network_type", "qos_class", "recommended_apps"
        ])
        writer.writeheader()
        writer.writerows(data)
    print(f"Generated {len(data)} dataset rows saved to {filename}")
