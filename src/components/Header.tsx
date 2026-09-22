import React from 'react';
import { Cpu, Activity, Sliders, Network, History, Database } from 'lucide-react';
import { ActiveScreen } from '../types';

interface HeaderProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  isConnected: boolean;
  detectedNetwork?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  isConnected,
  detectedNetwork = 'Broadband / Wi-Fi',
}) => {
  return (
    <header className="pt-2 pb-4 border-b border-slate-200/60 lg:border-none">
      {/* Mobile/Tablet layout: Centered */}
      <div className="lg:hidden text-center">
        {/* Top Model Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A4A3C]/10 text-[#0A4A3C] text-xs font-semibold tracking-wider uppercase mb-2 shadow-xs">
          <Cpu className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Random Forest Classifier v1.0</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A4A3C] tracking-tight">
          AI QoS Monitor
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
          AI-Based Network Quality Classification
        </p>

        {/* Connection Status Indicator */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            {isConnected && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            )}
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isConnected ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            ></span>
          </span>
          <span
            id="conn-status"
            className="text-xs font-bold uppercase tracking-wider text-emerald-700"
          >
            ● {isConnected ? 'Connected' : 'Disconnected'}
          </span>
          <span className="text-slate-300">|</span>
          <span
            id="mode-badge"
            className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2 py-0.5 rounded font-mono font-medium truncate max-w-xs"
          >
            {detectedNetwork}
          </span>
        </div>

        {/* Navigation Tabs between Screens */}
        <div className="mt-4 flex items-center justify-center gap-1 p-1 bg-slate-200/60 rounded-xl max-w-md mx-auto">
          <button
            id="nav-monitor"
            onClick={() => setActiveScreen('monitor')}
            className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeScreen === 'monitor'
                ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Monitor</span>
          </button>

          <button
            id="nav-tuner"
            onClick={() => setActiveScreen('tuner')}
            className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeScreen === 'tuner'
                ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Tuner</span>
          </button>

          <button
            id="nav-dataset"
            onClick={() => setActiveScreen('dataset')}
            className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeScreen === 'dataset'
                ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Dataset & RF</span>
          </button>

          <button
            id="nav-model"
            onClick={() => setActiveScreen('model-info')}
            className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeScreen === 'model-info'
                ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>ML Info</span>
          </button>

          <button
            id="nav-history"
            onClick={() => setActiveScreen('history')}
            className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeScreen === 'history'
                ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Log</span>
          </button>
        </div>
      </div>

      {/* Laptop & Desktop layout: Wide header with branding and controls */}
      <div className="hidden lg:flex items-center justify-between pb-2">
        {/* Left: Brand & Model version */}
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl xl:text-3xl font-black text-[#0A4A3C] tracking-tight">
              AI QoS Monitor
            </h1>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A4A3C]/10 text-[#0A4A3C] text-[11px] font-semibold tracking-wider uppercase shadow-xs">
              <Cpu className="w-3 h-3 stroke-[2.5]" />
              <span>Random Forest Classifier v1.0</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            AI-Based Network Quality of Service (QoS) Multi-Class Classification &amp; Telemetry
          </p>
        </div>

        {/* Right: Connection status & Navigation Tabs */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl border border-slate-200/80 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              {isConnected && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isConnected ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
              ></span>
            </span>
            <span
              id="conn-status-desktop"
              className="text-xs font-bold uppercase tracking-wider text-emerald-700"
            >
              ● {isConnected ? 'Connected' : 'Disconnected'}
            </span>
            <span className="text-slate-300">|</span>
            <span
              id="mode-badge-desktop"
              className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2 py-0.5 rounded font-mono font-medium"
            >
              {detectedNetwork}
            </span>
          </div>

          <nav className="flex items-center gap-1 p-1 bg-slate-200/60 rounded-xl shadow-inner">
            <button
              id="nav-monitor-desktop"
              onClick={() => setActiveScreen('monitor')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'monitor'
                  ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Live Monitor</span>
            </button>

            <button
              id="nav-tuner-desktop"
              onClick={() => setActiveScreen('tuner')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'tuner'
                  ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Tuner</span>
            </button>

            <button
              id="nav-dataset-desktop"
              onClick={() => setActiveScreen('dataset')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'dataset'
                  ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Dataset & Python RF</span>
            </button>

            <button
              id="nav-model-desktop"
              onClick={() => setActiveScreen('model-info')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'model-info'
                  ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Model Architecture</span>
            </button>

            <button
              id="nav-history-desktop"
              onClick={() => setActiveScreen('history')}
              className={`py-1.5 px-3 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeScreen === 'history'
                  ? 'bg-white text-[#0A4A3C] shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Diagnostic Log</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
