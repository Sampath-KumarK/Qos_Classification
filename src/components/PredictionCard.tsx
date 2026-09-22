import React from 'react';
import { Users } from 'lucide-react';
import { QoSPredictionResult } from '../types';

interface PredictionCardProps {
  result: QoSPredictionResult;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ result }) => {
  const { prediction, confidence, probabilities } = result;

  const getPredictionColor = () => {
    switch (prediction) {
      case 'GOOD':
        return 'text-emerald-600';
      case 'MEDIUM':
        return 'text-amber-500';
      case 'BAD':
      default:
        return 'text-rose-600';
    }
  };

  return (
    <section
      id="prediction-card"
      className="bg-white rounded-2xl p-5 border-2 border-[#0A4A3C]/15 shadow-md relative overflow-hidden text-center"
    >
      {/* Decorative subtle background corner circle */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#0A4A3C]/5 rounded-full pointer-events-none"></div>

      <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider mb-2">
        <Users className="w-3 h-3 text-[#0A4A3C]" />
        <span>AI Network Quality</span>
      </div>

      {/* Main Prediction Label */}
      <div className="py-1">
        <div
          id="prediction-text"
          className={`text-4xl sm:text-5xl font-extrabold ${getPredictionColor()} tracking-tight transition-all duration-300`}
        >
          {prediction}
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-xs font-semibold text-slate-500">
            ML Model Confidence:
          </span>
          <span
            id="confidence-badge"
            className="px-2 py-0.5 rounded-md bg-[#F2B759]/20 text-[#0A4A3C] font-mono font-bold text-xs border border-[#F2B759]/40 shadow-xs"
          >
            {confidence}%
          </span>
        </div>
      </div>

      {/* Probability distribution gauge bar */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-2 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-xs"></span>
          <span>
            P(Good):{' '}
            <b id="prob-good" className="mono font-bold text-slate-700">
              {probabilities.good}
            </b>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shadow-xs"></span>
          <span>
            P(Med):{' '}
            <b id="prob-med" className="mono font-bold text-slate-700">
              {probabilities.med}
            </b>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-xs"></span>
          <span>
            P(Bad):{' '}
            <b id="prob-bad" className="mono font-bold text-slate-700">
              {probabilities.bad}
            </b>
          </span>
        </div>
      </div>
    </section>
  );
};
