import React from 'react';
import { QoSPredictionResult, QoSClassification } from '../types';

interface ApplicationCardsProps {
  applications: QoSPredictionResult['applications'];
}

export const ApplicationCards: React.FC<ApplicationCardsProps> = ({ applications }) => {
  const getCardStyle = (status: QoSClassification) => {
    switch (status) {
      case 'GOOD':
        return 'border-emerald-200 bg-gradient-to-b from-white to-emerald-50/25';
      case 'MEDIUM':
        return 'border-amber-200 bg-gradient-to-b from-white to-amber-50/25';
      case 'BAD':
      default:
        return 'border-rose-200 bg-gradient-to-b from-white to-rose-50/25';
    }
  };

  const getBadgeStyle = (status: QoSClassification) => {
    switch (status) {
      case 'GOOD':
        return 'text-emerald-600 bg-emerald-100/70';
      case 'MEDIUM':
        return 'text-amber-600 bg-amber-100/70';
      case 'BAD':
      default:
        return 'text-rose-600 bg-rose-100/70';
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Application Quality
        </span>
        <span className="text-[10px] text-slate-400">
          QoS Feature Weighting
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {/* APP 1: Gaming */}
        <div
          id="card-app-gaming"
          className={`bg-white rounded-xl p-3.5 border shadow-sm transition-all ${getCardStyle(
            applications.gaming.status
          )}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <span>🎮</span> Gaming
            </span>
            <span
              id="app-gaming-badge"
              className={`text-xs font-extrabold px-2 py-0.5 rounded ${getBadgeStyle(
                applications.gaming.status
              )}`}
            >
              {applications.gaming.status}
            </span>
          </div>
          <p
            id="app-gaming-desc"
            className="text-xs text-slate-500 mt-2 leading-tight"
          >
            {applications.gaming.description}
          </p>
        </div>

        {/* APP 2: Video Call */}
        <div
          id="card-app-video"
          className={`bg-white rounded-xl p-3.5 border shadow-sm transition-all ${getCardStyle(
            applications.videoCall.status
          )}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <span>📹</span> Video Call
            </span>
            <span
              id="app-video-badge"
              className={`text-xs font-extrabold px-2 py-0.5 rounded ${getBadgeStyle(
                applications.videoCall.status
              )}`}
            >
              {applications.videoCall.status}
            </span>
          </div>
          <p
            id="app-video-desc"
            className="text-xs text-slate-500 mt-2 leading-tight"
          >
            {applications.videoCall.description}
          </p>
        </div>

        {/* APP 3: Download */}
        <div
          id="card-app-download"
          className={`bg-white rounded-xl p-3.5 border shadow-sm transition-all ${getCardStyle(
            applications.download.status
          )}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <span>📥</span> Download
            </span>
            <span
              id="app-download-badge"
              className={`text-xs font-extrabold px-2 py-0.5 rounded ${getBadgeStyle(
                applications.download.status
              )}`}
            >
              {applications.download.status}
            </span>
          </div>
          <p
            id="app-download-desc"
            className="text-xs text-slate-500 mt-2 leading-tight"
          >
            {applications.download.description}
          </p>
        </div>
      </div>
    </section>
  );
};
