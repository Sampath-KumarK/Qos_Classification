import { useState } from 'react';
import { QoSPredictionResult, QoSParameters } from '../types';
import { predictQoS } from '../services/classifier';
import { PredictionCard } from './PredictionCard';
import { ApplicationCards } from './ApplicationCards';
import { Settings2, RefreshCw } from 'lucide-react';

export function ManualPredictionTab() {
  const [latency, setLatency] = useState<number | ''>('');
  const [jitter, setJitter] = useState<number | ''>('');
  const [packetLoss, setPacketLoss] = useState<number | ''>('');
  const [throughput, setThroughput] = useState<number | ''>('');
  
  const [predictionResult, setPredictionResult] = useState<QoSPredictionResult | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = async () => {
    // Validate inputs
    if (latency === '' || jitter === '' || packetLoss === '' || throughput === '') {
      setError('Please fill out all fields with valid numbers.');
      return;
    }
    
    setError('');
    setIsPredicting(true);
    setPredictionResult(null);

    const params: QoSParameters = {
      latency: Number(latency),
      jitter: Number(jitter),
      packetLoss: Number(packetLoss),
      throughput: Number(throughput)
    };

    try {
      const res = await predictQoS(params);
      setPredictionResult(res);
    } catch (e) {
      setError('Failed to get prediction from the AI model.');
      console.error(e);
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            <Settings2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">Manual AI Prediction</h2>
            <p className="text-sm text-slate-500">Enter custom network parameters to test the classification model.</p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm font-semibold rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Latency (ms)</label>
            <input 
              type="number" 
              value={latency} 
              onChange={e => setLatency(e.target.value ? Number(e.target.value) : '')}
              placeholder="e.g., 45"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Jitter (ms)</label>
            <input 
              type="number" 
              value={jitter} 
              onChange={e => setJitter(e.target.value ? Number(e.target.value) : '')}
              placeholder="e.g., 5"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Packet Loss (%)</label>
            <input 
              type="number"
              step="0.1" 
              value={packetLoss} 
              onChange={e => setPacketLoss(e.target.value ? Number(e.target.value) : '')}
              placeholder="e.g., 0.5"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Throughput (Mbps)</label>
            <input 
              type="number" 
              value={throughput} 
              onChange={e => setThroughput(e.target.value ? Number(e.target.value) : '')}
              placeholder="e.g., 100"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        <button
          onClick={handlePredict}
          disabled={isPredicting}
          className="w-full py-3.5 px-6 rounded-2xl bg-indigo-600 text-white font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {isPredicting ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>PREDICTING...</span>
            </>
          ) : (
            <>
              <Settings2 className="w-4 h-4" />
              <span>PREDICT QOS CLASS</span>
            </>
          )}
        </button>
      </div>

      {/* Results Section */}
      {predictionResult && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-2 px-2">
             <div className="h-px bg-slate-200 flex-1"></div>
             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Model Output</span>
             <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <PredictionCard result={predictionResult} />
          <ApplicationCards applications={predictionResult.applications} />
        </div>
      )}
    </div>
  );
}
