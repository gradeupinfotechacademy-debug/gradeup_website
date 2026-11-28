'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroBanner2Props } from '@/types/courseTypes';
import { HERO_BANNER_2_DATA } from '@/data/courseData';

type WidgetTab = 'monitor' | 'loss' | 'predict';

const WIDGET_TABS: { id: WidgetTab; label: string }[] = [
  { id: 'monitor', label: 'Training Monitor' },
  { id: 'loss', label: 'Loss Curve' },
  { id: 'predict', label: 'Predict Sim' },
];

/**
 * Interactive dark orbital Data Science hero banner with live ML training preview widget.
 */
export default function HeroBanner2({
  data = HERO_BANNER_2_DATA,
}: HeroBanner2Props) {
  const [activeTab, setActiveTab] = useState<WidgetTab>('monitor');
  const [labHours, setLabHours] = useState(12);
  const [projectCount, setProjectCount] = useState(18);

  const predictedScore = Math.min(
    99.4,
    Number((72.5 + labHours * 0.95 + projectCount * 0.72).toFixed(1))
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#050814] text-white">
      {/* Orbital Night Earth Background */}
      <Image
        src={data.backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center opacity-85 pointer-events-none select-none"
      />

      {/* Contrast & Vignette Overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#050711]/90 via-[#050711]/60 to-[#050711]/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/70"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Academy & Rating Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] shrink-0" />
              <span className="text-slate-100">{data.badgeBrand}</span>
              <span className="text-white/25" aria-hidden="true">
                |
              </span>
              <span className="text-[#facc15] font-semibold">
                ★ {data.badgeRating}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] mb-6">
              <span>
                <span className="text-white">{data.headlineWhiteStart} </span>
                <span className="text-[#f04444]">
                  {data.headlineRedHighlight}
                </span>
              </span>
              <span className="block mt-1">
                <span className="text-[#f04444]">{data.headlineRedPrefix} </span>
                <span className="text-white">{data.headlineWhiteEnd}</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-slate-300 leading-relaxed max-w-xl mb-8">
              {data.description}
            </p>

            {/* Key Metrics / Feature Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-[490px] mb-8">
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/10 px-3.5 py-3.5 sm:px-5 sm:py-4 flex flex-col justify-center"
                >
                  <span
                    className={`text-xl sm:text-2xl font-extrabold leading-none ${
                      stat.accent ? 'text-[#f04444]' : 'text-white'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-300 mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={data.primaryCtaHref}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#ef2323] hover:bg-[#dc2626] text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-red-600/25 transition-all duration-200"
              >
                {data.primaryCtaText}
              </Link>
              <Link
                href={data.secondaryCtaHref}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/20 text-white font-bold text-sm sm:text-[15px] backdrop-blur-sm transition-all duration-200"
              >
                {data.secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive ML Training Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] rounded-2xl bg-[#d6d8df]/95 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.65)] border border-white/40 p-5 sm:p-6 text-slate-800">
              {/* Tabs */}
              <div
                role="tablist"
                aria-label="Model Telemetry"
                className="flex items-center gap-5 border-b border-slate-400/25 mb-5"
              >
                {WIDGET_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2.5 text-xs sm:text-[13px] border-b-2 -mb-px transition-colors cursor-pointer ${
                        isActive
                          ? 'font-semibold text-[#dc2626] border-[#dc2626]'
                          : 'font-medium text-slate-600 hover:text-slate-900 border-transparent'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Panel 1: Training Monitor */}
              {activeTab === 'monitor' && (
                <div>
                  <div className="grid grid-cols-2 gap-3.5 mb-4">
                    <div className="rounded-xl bg-[#f1f3f7] border border-white/80 p-4 shadow-sm">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        ACTIVE MODEL ACCURACY
                      </span>
                      <span className="block text-2xl sm:text-[28px] font-extrabold text-[#e53935] mt-1.5 leading-none">
                        98.6%
                      </span>
                      <span className="block text-[11px] font-medium text-[#e53935] mt-2">
                        ↑ +2.4% (vs epoch 10)
                      </span>
                    </div>

                    <div className="rounded-xl bg-[#f1f3f7] border border-white/80 p-4 shadow-sm">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        VALIDATION LOSS
                      </span>
                      <span className="block text-2xl sm:text-[28px] font-extrabold text-[#1e2952] mt-1.5 leading-none">
                        0.012
                      </span>
                      <span className="block text-[11px] font-medium text-[#2d4696] mt-2">
                        ↓ Optimized Neural Net
                      </span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#0d1526] text-slate-200 px-4 py-3 font-mono text-[11px] leading-relaxed shadow-inner overflow-x-auto">
                    <div className="text-slate-100 whitespace-nowrap">
                      &gt; model.fit(x_train, y_train, epochs=100)
                    </div>
                    <div className="text-slate-400 whitespace-nowrap mt-0.5">
                      Epoch 100/100 - loss: 0.012 - acc: 0.986 - val_loss: 0.015
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Panel 2: Loss Curve */}
              {activeTab === 'loss' && (
                <div>
                  <div className="rounded-xl bg-[#f1f3f7] border border-white/80 p-4 shadow-sm mb-4">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-2">
                      <span>EPOCH CONVERGENCE (0 → 100)</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[#e53935]">
                          <span className="w-2 h-2 rounded-full bg-[#e53935]" />
                          Train
                        </span>
                        <span className="flex items-center gap-1 text-[#1e2952]">
                          <span className="w-2 h-2 rounded-full bg-[#1e2952]" />
                          Val
                        </span>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 320 110"
                      className="w-full h-28 overflow-visible"
                      aria-label="Training and validation loss curve"
                    >
                      <line
                        x1="20"
                        y1="90"
                        x2="310"
                        y2="90"
                        stroke="#cbd5e1"
                        strokeWidth="1"
                      />
                      <line
                        x1="20"
                        y1="50"
                        x2="310"
                        y2="50"
                        stroke="#e2e8f0"
                        strokeDasharray="3 3"
                        strokeWidth="1"
                      />
                      <path
                        d="M 20 16 C 70 28, 125 65, 190 79 C 240 85, 280 86, 310 87"
                        fill="none"
                        stroke="#e53935"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 20 22 C 75 35, 130 68, 195 80 C 245 84, 280 85, 310 85"
                        fill="none"
                        stroke="#1e2952"
                        strokeWidth="2.5"
                        strokeDasharray="5 3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="rounded-lg bg-[#0d1526] text-slate-200 px-4 py-3 font-mono text-[11px] leading-relaxed shadow-inner overflow-x-auto">
                    <div className="text-slate-100 whitespace-nowrap">
                      &gt; optimizer = Adam(learning_rate=0.001)
                    </div>
                    <div className="text-slate-400 whitespace-nowrap mt-0.5">
                      EarlyStopping: optimal weights saved at epoch 98
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Panel 3: Predict Sim */}
              {activeTab === 'predict' && (
                <div>
                  <div className="rounded-xl bg-[#f1f3f7] border border-white/80 p-4 shadow-sm mb-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        PLACEMENT READINESS SCORE
                      </span>
                      <span className="text-xl font-extrabold text-[#e53935]">
                        {predictedScore}%
                      </span>
                    </div>

                    <label className="block text-[11px] font-medium text-slate-700">
                      <div className="flex justify-between mb-1">
                        <span>Weekly Practical Lab Hours</span>
                        <span className="font-bold">{labHours} hrs</span>
                      </div>
                      <input
                        type="range"
                        min={4}
                        max={20}
                        value={labHours}
                        onChange={(e) => setLabHours(Number(e.target.value))}
                        className="w-full accent-[#e53935] cursor-pointer"
                      />
                    </label>

                    <label className="block text-[11px] font-medium text-slate-700">
                      <div className="flex justify-between mb-1">
                        <span>Industry Projects Completed</span>
                        <span className="font-bold">{projectCount}</span>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={24}
                        value={projectCount}
                        onChange={(e) => setProjectCount(Number(e.target.value))}
                        className="w-full accent-[#1e2952] cursor-pointer"
                      />
                    </label>
                  </div>

                  <div className="rounded-lg bg-[#0d1526] text-slate-200 px-4 py-3 font-mono text-[11px] leading-relaxed shadow-inner overflow-x-auto">
                    <div className="text-slate-100 whitespace-nowrap">
                      &gt; model.predict([[{labHours}, {projectCount}]])
                    </div>
                    <div className="text-slate-400 whitespace-nowrap mt-0.5">
                      Predicted Readiness: {predictedScore}% · Tier-1 NCR Match
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
