import React, { useState } from 'react';
import { NetworkHistoryPoint } from '../types';
import { Activity, Gauge, Wifi, Zap, TrendingUp } from 'lucide-react';

interface NetworkGraphProps {
  history: NetworkHistoryPoint[];
  isLiveMonitoring: boolean;
  onToggleLiveMonitoring?: () => void;
}

type MetricTab = 'speed' | 'latency' | 'loss' | 'score';

export const NetworkGraph: React.FC<NetworkGraphProps> = ({
  history,
  isLiveMonitoring,
  onToggleLiveMonitoring
}) => {
  const [activeTab, setActiveTab] = useState<MetricTab>('speed');
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);

  if (!history || history.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm text-center">
        <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
          <Activity className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm">No Live Graph Data Yet</span>
        </div>
        <p className="text-xs text-slate-500">
          Click <strong>"CHECK NETWORK"</strong> to begin live speed & QoS measurement.
        </p>
      </div>
    );
  }

  // Extract metric values based on selected tab
  const getMetricDetails = () => {
    switch (activeTab) {
      case 'speed':
        return {
          title: 'Live Network Speed (Throughput)',
          unit: 'Mbps',
          color: '#0A4A3C', // Deep Teal / Emerald
          colorLight: '#10B981',
          gradientId: 'speedGrad',
          values: history.map(h => h.throughput),
          formatVal: (v: number) => `${v.toFixed(1)} Mbps`,
          icon: <Gauge className="w-4 h-4 text-emerald-600" />
        };
      case 'latency':
        return {
          title: 'Latency & Jitter Response',
          unit: 'ms',
          color: '#3B82F6', // Blue
          colorLight: '#60A5FA',
          gradientId: 'latencyGrad',
          values: history.map(h => h.latency),
          secondaryValues: history.map(h => h.jitter),
          formatVal: (v: number) => `${v.toFixed(1)} ms`,
          icon: <Zap className="w-4 h-4 text-blue-600" />
        };
      case 'loss':
        return {
          title: 'Estimated Packet Loss',
          unit: '%',
          color: '#F43F5E', // Rose
          colorLight: '#FB7185',
          gradientId: 'lossGrad',
          values: history.map(h => h.packetLoss),
          formatVal: (v: number) => `${v.toFixed(1)} %`,
          icon: <Wifi className="w-4 h-4 text-rose-600" />
        };
      case 'score':
      default:
        return {
          title: 'ML Quality Confidence Score',
          unit: '%',
          color: '#8B5CF6', // Purple
          colorLight: '#A78BFA',
          gradientId: 'scoreGrad',
          values: history.map(h => h.confidence),
          formatVal: (v: number) => `${v.toFixed(0)}%`,
          icon: <TrendingUp className="w-4 h-4 text-purple-600" />
        };
    }
  };

  const metric = getMetricDetails();
  const values = metric.values;
  const currentVal = values[values.length - 1];
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const avgVal = values.reduce((a, b) => a + b, 0) / values.length;

  // SVG dimensions
  const svgWidth = 700;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;
  const graphWidth = svgWidth - paddingX * 2;
  const graphHeight = svgHeight - paddingY * 2;

  // Scale Y
  const yMin = Math.max(0, Math.floor(minVal * 0.8));
  const yMax = Math.max(1, Math.ceil(maxVal * 1.25));
  const yRange = yMax - yMin || 1;

  const getCoordinates = (val: number, index: number) => {
    const x = paddingX + (index / (values.length > 1 ? values.length - 1 : 1)) * graphWidth;
    const y = svgHeight - paddingY - ((val - yMin) / yRange) * graphHeight;
    return { x, y };
  };

  // Build SVG path string
  const points = values.map((val, idx) => getCoordinates(val, idx));
  const pathD = points.length === 1
    ? `M ${points[0].x} ${points[0].y}`
    : points.reduce((acc, point, idx) => {
        return idx === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
      }, '');

  // Closed path for fill gradient
  const areaD = points.length > 0
    ? `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingY} L ${points[0].x} ${svgHeight - paddingY} Z`
    : '';

  // Secondary path (if latency tab shows jitter)
  let secondaryPoints: { x: number; y: number }[] = [];
  let secondaryPathD = '';
  if (metric.secondaryValues) {
    secondaryPoints = metric.secondaryValues.map((val, idx) => getCoordinates(val, idx));
    secondaryPathD = secondaryPoints.reduce((acc, point, idx) => {
      return idx === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
    }, '');
  }

  const activeHover = hoveredPointIndex !== null ? history[hoveredPointIndex] : history[history.length - 1];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-md relative overflow-hidden transition-all">
      
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            {metric.icon}
            <h3 className="text-base font-extrabold text-slate-800 tracking-tight">
              Live Network Real-Time Graph
            </h3>
            {isLiveMonitoring && (
              <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                LIVE UPDATING
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Continuous measurements over time ({history.length} data samples collected)
          </p>
        </div>

        {onToggleLiveMonitoring && (
          <button
            onClick={onToggleLiveMonitoring}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              isLiveMonitoring
                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isLiveMonitoring ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`}></span>
            {isLiveMonitoring ? 'Pause Live Stream' : 'Resume Live Stream'}
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl mb-4 text-xs font-bold">
        <button
          onClick={() => setActiveTab('speed')}
          className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
            activeTab === 'speed' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Speed (Throughput)
        </button>
        <button
          onClick={() => setActiveTab('latency')}
          className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
            activeTab === 'latency' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Latency & Jitter
        </button>
        <button
          onClick={() => setActiveTab('loss')}
          className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
            activeTab === 'loss' ? 'bg-white text-rose-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Packet Loss
        </button>
        <button
          onClick={() => setActiveTab('score')}
          className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
            activeTab === 'score' ? 'bg-white text-purple-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          AI QoS Score
        </button>
      </div>

      {/* Quick Summary Stats Bar */}
      <div className="grid grid-cols-4 gap-2 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 text-center">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Current</span>
          <span className="text-sm sm:text-base font-black text-slate-800">{metric.formatVal(currentVal)}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Average</span>
          <span className="text-sm sm:text-base font-black text-slate-700">{metric.formatVal(avgVal)}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Minimum</span>
          <span className="text-sm sm:text-base font-black text-slate-700">{metric.formatVal(minVal)}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Maximum</span>
          <span className="text-sm sm:text-base font-black text-slate-700">{metric.formatVal(maxVal)}</span>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            <linearGradient id={metric.gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={metric.color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={metric.color} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.33, 0.66, 1].map((ratio, idx) => {
            const y = paddingY + ratio * graphHeight;
            const gridVal = yMax - ratio * yRange;
            return (
              <g key={idx}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={svgWidth - paddingX}
                  y2={y}
                  stroke="#E2E8F0"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x={paddingX - 6}
                  y={y + 4}
                  fill="#94A3B8"
                  fontSize="10"
                  fontWeight="600"
                  textAnchor="end"
                >
                  {gridVal.toFixed(gridVal > 10 ? 0 : 1)}
                </text>
              </g>
            );
          })}

          {/* X Axis Timestamps */}
          {history.map((h, idx) => {
            if (idx % Math.max(1, Math.floor(history.length / 5)) === 0 || idx === history.length - 1) {
              const pt = points[idx];
              return (
                <text
                  key={h.id || idx}
                  x={pt.x}
                  y={svgHeight - 10}
                  fill="#94A3B8"
                  fontSize="9"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {h.time}
                </text>
              );
            }
            return null;
          })}

          {/* Area Fill */}
          {areaD && (
            <path
              d={areaD}
              fill={`url(#${metric.gradientId})`}
            />
          )}

          {/* Secondary line (Jitter) */}
          {secondaryPathD && (
            <path
              d={secondaryPathD}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          )}

          {/* Main Line Path */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke={metric.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Data Points & Interactivity */}
          {points.map((pt, idx) => {
            const isHovered = hoveredPointIndex === idx;
            const isLatest = idx === points.length - 1;
            return (
              <g key={idx} onMouseEnter={() => setHoveredPointIndex(idx)} onMouseLeave={() => setHoveredPointIndex(null)}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered || isLatest ? "6" : "4"}
                  fill={isHovered ? metric.colorLight : metric.color}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="cursor-pointer transition-all hover:scale-125"
                />
                {(isHovered || (hoveredPointIndex === null && isLatest)) && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="9"
                    fill="none"
                    stroke={metric.color}
                    strokeWidth="1.5"
                    className="animate-ping"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tooltip detail bar */}
      {activeHover && (
        <div className="mt-3 p-2.5 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-slate-400">Time: <strong className="text-white">{activeHover.time}</strong></span>
          </div>
          <div className="flex gap-4 font-mono text-[11px]">
            <span>Speed: <strong className="text-emerald-300">{activeHover.throughput} Mbps</strong></span>
            <span>Latency: <strong className="text-blue-300">{activeHover.latency} ms</strong></span>
            <span>QoS: <strong className="text-purple-300">{activeHover.prediction} ({activeHover.confidence}%)</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};
