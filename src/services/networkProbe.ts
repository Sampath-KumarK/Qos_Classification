import { NetworkProbeResult } from '../types';

// The URL of our new FastAPI backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

/**
 * Calculates the median of an array of numbers.
 */
function calculateMedian(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2.0;
  }
  return sorted[mid];
}

/**
 * Perform 20 latency probes to calculate RTT, Jitter, and Packet Loss.
 */
async function runLatencyTest(): Promise<{ latency: number, jitter: number, packetLoss: number }> {
  const NUM_PROBES = 20;
  const rtts: number[] = [];
  let failures = 0;

  for (let i = 0; i < NUM_PROBES; i++) {
    const start = performance.now();
    try {
      const controller = new AbortController();
      // 2-second timeout per probe
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      // Cache-busting URL to ensure real network round trip
      const url = `${API_BASE_URL}/network/ping?cacheBust=${Date.now()}_${i}`;
      
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const elapsed = performance.now() - start;
        rtts.push(elapsed);
      } else {
        failures++;
      }
    } catch {
      failures++;
    }
  }

  // Calculate Latency (Median RTT)
  const medianLatency = rtts.length > 0 ? calculateMedian(rtts) : 999;
  
  // Calculate Jitter mathematically (average of absolute differences between consecutive RTTs)
  let jitter = 0;
  if (rtts.length > 1) {
    let diffSum = 0;
    for (let i = 1; i < rtts.length; i++) {
      diffSum += Math.abs(rtts[i] - rtts[i - 1]);
    }
    jitter = diffSum / (rtts.length - 1);
  }

  // Calculate Estimated Packet Loss (%)
  const packetLoss = (failures / NUM_PROBES) * 100;

  return {
    latency: Number(medianLatency.toFixed(2)),
    jitter: Number(jitter.toFixed(2)),
    packetLoss: Number(packetLoss.toFixed(1))
  };
}

/**
 * Downloads a stream and counts the bytes received within the duration limit.
 */
async function downloadStream(durationMs: number): Promise<number> {
  let receivedLength = 0;
  const controller = new AbortController();
  
  // Hard stop the fetch after durationMs
  const timeoutId = setTimeout(() => controller.abort(), durationMs);

  try {
    const url = `${API_BASE_URL}/network/download-test?size_mb=15&cacheBust=${Date.now()}_${Math.random()}`;
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache' },
      signal: controller.signal
    });

    if (response.ok && response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (value) {
          receivedLength += value.length;
        }
        if (done) break;
      }
    }
  } catch (err: any) {
    // AbortError is expected when the timeout stops the test. 
    // We still have the `receivedLength` bytes downloaded so far!
  } finally {
    clearTimeout(timeoutId);
  }

  return receivedLength;
}

/**
 * Runs a multi-stream throughput test over a fixed duration (e.g. 5 seconds)
 */
async function runThroughputTest(): Promise<number> {
  const NUM_STREAMS = 4;
  const TEST_DURATION_MS = 5000; // 5 seconds
  
  const start = performance.now();
  
  // Start parallel download streams
  const downloadPromises = Array.from({ length: NUM_STREAMS }).map(() => downloadStream(TEST_DURATION_MS));
  
  const results = await Promise.all(downloadPromises);
  
  const end = performance.now();
  const elapsedSeconds = (end - start) / 1000;
  
  // Total bytes across all streams
  const totalBytes = results.reduce((acc, bytes) => acc + bytes, 0);

  console.log(`[DEBUG] Throughput Test: ${totalBytes} bytes downloaded in ${elapsedSeconds.toFixed(2)}s using ${NUM_STREAMS} streams.`);

  if (elapsedSeconds <= 0.1 || totalBytes === 0) return 0.1;

  // Calculate Mbps: (bytes * 8) / (seconds * 1,000,000)
  const throughputMbps = (totalBytes * 8) / (elapsedSeconds * 1_000_000);
  
  return Number(throughputMbps.toFixed(1));
}

/**
 * Main function to run the full real network probe
 */
export async function probeRealNetwork(): Promise<NetworkProbeResult> {
  console.log("[DEBUG] Starting New Network Measurement...");
  
  const { latency, jitter, packetLoss } = await runLatencyTest();
  console.log(`[DEBUG] Latency: ${latency}ms, Jitter: ${jitter}ms, Loss: ${packetLoss}%`);
  
  const throughput = await runThroughputTest();
  console.log(`[DEBUG] Throughput: ${throughput} Mbps`);

  // Default connection type info
  let connectionLabel = 'Broadband';
  if (typeof navigator !== 'undefined' && (navigator as any).connection) {
    const type = (navigator as any).connection.effectiveType || (navigator as any).connection.type;
    if (type === '4g' || type === 'cellular') {
      connectionLabel = throughput > 100 ? '5G / High-Speed Cellular' : '4G / Cellular';
    } else if (type === 'wifi') {
      connectionLabel = 'Wi-Fi / Broadband';
    }
  }

  return {
    latency,
    jitter,
    packetLoss,
    throughput,
    connectionType: connectionLabel,
    isOnline: true,
    effectiveType: connectionLabel,
    measuredAt: new Date().toLocaleTimeString(),
  };
}
