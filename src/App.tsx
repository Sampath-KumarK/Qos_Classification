import { useState, useEffect } from 'react';
import { QoSParameters, QoSPredictionResult } from './types';
import { predictQoS } from './services/classifier';
import { probeRealNetwork, getBrowserConnectionInfo } from './services/networkProbe';
import { ParameterCards } from './components/ParameterCards';
import { PredictionCard } from './components/PredictionCard';
import { ApplicationCards } from './components/ApplicationCards';

export default function App() {
  const [parameters, setParameters] = useState<QoSParameters>({
    latency: 16.3,
    jitter: 2.49,
    packetLoss: 0,
    throughput: 119,
  });

  const [predictionResult, setPredictionResult] = useState<QoSPredictionResult | null>(null);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [lastCheckedTime, setLastCheckedTime] = useState<string>('N/A');
  const [detectedNetwork, setDetectedNetwork] = useState<string>('Broadband / Wi-Fi');
  
  // Initial load prediction
  useEffect(() => {
    let mounted = true;
    predictQoS(parameters).then(res => {
      if (mounted) setPredictionResult(res);
    });
    return () => { mounted = false; };
  }, []);

  const handleCheckNetwork = async () => {
    setIsChecking(true);
    setPredictionResult(null); // Clear previous result while measuring
    try {
      const probe = await probeRealNetwork();

      const measuredParams: QoSParameters = {
        latency: probe.latency,
        jitter: probe.jitter,
        packetLoss: probe.packetLoss,
        throughput: probe.throughput,
      };

      setParameters(measuredParams);
      setDetectedNetwork(probe.connectionType);
      setLastCheckedTime(probe.measuredAt);

      const res = await predictQoS(measuredParams);
      setPredictionResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-8 lg:py-10 flex flex-col items-center max-w-4xl mx-auto w-full transition-all bg-slate-50">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">AI QoS MONITOR</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">AI-Based Network Quality Classification</p>
        
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          CONNECTED ({detectedNetwork})
        </div>
      </div>

      <div className="w-full border-t border-slate-200/60 my-6"></div>

      <main className="w-full space-y-6 flex-col items-center justify-center">
        
        {/* 4 Parameter Cards */}
        <ParameterCards parameters={parameters} />

        <div className="w-full border-t border-slate-200/60 my-6"></div>

        {/* AI Prediction and Applications */}
        {predictionResult ? (
          <>
            <PredictionCard result={predictionResult} />
            <ApplicationCards applications={predictionResult.applications} />
          </>
        ) : (
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-8 h-8 border-4 border-[#0A4A3C]/20 border-t-[#0A4A3C] rounded-full animate-spin mb-4"></div>
            <p className="text-slate-600 font-medium">Measuring Network Quality...</p>
            <p className="text-xs text-slate-400 mt-2 text-center max-w-xs">This tests latency, jitter, packet loss, and actual throughput via our test server.</p>
          </div>
        )}

        <div className="w-full border-t border-slate-200/60 my-6"></div>

        {/* Check Button */}
        <div className="text-center w-full max-w-md mx-auto">
          <button
            onClick={handleCheckNetwork}
            disabled={isChecking}
            className="w-full py-4 px-6 rounded-2xl bg-[#0A4A3C] text-white font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#08382d] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {isChecking ? 'MEASURING...' : 'CHECK NETWORK'}
          </button>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-xs text-slate-400 space-y-1 pb-10">
          <p>Test Server: <strong>127.0.0.1:8000</strong></p>
          <p>Last checked: {lastCheckedTime}</p>
          <p className="mt-2 text-slate-500 italic">"Measurements may vary between speed-test services because they use different servers, routes, test durations, and measurement techniques."</p>
        </div>
      </main>
    </div>
  );
}
