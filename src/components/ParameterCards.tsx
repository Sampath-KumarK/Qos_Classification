import React from 'react';
import { QoSParameters } from '../types';
import { getParameterEvaluation } from '../services/classifier';

interface ParameterCardsProps {
  parameters: QoSParameters;
}

export const ParameterCards: React.FC<ParameterCardsProps> = ({ parameters }) => {
  const latencyEval = getParameterEvaluation('latency', parameters.latency);
  const jitterEval = getParameterEvaluation('jitter', parameters.jitter);
  const lossEval = getParameterEvaluation('packetLoss', parameters.packetLoss);
  const throughputEval = getParameterEvaluation('throughput', parameters.throughput);

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'GOOD':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'MEDIUM':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'BAD':
      default:
        return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  const getProgressBarStyle = (status: string) => {
    switch (status) {
      case 'GOOD':
        return 'bg-emerald-500';
      case 'MEDIUM':
        return 'bg-amber-500';
      case 'BAD':
      default:
        return 'bg-rose-500';
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Current QoS Parameters (4 Inputs)
        </span>
        <span className="text-[10px] text-slate-400 font-mono">
          joblib: qos_model
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3">
        {/* CARD 1: Latency */}
        <div
          id="card-latency"
          className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-sm relative overflow-hidden transition-all hover:border-[#0A4A3C]/30"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Latency
            </span>
            <span
              id="badge-latency"
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getStatusBadgeStyle(
                latencyEval.status
              )}`}
            >
              {latencyEval.status}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-latency"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters.latency}
            </span>
            <span className="text-xs font-semibold text-slate-400">ms</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-latency"
              className={`h-full ${getProgressBarStyle(
                latencyEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${latencyEval.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* CARD 2: Jitter */}
        <div
          id="card-jitter"
          className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-sm relative overflow-hidden transition-all hover:border-[#0A4A3C]/30"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Jitter
            </span>
            <span
              id="badge-jitter"
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getStatusBadgeStyle(
                jitterEval.status
              )}`}
            >
              {jitterEval.status}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-jitter"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters.jitter}
            </span>
            <span className="text-xs font-semibold text-slate-400">ms</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-jitter"
              className={`h-full ${getProgressBarStyle(
                jitterEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${jitterEval.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* CARD 3: Packet Loss */}
        <div
          id="card-loss"
          className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-sm relative overflow-hidden transition-all hover:border-[#0A4A3C]/30"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Packet Loss
            </span>
            <span
              id="badge-loss"
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getStatusBadgeStyle(
                lossEval.status
              )}`}
            >
              {lossEval.status}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-loss"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters.packetLoss}
            </span>
            <span className="text-xs font-semibold text-slate-400">%</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-loss"
              className={`h-full ${getProgressBarStyle(
                lossEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${lossEval.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* CARD 4: Throughput */}
        <div
          id="card-throughput"
          className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-sm relative overflow-hidden transition-all hover:border-[#0A4A3C]/30"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Throughput
            </span>
            <span
              id="badge-throughput"
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getStatusBadgeStyle(
                throughputEval.status
              )}`}
            >
              {throughputEval.status}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-throughput"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters.throughput}
            </span>
            <span className="text-xs font-semibold text-slate-400">Mbps</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-throughput"
              className={`h-full ${getProgressBarStyle(
                throughputEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${throughputEval.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
