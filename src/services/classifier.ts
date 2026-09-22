import { QoSClassification, QoSParameters, QoSPredictionResult } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

/**
 * Predicts Network Quality of Service by calling the backend Random Forest model API.
 */
export async function predictQoS(params: QoSParameters): Promise<QoSPredictionResult> {
  const { latency, jitter, packetLoss, throughput } = params;

  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latency_ms: latency,
        jitter_ms: jitter,
        packet_loss_pct: packetLoss,
        throughput_mbps: throughput
      })
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    const prediction = data.prediction as QoSClassification;
    
    // Application suitability evaluation based on strict documented QoS requirements
    let gamingStatus: QoSClassification = 'GOOD';
    if (latency > 100 || jitter > 20 || packetLoss > 2.0) gamingStatus = 'BAD';
    else if (latency > 55 || jitter > 12 || packetLoss > 0.8) gamingStatus = 'MEDIUM';

    let videoStatus: QoSClassification = 'GOOD';
    if (throughput < 4 || packetLoss > 3.0 || latency > 140 || jitter > 25) videoStatus = 'BAD';
    else if (throughput < 10 || packetLoss > 1.2 || latency > 75 || jitter > 15) videoStatus = 'MEDIUM';

    let downloadStatus: QoSClassification = 'GOOD';
    if (throughput < 8 || packetLoss > 4.0) downloadStatus = 'BAD';
    else if (throughput < 25 || packetLoss > 1.5) downloadStatus = 'MEDIUM';

    return {
      prediction: prediction,
      confidence: Math.round(data.confidence * 100),
      probabilities: {
        good: data.probabilities['GOOD'] || 0,
        med: data.probabilities['MEDIUM'] || 0,
        bad: data.probabilities['BAD'] || 0,
      },
      applications: {
        gaming: { status: gamingStatus, description: 'Online competitive gaming' },
        videoCall: { status: videoStatus, description: 'HD video calling' },
        download: { status: downloadStatus, description: 'Large file downloads' },
      }
    };
  } catch (error) {
    console.error("Failed to fetch ML prediction", error);
    // Fallback if backend is down
    return {
      prediction: 'MEDIUM',
      confidence: 0,
      probabilities: { good: 0, med: 1, bad: 0 },
      applications: {
        gaming: { status: 'MEDIUM', description: 'Backend unavailable' },
        videoCall: { status: 'MEDIUM', description: 'Backend unavailable' },
        download: { status: 'MEDIUM', description: 'Backend unavailable' },
      }
    };
  }
}

export function getParameterEvaluation(name: keyof QoSParameters, value: number): {
  status: QoSClassification;
  percentage: number;
} {
  switch (name) {
    case 'latency':
      // 0 - 200 ms scale
      return {
        status: value <= 50 ? 'GOOD' : value <= 110 ? 'MEDIUM' : 'BAD',
        percentage: Math.min(100, Math.max(8, (value / 200) * 100)),
      };
    case 'jitter':
      // 0 - 30 ms scale
      return {
        status: value <= 10 ? 'GOOD' : value <= 20 ? 'MEDIUM' : 'BAD',
        percentage: Math.min(100, Math.max(8, (value / 30) * 100)),
      };
    case 'packetLoss':
      // 0 - 5 % scale
      return {
        status: value <= 1.0 ? 'GOOD' : value <= 3.0 ? 'MEDIUM' : 'BAD',
        percentage: Math.min(100, Math.max(8, (value / 5.0) * 100)),
      };
    case 'throughput':
      // 0 - 80 Mbps scale
      return {
        status: value >= 30 ? 'GOOD' : value >= 12 ? 'MEDIUM' : 'BAD',
        percentage: Math.min(100, Math.max(8, (value / 80) * 100)),
      };
  }
}
