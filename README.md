# AI QoS Monitor

A real-time AI-based Network Quality of Service (QoS) classification system.

This project consists of two parts:
1. **FastAPI Backend (Python)**: Provides accurate network test endpoints (ping, multi-stream large payload download) and runs a real Scikit-Learn Random Forest model for ML predictions.
2. **React/Vite Frontend (TypeScript)**: A streamlined dashboard that probes the backend to accurately measure Latency, Jitter, Packet Loss, and Throughput, and displays the QoS classification.

## Measurement Methodology

- **Latency (ms)**: Calculates the Median Round Trip Time (RTT) from 20 lightweight, cache-busting probes to the backend.
- **Jitter (ms)**: Calculated mathematically as the average absolute difference between consecutive RTTs.
- **Estimated Packet Loss (%)**: The percentage of failed/timeout HTTP probes out of 20 total.
- **Throughput (Mbps)**: Uses 4 parallel TCP streams to download a large dynamic payload (15MB) from the backend over a strict 5-second duration. It calculates Mbps based on actual bytes received over time.

*Limitations:* 
Since this uses HTTP for probing instead of raw ICMP pings or UDP packets (due to browser security restrictions), the packet loss is an "application-layer estimate". Additionally, running the backend on `localhost` will measure your machine's internal loopback interface. For real internet measurements, the FastAPI backend should be hosted on a remote server/CDN.

## Run Locally

### 1. Setup the Python ML Backend
Make sure you have Python 3.9+ installed.

```bash
# Install dependencies
pip install -r requirements.txt

# Train the Random Forest Model (saves qos_model.joblib)
python train_model.py

# Start the FastAPI Server (runs on 127.0.0.1:8000)
python main.py
```

### 2. Setup the React Frontend
Open a new terminal window.

```bash
# Install Node dependencies
npm install

# Start the Vite development server
npm run dev
```

Visit the displayed URL (usually `http://localhost:3000`) in your browser and click **CHECK NETWORK**.
