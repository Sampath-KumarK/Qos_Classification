import React from 'react';
import { QoSParameters } from '../types';
import { getParameterEvaluation } from '../services/classifier';

interface ParameterCardsProps {
  parameters: QoSParameters | null;
}

export const ParameterCards: React.FC<ParameterCardsProps> = ({ parameters }) => {
  const latencyEval = parameters ? getParameterEvaluation('latency', parameters.latency) : { status: 'GOOD', percentage: 0 };
  const jitterEval = parameters ? getParameterEvaluation('jitter', parameters.jitter) : { status: 'GOOD', percentage: 0 };
  const lossEval = parameters ? getParameterEvaluation('packetLoss', parameters.packetLoss) : { status: 'GOOD', percentage: 0 };
  const throughputEval = parameters ? getParameterEvaluation('throughput', parameters.throughput) : { status: 'GOOD', percentage: 0 };

  const getStatusBadgeStyle = (status: string) => {
    if (!parameters) return 'bg-slate-100 text-slate-500 border-slate-200';
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
    if (!parameters) return 'bg-slate-300';
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
          Current QoS Parameters (4 Live Metrics)
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
              {parameters ? latencyEval.status : 'UNTESTED'}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-latency"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters ? parameters.latency : '--'}
            </span>
            <span className="text-xs font-semibold text-slate-400">ms</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-latency"
              className={`h-full ${getProgressBarStyle(
                latencyEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${parameters ? latencyEval.percentage : 0}%` }}
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
              {parameters ? jitterEval.status : 'UNTESTED'}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-jitter"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters ? parameters.jitter : '--'}
            </span>
            <span className="text-xs font-semibold text-slate-400">ms</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-jitter"
              className={`h-full ${getProgressBarStyle(
                jitterEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${parameters ? jitterEval.percentage : 0}%` }}
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
              {parameters ? lossEval.status : 'UNTESTED'}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-loss"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters ? parameters.packetLoss : '--'}
            </span>
            <span className="text-xs font-semibold text-slate-400">%</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-loss"
              className={`h-full ${getProgressBarStyle(
                lossEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${parameters ? lossEval.percentage : 0}%` }}
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
              {parameters ? throughputEval.status : 'UNTESTED'}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span
              id="val-throughput"
              className="text-2xl font-black text-slate-800 mono tracking-tight"
            >
              {parameters ? parameters.throughput : '--'}
            </span>
            <span className="text-xs font-semibold text-slate-400">Mbps</span>
          </div>
          <div className="mt-1.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              id="bar-throughput"
              className={`h-full ${getProgressBarStyle(
                throughputEval.status
              )} rounded-full transition-all duration-500`}
              style={{ width: `${parameters ? throughputEval.percentage : 0}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
