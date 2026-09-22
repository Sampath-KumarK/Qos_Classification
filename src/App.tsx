import { useState, useEffect, useRef } from 'react';
import { QoSParameters, QoSPredictionResult, NetworkHistoryPoint } from './types';
import { predictQoS } from './services/classifier';
import { probeRealNetwork } from './services/networkProbe';
import { ParameterCards } from './components/ParameterCards';
import { PredictionCard } from './components/PredictionCard';
import { ApplicationCards } from './components/ApplicationCards';
import { NetworkGraph } from './components/NetworkGraph';
import { ManualPredictionTab } from './components/ManualPredictionTab';
import { LineChart, Activity, Radio, Play, Pause, RefreshCw, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'live' | 'manual'>('live');
  const [parameters, setParameters] = useState<QoSParameters | null>(null);
  const [predictionResult, setPredictionResult] = useState<QoSPredictionResult | null>(null);
  const [hasStartedChecking, setHasStartedChecking] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [isLiveMonitoring, setIsLiveMonitoring] = useState<boolean>(false);
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [lastCheckedTime, setLastCheckedTime] = useState<string>('N/A');
  const [detectedNetwork, setDetectedNetwork] = useState<string>('Broadband / Wi-Fi');
  const [history, setHistory] = useState<NetworkHistoryPoint[]>([]);

  const isMonitoringRef = useRef(isLiveMonitoring);
  const isCheckingRef = useRef(isChecking);

  useEffect(() => {
    isMonitoringRef.current = isLiveMonitoring;
  }, [isLiveMonitoring]);

  useEffect(() => {
    isCheckingRef.current = isChecking;
  }, [isChecking]);

  // Execute a single measurement cycle
  const runMeasurementCycle = async (fastMode: boolean = false) => {
    if (isCheckingRef.current && fastMode) return; // Skip background run if busy

    try {
      const probe = await probeRealNetwork(fastMode);
      const measuredParams: QoSParameters = {
        latency: probe.latency,
        jitter: probe.jitter,
        packetLoss: probe.packetLoss,
        throughput: probe.throughput,
      };

      const res = await predictQoS(measuredParams);

      const newPoint: NetworkHistoryPoint = {
        id: `${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        time: probe.measuredAt,
        latency: probe.latency,
        jitter: probe.jitter,
        packetLoss: probe.packetLoss,
        throughput: probe.throughput,
        prediction: res.prediction,
        confidence: res.confidence,
      };

      setParameters(measuredParams);
      setPredictionResult(res);
      setDetectedNetwork(probe.connectionType);
      setLastCheckedTime(probe.measuredAt);

      setHistory(prev => {
        const next = [...prev, newPoint];
        return next.slice(-30); // keep last 30 samples
      });

      return { probe, res };
    } catch (e) {
      console.error("Measurement error:", e);
    }
  };

  // Initial user trigger button
  const handleCheckNetwork = async () => {
    setHasStartedChecking(true);
    setIsChecking(true);
    setPredictionResult(null);

    await runMeasurementCycle(false);

    setIsChecking(false);
    setIsLiveMonitoring(true); // Automatically start continuous monitoring after first check
  };

  // Continuous background monitoring loop
  useEffect(() => {
    if (!isLiveMonitoring || !hasStartedChecking) return;

    console.log("[DEBUG] Live Monitoring Loop Active");

    const intervalId = setInterval(async () => {
      if (isMonitoringRef.current && !isCheckingRef.current) {
        await runMeasurementCycle(true); // fast periodic sampling
      }
    }, 4500);

    return () => clearInterval(intervalId);
  }, [isLiveMonitoring, hasStartedChecking]);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:px-8 lg:py-10 flex flex-col items-center max-w-4xl mx-auto w-full transition-all bg-slate-50 font-sans">
      
      {/* Header */}
      <div className="text-center mb-6 w-full">
        <div className="inline-flex items-center justify-center p-2 bg-[#0A4A3C]/10 rounded-2xl mb-2 text-[#0A4A3C]">
          <Zap className="w-6 h-6 animate-pulse" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">AI QoS MONITOR</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Real-Time Network Quality Classification & Live Bandwidth Tracking</p>
        
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            CONNECTED ({detectedNetwork})
          </div>

          {isLiveMonitoring && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-200 animate-pulse shadow-sm">
              <Radio className="w-3.5 h-3.5 text-blue-600" />
              LIVE AUTO-MONITORING ACTIVE
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center justify-center gap-2 mb-6 w-full max-w-sm mx-auto p-1.5 bg-slate-200/50 rounded-2xl">
        <button
          onClick={() => setActiveTab('live')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'live' 
              ? 'bg-white text-slate-800 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
          }`}
        >
          Live Auto-Monitor
        </button>
        <button
          onClick={() => setActiveTab('manual')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'manual' 
              ? 'bg-white text-slate-800 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
          }`}
        >
          Manual AI Prediction
        </button>
      </div>

      <div className="w-full border-t border-slate-200/60 my-4"></div>

      <main className="w-full space-y-6">
        {activeTab === 'manual' ? (
          <ManualPredictionTab />
        ) : (
          <>
            {/* Initial Prompt State before first check */}
        {!hasStartedChecking && (
          <div className="bg-gradient-to-br from-[#0A4A3C]/5 via-white to-slate-50 rounded-2xl p-6 sm:p-8 border border-[#0A4A3C]/20 shadow-sm text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#0A4A3C]/10 flex items-center justify-center mx-auto mb-3 text-[#0A4A3C]">
              <Activity className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-800">Ready to Measure Live Network Speed</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Click <strong>"CHECK NETWORK"</strong> below to test real latency, jitter, packet loss, and live bandwidth throughput. Continuous monitoring and live graphs will update automatically.
            </p>
          </div>
        )}

        {/* 4 Parameter Cards */}
        <ParameterCards parameters={parameters} />

        {/* Check Button & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
          <button
            onClick={handleCheckNetwork}
            disabled={isChecking}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-[#0A4A3C] text-white font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#08382d] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isChecking ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>MEASURING LIVE NETWORK...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>{hasStartedChecking ? 'RE-TEST NETWORK' : 'CHECK NETWORK'}</span>
              </>
            )}
          </button>

          {/* Graph Toggle Button */}
          {hasStartedChecking && (
            <button
              onClick={() => setShowGraph(!showGraph)}
              className={`w-full sm:w-auto py-3.5 px-5 rounded-2xl border font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm ${
                showGraph
                  ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
              }`}
            >
              <LineChart className="w-4 h-4 text-emerald-500" />
              <span>{showGraph ? 'HIDE GRAPH' : 'GRAPH VIEW'}</span>
            </button>
          )}
        </div>

        {/* Graph Section (toggled by Graph Button) */}
        {showGraph && (
          <div className="w-full transition-all">
            <NetworkGraph
              history={history}
              isLiveMonitoring={isLiveMonitoring}
              onToggleLiveMonitoring={() => setIsLiveMonitoring(!isLiveMonitoring)}
            />
          </div>
        )}

        {/* Live Auto-Monitor Status Toggle */}
        {hasStartedChecking && (
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm text-xs font-semibold">
            <div className="flex items-center gap-2 text-slate-600">
              <span className={`w-2.5 h-2.5 rounded-full ${isLiveMonitoring ? 'bg-emerald-500 animate-ping' : 'bg-slate-300'}`}></span>
              <span>Continuous Live Auto-Monitoring: <strong>{isLiveMonitoring ? 'ACTIVE' : 'PAUSED'}</strong></span>
            </div>
            <button
              onClick={() => setIsLiveMonitoring(!isLiveMonitoring)}
              className="text-slate-500 hover:text-slate-800 underline font-bold flex items-center gap-1"
            >
              {isLiveMonitoring ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Resume</span>
                </>
              )}
            </button>
          </div>
        )}

        <div className="w-full border-t border-slate-200/60 my-6"></div>

        {/* AI Prediction and Applications */}
        {predictionResult ? (
          <>
            <PredictionCard result={predictionResult} />
            <ApplicationCards applications={predictionResult.applications} />
          </>
        ) : isChecking ? (
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center min-h-[250px]">
            <div className="w-8 h-8 border-4 border-[#0A4A3C]/20 border-t-[#0A4A3C] rounded-full animate-spin mb-4"></div>
            <p className="text-slate-600 font-medium text-sm">Measuring Network Quality...</p>
            <p className="text-xs text-slate-400 mt-2 text-center max-w-xs">Testing live latency, jitter, packet loss, and actual throughput speed.</p>
          </div>
        ) : null}
          </>
        )}

        {/* Footer Info */}
        <div className="text-center mt-8 text-xs text-slate-400 space-y-1 pb-10">
          <p>Test Server: <strong>{import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'}</strong></p>
          <p>Last checked: {lastCheckedTime}</p>
          <p className="mt-2 text-slate-500 italic">"Measurements calculate real live speed & metrics over your active connection."</p>
        </div>
      </main>
    </div>
  );
}
