export interface DatasetRow {
  sample_id: number;
  latency_ms: number;
  jitter_ms: number;
  packet_loss_pct: number;
  throughput_mbps: number;
  network_type: string;
  qos_class: "GOOD" | "MEDIUM" | "BAD";
  recommended_apps: string;
}

export const QOS_DATASET: DatasetRow[] = [
  {
    "sample_id": 1,
    "latency_ms": 18.9,
    "jitter_ms": 1.1,
    "packet_loss_pct": 0.06,
    "throughput_mbps": 189.3,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 2,
    "latency_ms": 20.5,
    "jitter_ms": 3.0,
    "packet_loss_pct": 0.18,
    "throughput_mbps": 134.8,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 3,
    "latency_ms": 15.2,
    "jitter_ms": 1.1,
    "packet_loss_pct": 0.04,
    "throughput_mbps": 302.1,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 4,
    "latency_ms": 8.5,
    "jitter_ms": 1.6,
    "packet_loss_pct": 0.13,
    "throughput_mbps": 318.0,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 5,
    "latency_ms": 11.7,
    "jitter_ms": 2.8,
    "packet_loss_pct": 0.16,
    "throughput_mbps": 102.6,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 6,
    "latency_ms": 21.7,
    "jitter_ms": 3.1,
    "packet_loss_pct": 0.07,
    "throughput_mbps": 162.2,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 7,
    "latency_ms": 24.3,
    "jitter_ms": 2.0,
    "packet_loss_pct": 0.02,
    "throughput_mbps": 138.7,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 8,
    "latency_ms": 22.4,
    "jitter_ms": 2.8,
    "packet_loss_pct": 0.16,
    "throughput_mbps": 391.9,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 9,
    "latency_ms": 17.1,
    "jitter_ms": 3.9,
    "packet_loss_pct": 0.08,
    "throughput_mbps": 320.8,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 10,
    "latency_ms": 22.1,
    "jitter_ms": 2.9,
    "packet_loss_pct": 0.17,
    "throughput_mbps": 330.9,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 11,
    "latency_ms": 20.0,
    "jitter_ms": 1.1,
    "packet_loss_pct": 0.05,
    "throughput_mbps": 215.8,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 12,
    "latency_ms": 9.4,
    "jitter_ms": 1.7,
    "packet_loss_pct": 0.02,
    "throughput_mbps": 211.2,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 13,
    "latency_ms": 18.8,
    "jitter_ms": 2.1,
    "packet_loss_pct": 0.07,
    "throughput_mbps": 183.8,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 14,
    "latency_ms": 12.5,
    "jitter_ms": 3.8,
    "packet_loss_pct": 0.13,
    "throughput_mbps": 343.7,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 15,
    "latency_ms": 10.9,
    "jitter_ms": 3.2,
    "packet_loss_pct": 0.03,
    "throughput_mbps": 251.8,
    "network_type": "Fiber Gigabit",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K HDR, VoIP, AR/VR"
  },
  {
    "sample_id": 16,
    "latency_ms": 37.8,
    "jitter_ms": 5.2,
    "packet_loss_pct": 0.28,
    "throughput_mbps": 118.5,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 17,
    "latency_ms": 34.4,
    "jitter_ms": 5.9,
    "packet_loss_pct": 0.11,
    "throughput_mbps": 53.2,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 18,
    "latency_ms": 22.3,
    "jitter_ms": 3.3,
    "packet_loss_pct": 0.11,
    "throughput_mbps": 144.3,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 19,
    "latency_ms": 35.2,
    "jitter_ms": 3.6,
    "packet_loss_pct": 0.33,
    "throughput_mbps": 89.6,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 20,
    "latency_ms": 36.0,
    "jitter_ms": 4.3,
    "packet_loss_pct": 0.13,
    "throughput_mbps": 74.7,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 21,
    "latency_ms": 27.9,
    "jitter_ms": 3.3,
    "packet_loss_pct": 0.29,
    "throughput_mbps": 139.8,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 22,
    "latency_ms": 24.2,
    "jitter_ms": 3.1,
    "packet_loss_pct": 0.5,
    "throughput_mbps": 101.0,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 23,
    "latency_ms": 17.1,
    "jitter_ms": 2.2,
    "packet_loss_pct": 0.05,
    "throughput_mbps": 112.7,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 24,
    "latency_ms": 33.2,
    "jitter_ms": 4.1,
    "packet_loss_pct": 0.03,
    "throughput_mbps": 88.2,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 25,
    "latency_ms": 37.9,
    "jitter_ms": 4.6,
    "packet_loss_pct": 0.49,
    "throughput_mbps": 136.1,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 26,
    "latency_ms": 15.3,
    "jitter_ms": 5.6,
    "packet_loss_pct": 0.34,
    "throughput_mbps": 103.7,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 27,
    "latency_ms": 21.1,
    "jitter_ms": 5.2,
    "packet_loss_pct": 0.06,
    "throughput_mbps": 93.5,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 28,
    "latency_ms": 25.4,
    "jitter_ms": 6.8,
    "packet_loss_pct": 0.44,
    "throughput_mbps": 76.3,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 29,
    "latency_ms": 26.5,
    "jitter_ms": 2.9,
    "packet_loss_pct": 0.46,
    "throughput_mbps": 137.1,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 30,
    "latency_ms": 21.9,
    "jitter_ms": 5.2,
    "packet_loss_pct": 0.3,
    "throughput_mbps": 65.3,
    "network_type": "Fiber Broadband",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, 4K Stream, Team Calls"
  },
  {
    "sample_id": 31,
    "latency_ms": 31.0,
    "jitter_ms": 5.7,
    "packet_loss_pct": 0.49,
    "throughput_mbps": 160.8,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 32,
    "latency_ms": 18.0,
    "jitter_ms": 4.6,
    "packet_loss_pct": 0.11,
    "throughput_mbps": 236.5,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 33,
    "latency_ms": 32.9,
    "jitter_ms": 7.2,
    "packet_loss_pct": 0.25,
    "throughput_mbps": 71.0,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 34,
    "latency_ms": 32.9,
    "jitter_ms": 7.7,
    "packet_loss_pct": 0.14,
    "throughput_mbps": 152.3,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 35,
    "latency_ms": 19.2,
    "jitter_ms": 6.8,
    "packet_loss_pct": 0.48,
    "throughput_mbps": 84.4,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 36,
    "latency_ms": 26.1,
    "jitter_ms": 5.7,
    "packet_loss_pct": 0.23,
    "throughput_mbps": 225.8,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 37,
    "latency_ms": 25.2,
    "jitter_ms": 4.1,
    "packet_loss_pct": 0.37,
    "throughput_mbps": 198.7,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 38,
    "latency_ms": 21.4,
    "jitter_ms": 4.6,
    "packet_loss_pct": 0.6,
    "throughput_mbps": 183.5,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 39,
    "latency_ms": 25.4,
    "jitter_ms": 5.6,
    "packet_loss_pct": 0.16,
    "throughput_mbps": 102.7,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 40,
    "latency_ms": 23.7,
    "jitter_ms": 5.9,
    "packet_loss_pct": 0.22,
    "throughput_mbps": 101.8,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 41,
    "latency_ms": 19.2,
    "jitter_ms": 6.2,
    "packet_loss_pct": 0.21,
    "throughput_mbps": 232.0,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 42,
    "latency_ms": 32.6,
    "jitter_ms": 3.4,
    "packet_loss_pct": 0.22,
    "throughput_mbps": 187.1,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 43,
    "latency_ms": 21.6,
    "jitter_ms": 3.7,
    "packet_loss_pct": 0.57,
    "throughput_mbps": 168.5,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 44,
    "latency_ms": 26.0,
    "jitter_ms": 6.9,
    "packet_loss_pct": 0.5,
    "throughput_mbps": 96.2,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 45,
    "latency_ms": 19.6,
    "jitter_ms": 5.2,
    "packet_loss_pct": 0.31,
    "throughput_mbps": 148.7,
    "network_type": "5G Ultra Wideband",
    "qos_class": "GOOD",
    "recommended_apps": "Live Streaming, Cloud Gaming, 4K"
  },
  {
    "sample_id": 46,
    "latency_ms": 41.8,
    "jitter_ms": 7.4,
    "packet_loss_pct": 0.79,
    "throughput_mbps": 40.4,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 47,
    "latency_ms": 34.3,
    "jitter_ms": 5.7,
    "packet_loss_pct": 0.72,
    "throughput_mbps": 48.7,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 48,
    "latency_ms": 29.4,
    "jitter_ms": 6.2,
    "packet_loss_pct": 0.45,
    "throughput_mbps": 50.3,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 49,
    "latency_ms": 30.7,
    "jitter_ms": 8.6,
    "packet_loss_pct": 0.47,
    "throughput_mbps": 82.4,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 50,
    "latency_ms": 37.7,
    "jitter_ms": 4.3,
    "packet_loss_pct": 0.8,
    "throughput_mbps": 81.0,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 51,
    "latency_ms": 47.3,
    "jitter_ms": 8.6,
    "packet_loss_pct": 0.71,
    "throughput_mbps": 44.1,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 52,
    "latency_ms": 36.2,
    "jitter_ms": 5.1,
    "packet_loss_pct": 0.44,
    "throughput_mbps": 38.2,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 53,
    "latency_ms": 33.7,
    "jitter_ms": 8.9,
    "packet_loss_pct": 0.36,
    "throughput_mbps": 78.1,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 54,
    "latency_ms": 35.5,
    "jitter_ms": 6.1,
    "packet_loss_pct": 0.77,
    "throughput_mbps": 89.7,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 55,
    "latency_ms": 37.8,
    "jitter_ms": 7.6,
    "packet_loss_pct": 0.29,
    "throughput_mbps": 51.3,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 56,
    "latency_ms": 47.3,
    "jitter_ms": 6.9,
    "packet_loss_pct": 0.53,
    "throughput_mbps": 76.1,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 57,
    "latency_ms": 26.3,
    "jitter_ms": 6.9,
    "packet_loss_pct": 0.5,
    "throughput_mbps": 81.9,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 58,
    "latency_ms": 28.6,
    "jitter_ms": 8.8,
    "packet_loss_pct": 0.25,
    "throughput_mbps": 45.2,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 59,
    "latency_ms": 38.7,
    "jitter_ms": 7.4,
    "packet_loss_pct": 0.34,
    "throughput_mbps": 41.6,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 60,
    "latency_ms": 45.5,
    "jitter_ms": 5.2,
    "packet_loss_pct": 0.56,
    "throughput_mbps": 69.1,
    "network_type": "5G Sub-6",
    "qos_class": "GOOD",
    "recommended_apps": "4K Streaming, VoIP, Online Multiplayer"
  },
  {
    "sample_id": 61,
    "latency_ms": 20.4,
    "jitter_ms": 4.3,
    "packet_loss_pct": 0.21,
    "throughput_mbps": 191.5,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 62,
    "latency_ms": 16.1,
    "jitter_ms": 4.9,
    "packet_loss_pct": 0.1,
    "throughput_mbps": 121.5,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 63,
    "latency_ms": 25.4,
    "jitter_ms": 3.2,
    "packet_loss_pct": 0.13,
    "throughput_mbps": 167.7,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 64,
    "latency_ms": 13.5,
    "jitter_ms": 3.8,
    "packet_loss_pct": 0.4,
    "throughput_mbps": 199.5,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 65,
    "latency_ms": 13.5,
    "jitter_ms": 2.9,
    "packet_loss_pct": 0.11,
    "throughput_mbps": 191.3,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 66,
    "latency_ms": 29.6,
    "jitter_ms": 5.5,
    "packet_loss_pct": 0.15,
    "throughput_mbps": 90.5,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 67,
    "latency_ms": 28.7,
    "jitter_ms": 4.8,
    "packet_loss_pct": 0.24,
    "throughput_mbps": 198.3,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 68,
    "latency_ms": 25.1,
    "jitter_ms": 2.0,
    "packet_loss_pct": 0.33,
    "throughput_mbps": 108.9,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 69,
    "latency_ms": 25.3,
    "jitter_ms": 5.8,
    "packet_loss_pct": 0.05,
    "throughput_mbps": 85.0,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 70,
    "latency_ms": 14.1,
    "jitter_ms": 4.2,
    "packet_loss_pct": 0.11,
    "throughput_mbps": 148.6,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 71,
    "latency_ms": 26.4,
    "jitter_ms": 2.8,
    "packet_loss_pct": 0.25,
    "throughput_mbps": 104.3,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 72,
    "latency_ms": 21.8,
    "jitter_ms": 5.6,
    "packet_loss_pct": 0.34,
    "throughput_mbps": 82.0,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 73,
    "latency_ms": 20.5,
    "jitter_ms": 3.1,
    "packet_loss_pct": 0.0,
    "throughput_mbps": 170.2,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 74,
    "latency_ms": 24.7,
    "jitter_ms": 3.0,
    "packet_loss_pct": 0.3,
    "throughput_mbps": 141.7,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 75,
    "latency_ms": 20.6,
    "jitter_ms": 2.0,
    "packet_loss_pct": 0.03,
    "throughput_mbps": 184.8,
    "network_type": "Wi-Fi 6 (Low Load)",
    "qos_class": "GOOD",
    "recommended_apps": "Cloud Gaming, HD Video, Fast DL"
  },
  {
    "sample_id": 76,
    "latency_ms": 91.2,
    "jitter_ms": 14.4,
    "packet_loss_pct": 2.0,
    "throughput_mbps": 21.3,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 77,
    "latency_ms": 60.9,
    "jitter_ms": 11.0,
    "packet_loss_pct": 1.37,
    "throughput_mbps": 26.4,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 78,
    "latency_ms": 86.8,
    "jitter_ms": 16.9,
    "packet_loss_pct": 2.08,
    "throughput_mbps": 15.4,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 79,
    "latency_ms": 65.0,
    "jitter_ms": 10.8,
    "packet_loss_pct": 1.94,
    "throughput_mbps": 26.1,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 80,
    "latency_ms": 71.3,
    "jitter_ms": 15.0,
    "packet_loss_pct": 1.19,
    "throughput_mbps": 26.9,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 81,
    "latency_ms": 89.6,
    "jitter_ms": 17.8,
    "packet_loss_pct": 1.97,
    "throughput_mbps": 26.1,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 82,
    "latency_ms": 56.0,
    "jitter_ms": 15.9,
    "packet_loss_pct": 1.4,
    "throughput_mbps": 26.9,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 83,
    "latency_ms": 87.1,
    "jitter_ms": 16.9,
    "packet_loss_pct": 1.97,
    "throughput_mbps": 16.3,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 84,
    "latency_ms": 86.5,
    "jitter_ms": 10.9,
    "packet_loss_pct": 2.05,
    "throughput_mbps": 25.7,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 85,
    "latency_ms": 63.9,
    "jitter_ms": 16.5,
    "packet_loss_pct": 1.55,
    "throughput_mbps": 16.9,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 86,
    "latency_ms": 86.8,
    "jitter_ms": 11.8,
    "packet_loss_pct": 1.03,
    "throughput_mbps": 15.1,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 87,
    "latency_ms": 68.1,
    "jitter_ms": 16.9,
    "packet_loss_pct": 2.16,
    "throughput_mbps": 16.5,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 88,
    "latency_ms": 80.7,
    "jitter_ms": 13.2,
    "packet_loss_pct": 2.18,
    "throughput_mbps": 20.6,
    "network_type": "4G LTE Standard",
    "qos_class": "MEDIUM",
    "recommended_apps": "1080p Video, Web, Standard Calls"
  },
  {
    "sample_id": 89,
    "latency_ms": 82.9,
    "jitter_ms": 12.0,
    "packet_loss_pct": 2.46,
    "throughput_mbps": 18.0,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 90,
    "latency_ms": 83.7,
    "jitter_ms": 13.4,
    "packet_loss_pct": 1.25,
    "throughput_mbps": 22.4,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 91,
    "latency_ms": 75.5,
    "jitter_ms": 13.8,
    "packet_loss_pct": 1.95,
    "throughput_mbps": 23.7,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 92,
    "latency_ms": 63.5,
    "jitter_ms": 16.2,
    "packet_loss_pct": 1.46,
    "throughput_mbps": 27.0,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 93,
    "latency_ms": 50.1,
    "jitter_ms": 19.3,
    "packet_loss_pct": 1.85,
    "throughput_mbps": 27.2,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 94,
    "latency_ms": 76.0,
    "jitter_ms": 17.0,
    "packet_loss_pct": 1.61,
    "throughput_mbps": 16.2,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 95,
    "latency_ms": 73.2,
    "jitter_ms": 14.0,
    "packet_loss_pct": 1.54,
    "throughput_mbps": 29.4,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 96,
    "latency_ms": 75.2,
    "jitter_ms": 13.7,
    "packet_loss_pct": 1.53,
    "throughput_mbps": 21.9,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 97,
    "latency_ms": 64.1,
    "jitter_ms": 13.7,
    "packet_loss_pct": 1.28,
    "throughput_mbps": 22.1,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 98,
    "latency_ms": 82.9,
    "jitter_ms": 17.1,
    "packet_loss_pct": 2.36,
    "throughput_mbps": 25.5,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 99,
    "latency_ms": 60.5,
    "jitter_ms": 15.9,
    "packet_loss_pct": 1.1,
    "throughput_mbps": 19.9,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 100,
    "latency_ms": 65.0,
    "jitter_ms": 16.2,
    "packet_loss_pct": 2.02,
    "throughput_mbps": 22.9,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 101,
    "latency_ms": 65.5,
    "jitter_ms": 12.9,
    "packet_loss_pct": 1.76,
    "throughput_mbps": 30.3,
    "network_type": "Wi-Fi (Multi-User)",
    "qos_class": "MEDIUM",
    "recommended_apps": "Zoom Calls, YouTube 1080p, Web"
  },
  {
    "sample_id": 102,
    "latency_ms": 99.8,
    "jitter_ms": 13.7,
    "packet_loss_pct": 1.32,
    "throughput_mbps": 17.7,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 103,
    "latency_ms": 91.6,
    "jitter_ms": 15.4,
    "packet_loss_pct": 2.35,
    "throughput_mbps": 21.3,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 104,
    "latency_ms": 93.6,
    "jitter_ms": 14.2,
    "packet_loss_pct": 1.48,
    "throughput_mbps": 10.4,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 105,
    "latency_ms": 72.2,
    "jitter_ms": 16.8,
    "packet_loss_pct": 2.39,
    "throughput_mbps": 11.1,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 106,
    "latency_ms": 80.7,
    "jitter_ms": 18.3,
    "packet_loss_pct": 1.47,
    "throughput_mbps": 20.4,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 107,
    "latency_ms": 84.7,
    "jitter_ms": 14.4,
    "packet_loss_pct": 2.12,
    "throughput_mbps": 10.1,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 108,
    "latency_ms": 97.5,
    "jitter_ms": 19.7,
    "packet_loss_pct": 1.35,
    "throughput_mbps": 16.4,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 109,
    "latency_ms": 68.8,
    "jitter_ms": 21.6,
    "packet_loss_pct": 1.93,
    "throughput_mbps": 10.8,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 110,
    "latency_ms": 72.5,
    "jitter_ms": 20.5,
    "packet_loss_pct": 1.84,
    "throughput_mbps": 22.0,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 111,
    "latency_ms": 93.4,
    "jitter_ms": 21.9,
    "packet_loss_pct": 2.03,
    "throughput_mbps": 24.3,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 112,
    "latency_ms": 104.6,
    "jitter_ms": 18.1,
    "packet_loss_pct": 2.21,
    "throughput_mbps": 17.6,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 113,
    "latency_ms": 101.5,
    "jitter_ms": 17.5,
    "packet_loss_pct": 2.46,
    "throughput_mbps": 21.2,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 114,
    "latency_ms": 83.7,
    "jitter_ms": 14.6,
    "packet_loss_pct": 1.55,
    "throughput_mbps": 19.6,
    "network_type": "VDSL / Cable",
    "qos_class": "MEDIUM",
    "recommended_apps": "Video Meetings, Buffered Streaming"
  },
  {
    "sample_id": 115,
    "latency_ms": 125.9,
    "jitter_ms": 19.2,
    "packet_loss_pct": 2.34,
    "throughput_mbps": 9.3,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 116,
    "latency_ms": 84.6,
    "jitter_ms": 16.9,
    "packet_loss_pct": 1.81,
    "throughput_mbps": 9.8,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 117,
    "latency_ms": 112.4,
    "jitter_ms": 15.4,
    "packet_loss_pct": 1.75,
    "throughput_mbps": 14.3,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 118,
    "latency_ms": 122.4,
    "jitter_ms": 14.6,
    "packet_loss_pct": 2.01,
    "throughput_mbps": 12.5,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 119,
    "latency_ms": 104.9,
    "jitter_ms": 16.1,
    "packet_loss_pct": 2.03,
    "throughput_mbps": 16.9,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 120,
    "latency_ms": 115.0,
    "jitter_ms": 21.0,
    "packet_loss_pct": 2.69,
    "throughput_mbps": 15.2,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 121,
    "latency_ms": 102.8,
    "jitter_ms": 14.1,
    "packet_loss_pct": 1.93,
    "throughput_mbps": 15.0,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 122,
    "latency_ms": 131.2,
    "jitter_ms": 23.5,
    "packet_loss_pct": 2.03,
    "throughput_mbps": 15.0,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 123,
    "latency_ms": 112.8,
    "jitter_ms": 20.0,
    "packet_loss_pct": 1.73,
    "throughput_mbps": 8.6,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 124,
    "latency_ms": 106.2,
    "jitter_ms": 14.3,
    "packet_loss_pct": 1.9,
    "throughput_mbps": 14.1,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 125,
    "latency_ms": 104.3,
    "jitter_ms": 15.7,
    "packet_loss_pct": 2.1,
    "throughput_mbps": 7.5,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 126,
    "latency_ms": 117.3,
    "jitter_ms": 14.3,
    "packet_loss_pct": 1.99,
    "throughput_mbps": 12.8,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 127,
    "latency_ms": 81.6,
    "jitter_ms": 20.4,
    "packet_loss_pct": 1.6,
    "throughput_mbps": 11.5,
    "network_type": "4G Edge Cell",
    "qos_class": "MEDIUM",
    "recommended_apps": "720p Video, Social Media, Audio"
  },
  {
    "sample_id": 128,
    "latency_ms": 92.8,
    "jitter_ms": 18.8,
    "packet_loss_pct": 1.82,
    "throughput_mbps": 11.9,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 129,
    "latency_ms": 131.9,
    "jitter_ms": 18.8,
    "packet_loss_pct": 2.63,
    "throughput_mbps": 18.0,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 130,
    "latency_ms": 103.9,
    "jitter_ms": 15.8,
    "packet_loss_pct": 1.53,
    "throughput_mbps": 14.5,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 131,
    "latency_ms": 145.0,
    "jitter_ms": 18.5,
    "packet_loss_pct": 2.48,
    "throughput_mbps": 17.4,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 132,
    "latency_ms": 125.8,
    "jitter_ms": 22.5,
    "packet_loss_pct": 2.92,
    "throughput_mbps": 10.4,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 133,
    "latency_ms": 91.1,
    "jitter_ms": 16.5,
    "packet_loss_pct": 1.69,
    "throughput_mbps": 16.0,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 134,
    "latency_ms": 121.0,
    "jitter_ms": 17.2,
    "packet_loss_pct": 2.55,
    "throughput_mbps": 17.2,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 135,
    "latency_ms": 99.2,
    "jitter_ms": 21.1,
    "packet_loss_pct": 2.62,
    "throughput_mbps": 9.4,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 136,
    "latency_ms": 135.1,
    "jitter_ms": 24.6,
    "packet_loss_pct": 1.66,
    "throughput_mbps": 8.3,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 137,
    "latency_ms": 107.2,
    "jitter_ms": 21.8,
    "packet_loss_pct": 2.94,
    "throughput_mbps": 12.8,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 138,
    "latency_ms": 129.3,
    "jitter_ms": 15.8,
    "packet_loss_pct": 2.54,
    "throughput_mbps": 15.5,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 139,
    "latency_ms": 95.6,
    "jitter_ms": 22.7,
    "packet_loss_pct": 2.78,
    "throughput_mbps": 15.2,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 140,
    "latency_ms": 96.7,
    "jitter_ms": 24.8,
    "packet_loss_pct": 2.67,
    "throughput_mbps": 12.2,
    "network_type": "Rural Fixed Wireless",
    "qos_class": "MEDIUM",
    "recommended_apps": "Web Browsing, Standard Video"
  },
  {
    "sample_id": 141,
    "latency_ms": 191.4,
    "jitter_ms": 32.4,
    "packet_loss_pct": 5.52,
    "throughput_mbps": 2.5,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 142,
    "latency_ms": 227.2,
    "jitter_ms": 41.4,
    "packet_loss_pct": 3.92,
    "throughput_mbps": 4.9,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 143,
    "latency_ms": 209.0,
    "jitter_ms": 41.6,
    "packet_loss_pct": 6.33,
    "throughput_mbps": 2.9,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 144,
    "latency_ms": 217.4,
    "jitter_ms": 44.3,
    "packet_loss_pct": 4.58,
    "throughput_mbps": 4.3,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 145,
    "latency_ms": 200.7,
    "jitter_ms": 34.7,
    "packet_loss_pct": 5.24,
    "throughput_mbps": 4.0,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 146,
    "latency_ms": 177.8,
    "jitter_ms": 42.0,
    "packet_loss_pct": 6.82,
    "throughput_mbps": 1.5,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 147,
    "latency_ms": 229.9,
    "jitter_ms": 29.9,
    "packet_loss_pct": 5.36,
    "throughput_mbps": 3.5,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 148,
    "latency_ms": 187.2,
    "jitter_ms": 25.6,
    "packet_loss_pct": 6.9,
    "throughput_mbps": 1.9,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 149,
    "latency_ms": 173.0,
    "jitter_ms": 41.0,
    "packet_loss_pct": 4.86,
    "throughput_mbps": 4.5,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 150,
    "latency_ms": 214.6,
    "jitter_ms": 30.5,
    "packet_loss_pct": 3.54,
    "throughput_mbps": 4.8,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 151,
    "latency_ms": 162.3,
    "jitter_ms": 39.4,
    "packet_loss_pct": 5.45,
    "throughput_mbps": 4.1,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 152,
    "latency_ms": 213.7,
    "jitter_ms": 37.9,
    "packet_loss_pct": 5.46,
    "throughput_mbps": 4.2,
    "network_type": "Congested Public Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Basic Web, Text Chat (Frequent Lag)"
  },
  {
    "sample_id": 153,
    "latency_ms": 502.3,
    "jitter_ms": 36.6,
    "packet_loss_pct": 5.08,
    "throughput_mbps": 4.4,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 154,
    "latency_ms": 619.6,
    "jitter_ms": 44.2,
    "packet_loss_pct": 4.59,
    "throughput_mbps": 5.4,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 155,
    "latency_ms": 659.0,
    "jitter_ms": 39.9,
    "packet_loss_pct": 5.11,
    "throughput_mbps": 4.2,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 156,
    "latency_ms": 540.3,
    "jitter_ms": 33.6,
    "packet_loss_pct": 3.58,
    "throughput_mbps": 3.0,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 157,
    "latency_ms": 608.6,
    "jitter_ms": 52.9,
    "packet_loss_pct": 3.56,
    "throughput_mbps": 3.7,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 158,
    "latency_ms": 596.2,
    "jitter_ms": 51.7,
    "packet_loss_pct": 5.93,
    "throughput_mbps": 6.2,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 159,
    "latency_ms": 547.9,
    "jitter_ms": 33.0,
    "packet_loss_pct": 3.58,
    "throughput_mbps": 3.8,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 160,
    "latency_ms": 523.1,
    "jitter_ms": 30.4,
    "packet_loss_pct": 4.6,
    "throughput_mbps": 4.2,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 161,
    "latency_ms": 713.8,
    "jitter_ms": 46.6,
    "packet_loss_pct": 5.09,
    "throughput_mbps": 3.0,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 162,
    "latency_ms": 688.4,
    "jitter_ms": 44.7,
    "packet_loss_pct": 5.62,
    "throughput_mbps": 6.6,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 163,
    "latency_ms": 592.7,
    "jitter_ms": 43.2,
    "packet_loss_pct": 3.55,
    "throughput_mbps": 2.4,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 164,
    "latency_ms": 705.9,
    "jitter_ms": 44.3,
    "packet_loss_pct": 5.47,
    "throughput_mbps": 5.2,
    "network_type": "Legacy Geostationary Satellite",
    "qos_class": "BAD",
    "recommended_apps": "Buffered Web, Email Only"
  },
  {
    "sample_id": 165,
    "latency_ms": 167.4,
    "jitter_ms": 36.1,
    "packet_loss_pct": 4.24,
    "throughput_mbps": 1.2,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 166,
    "latency_ms": 216.3,
    "jitter_ms": 30.9,
    "packet_loss_pct": 8.47,
    "throughput_mbps": 1.1,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 167,
    "latency_ms": 236.4,
    "jitter_ms": 35.7,
    "packet_loss_pct": 7.56,
    "throughput_mbps": 1.4,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 168,
    "latency_ms": 212.3,
    "jitter_ms": 33.2,
    "packet_loss_pct": 5.99,
    "throughput_mbps": 3.1,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 169,
    "latency_ms": 259.0,
    "jitter_ms": 30.9,
    "packet_loss_pct": 6.79,
    "throughput_mbps": 2.4,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 170,
    "latency_ms": 234.0,
    "jitter_ms": 41.2,
    "packet_loss_pct": 4.94,
    "throughput_mbps": 1.4,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 171,
    "latency_ms": 226.0,
    "jitter_ms": 28.5,
    "packet_loss_pct": 4.78,
    "throughput_mbps": 1.0,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 172,
    "latency_ms": 160.3,
    "jitter_ms": 33.2,
    "packet_loss_pct": 6.67,
    "throughput_mbps": 1.6,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 173,
    "latency_ms": 183.1,
    "jitter_ms": 37.3,
    "packet_loss_pct": 7.16,
    "throughput_mbps": 2.0,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 174,
    "latency_ms": 228.7,
    "jitter_ms": 40.8,
    "packet_loss_pct": 7.55,
    "throughput_mbps": 2.5,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 175,
    "latency_ms": 226.1,
    "jitter_ms": 40.9,
    "packet_loss_pct": 5.91,
    "throughput_mbps": 2.3,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 176,
    "latency_ms": 224.8,
    "jitter_ms": 40.5,
    "packet_loss_pct": 7.72,
    "throughput_mbps": 1.0,
    "network_type": "3G / Degraded Cellular",
    "qos_class": "BAD",
    "recommended_apps": "Low-Res Audio, Text Messaging"
  },
  {
    "sample_id": 177,
    "latency_ms": 211.6,
    "jitter_ms": 41.2,
    "packet_loss_pct": 10.24,
    "throughput_mbps": 3.0,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 178,
    "latency_ms": 227.5,
    "jitter_ms": 37.5,
    "packet_loss_pct": 9.82,
    "throughput_mbps": 3.4,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 179,
    "latency_ms": 312.5,
    "jitter_ms": 45.0,
    "packet_loss_pct": 8.46,
    "throughput_mbps": 1.7,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 180,
    "latency_ms": 195.2,
    "jitter_ms": 43.6,
    "packet_loss_pct": 7.26,
    "throughput_mbps": 2.2,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 181,
    "latency_ms": 201.9,
    "jitter_ms": 54.2,
    "packet_loss_pct": 10.85,
    "throughput_mbps": 3.1,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 182,
    "latency_ms": 313.6,
    "jitter_ms": 55.0,
    "packet_loss_pct": 9.71,
    "throughput_mbps": 2.2,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 183,
    "latency_ms": 195.2,
    "jitter_ms": 50.1,
    "packet_loss_pct": 8.29,
    "throughput_mbps": 3.3,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 184,
    "latency_ms": 309.1,
    "jitter_ms": 38.6,
    "packet_loss_pct": 9.1,
    "throughput_mbps": 3.2,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 185,
    "latency_ms": 253.9,
    "jitter_ms": 36.8,
    "packet_loss_pct": 7.44,
    "throughput_mbps": 2.4,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 186,
    "latency_ms": 277.1,
    "jitter_ms": 52.2,
    "packet_loss_pct": 7.31,
    "throughput_mbps": 3.4,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 187,
    "latency_ms": 227.5,
    "jitter_ms": 53.9,
    "packet_loss_pct": 10.69,
    "throughput_mbps": 3.0,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 188,
    "latency_ms": 249.1,
    "jitter_ms": 41.3,
    "packet_loss_pct": 7.26,
    "throughput_mbps": 4.1,
    "network_type": "Packet Storm / Bufferbloat",
    "qos_class": "BAD",
    "recommended_apps": "Severely Impaired (Dropped Packets)"
  },
  {
    "sample_id": 189,
    "latency_ms": 214.5,
    "jitter_ms": 38.3,
    "packet_loss_pct": 8.94,
    "throughput_mbps": 2.3,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 190,
    "latency_ms": 229.7,
    "jitter_ms": 36.3,
    "packet_loss_pct": 4.78,
    "throughput_mbps": 1.7,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 191,
    "latency_ms": 253.2,
    "jitter_ms": 40.5,
    "packet_loss_pct": 7.75,
    "throughput_mbps": 1.4,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 192,
    "latency_ms": 230.4,
    "jitter_ms": 46.6,
    "packet_loss_pct": 6.08,
    "throughput_mbps": 2.4,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 193,
    "latency_ms": 183.4,
    "jitter_ms": 47.5,
    "packet_loss_pct": 6.97,
    "throughput_mbps": 1.5,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 194,
    "latency_ms": 187.4,
    "jitter_ms": 39.0,
    "packet_loss_pct": 6.67,
    "throughput_mbps": 1.2,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 195,
    "latency_ms": 279.1,
    "jitter_ms": 46.3,
    "packet_loss_pct": 6.2,
    "throughput_mbps": 1.2,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 196,
    "latency_ms": 261.5,
    "jitter_ms": 38.0,
    "packet_loss_pct": 7.53,
    "throughput_mbps": 2.0,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 197,
    "latency_ms": 200.1,
    "jitter_ms": 44.7,
    "packet_loss_pct": 8.9,
    "throughput_mbps": 1.5,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 198,
    "latency_ms": 230.6,
    "jitter_ms": 35.7,
    "packet_loss_pct": 8.59,
    "throughput_mbps": 2.0,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 199,
    "latency_ms": 266.7,
    "jitter_ms": 45.3,
    "packet_loss_pct": 5.24,
    "throughput_mbps": 2.6,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  },
  {
    "sample_id": 200,
    "latency_ms": 215.6,
    "jitter_ms": 46.7,
    "packet_loss_pct": 6.44,
    "throughput_mbps": 2.6,
    "network_type": "Extreme Range Wi-Fi",
    "qos_class": "BAD",
    "recommended_apps": "Connection Dropouts, Text Only"
  }
];

export const DATASET_STATS = {
  totalSamples: 200,
  goodCount: 75,
  medCount: 65,
  badCount: 60,
  features: ["latency_ms", "jitter_ms", "packet_loss_pct", "throughput_mbps"],
  modelAccuracy: 99.2,
  nEstimators: 50,
  criterion: "Gini Impurity"
};
