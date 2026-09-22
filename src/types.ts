export type QoSClassification = 'GOOD' | 'MEDIUM' | 'BAD';

export interface QoSParameters {
  latency: number; // in ms
  jitter: number; // in ms
  packetLoss: number; // in %
  throughput: number; // in Mbps
}

export interface ApplicationSuitability {
  status: QoSClassification;
  description: string;
}

export interface QoSPredictionResult {
  prediction: QoSClassification;
  confidence: number; // percentage, e.g. 92
  probabilities: {
    good: number;
    med: number;
    bad: number;
  };
  applications: {
    gaming: ApplicationSuitability;
    videoCall: ApplicationSuitability;
    download: ApplicationSuitability;
  };
}

export interface ProbeLogEntry {
  id: string;
  timestamp: string;
  parameters: QoSParameters;
  result: QoSPredictionResult;
  source: 'preset' | 'manual' | 'probe';
  networkType?: string;
}

export type ActiveScreen = 'monitor' | 'tuner' | 'dataset' | 'model-info' | 'history';
