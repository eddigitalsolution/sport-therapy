"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BODY_PARTS_DATA, BodyPartItem } from "@/lib/data";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { ArrowRight, Crosshair, ShieldAlert } from "lucide-react";

// SVG viewBox dimensions: 200 wide × 380 tall
const VB_W = 200;
const VB_H = 380;

export function BodyRecoveryMap() {
  const [selectedPart, setSelectedPart] = useState<BodyPartItem>(BODY_PARTS_DATA[3]);

  return (
    <section className="py-24 bg-brand-dark relative border-b border-white/10 overflow-hidden bg-tech-dots">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-tech text-xs font-bold text-brand-yellow tracking-widest uppercase mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded">
            <Crosshair className="w-3.5 h-3.5 text-brand-red" />
            TARGET AREA ANALYSIS
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            WHERE DOES <span className="text-brand-red">IT HURT?</span>
          </h2>
          <p className="text-gray-400 font-sans text-base mt-4">
            Select a muscle group or target area to see sport-specific strain patterns and recommended recovery protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

          {/* Left: Silhouette + Selector Buttons */}
          <div className="lg:col-span-6 flex flex-col items-center gap-6">

            {/* Quick Buttons — mobile top, desktop below silhouette */}
            <div className="flex flex-wrap justify-center gap-2 lg:order-2">
              {BODY_PARTS_DATA.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  className={`px-3 py-1.5 rounded text-xs font-tech font-bold uppercase tracking-widest transition-all duration-200 ${
                    selectedPart.id === part.id
                      ? "bg-brand-red text-white shadow-lg"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-brand-yellow hover:text-white"
                  }`}
                >
                  {part.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Silhouette Container */}
            <div className="lg:order-1 relative w-full max-w-xs bg-brand-card/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

              <svg
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                className="w-full h-auto max-h-[420px] select-none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Female athlete body silhouette with clickable muscle group hotspots"
              >
                {/* ───── Female Athletic Silhouette (HD Vector) ───── */}
                <g opacity="0.9">
                  {/* HEAD & HAIR / PROFILE */}
                  <path
                    d="M100,10 C90,10 82,18 82,30 C82,42 90,48 93,50 L93,56 L107,56 L107,50 C110,48 118,42 118,30 C118,18 110,10 100,10 Z"
                    fill="#222226"
                    stroke="#FF1E27"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                  <ellipse cx="100" cy="29" rx="14" ry="18" fill="#1b1b1f" />

                  {/* NECK & TRAPEZIUS */}
                  <path d="M92,54 L108,54 L114,64 L86,64 Z" fill="#222226" stroke="#333339" strokeWidth="1" />

                  {/* ATHLETIC TOP & SHOULDERS (DELTOIDS) */}
                  {/* Shoulders */}
                  <path
                    d="M86,64 C76,66 66,72 61,82 C57,90 56,104 55,118 L68,118 C69,106 72,94 77,85 C81,77 87,74 92,72 L108,72 C113,74 119,77 123,85 C128,94 131,106 132,118 L145,118 C144,104 143,90 139,82 C134,72 124,66 114,64 Z"
                    fill="#2a2a30"
                    stroke="#FFD700"
                    strokeWidth="0.8"
                    strokeOpacity="0.5"
                  />

                  {/* ATHLETIC SPORTS BRA OVERLAY (FEMALE ATHLETE IDENTIFIER) */}
                  <path
                    d="M78,72 L122,72 L127,105 C122,110 112,114 100,114 C88,114 78,110 73,105 Z"
                    fill="#18181c"
                    stroke="#FF1E27"
                    strokeWidth="1.2"
                  />

                  {/* MIDRIFF / CORE / ABS */}
                  <path
                    d="M74,106 C77,122 80,138 82,154 L118,154 C120,138 123,122 126,106 C118,112 109,115 100,115 C91,115 82,112 74,106 Z"
                    fill="#222226"
                    stroke="#333339"
                    strokeWidth="1"
                  />

                  {/* ATHLETIC SHORTS / HIPS */}
                  <path
                    d="M82,154 C74,162 66,175 64,192 L136,192 C134,175 126,162 118,154 Z"
                    fill="#18181c"
                    stroke="#FFD700"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                  />

                  {/* LEFT THIGH (QUADRICEPS & HAMSTRINGS) */}
                  <path
                    d="M65,192 C63,212 62,238 65,264 C67,276 70,285 75,286 C82,287 86,276 88,264 C92,238 93,212 97,192 Z"
                    fill="#25252b"
                    stroke="#3a3a42"
                    strokeWidth="1.2"
                  />

                  {/* RIGHT THIGH */}
                  <path
                    d="M135,192 C137,212 138,238 135,264 C133,276 130,285 125,286 C118,287 114,276 112,264 C108,238 107,212 103,192 Z"
                    fill="#25252b"
                    stroke="#3a3a42"
                    strokeWidth="1.2"
                  />

                  {/* KNEES */}
                  <ellipse cx="71" cy="292" rx="7" ry="6" fill="#1b1b1f" stroke="#FF1E27" strokeWidth="0.8" strokeOpacity="0.6" />
                  <ellipse cx="129" cy="292" rx="7" ry="6" fill="#1b1b1f" stroke="#FF1E27" strokeWidth="0.8" strokeOpacity="0.6" />

                  {/* LEFT CALF & SHIN */}
                  <path
                    d="M65,298 C61,312 60,328 64,345 L76,345 C79,328 80,312 77,298 Z"
                    fill="#222226"
                    stroke="#333339"
                    strokeWidth="1.2"
                  />

                  {/* RIGHT CALF & SHIN */}
                  <path
                    d="M135,298 C139,312 140,328 136,345 L124,345 C121,328 120,312 123,298 Z"
                    fill="#222226"
                    stroke="#333339"
                    strokeWidth="1.2"
                  />

                  {/* LEFT ANKLE & FOOT */}
                  <path d="M64,345 L62,364 C62,369 66,371 72,371 L76,371 L76,345 Z" fill="#18181c" stroke="#333339" strokeWidth="1" />

                  {/* RIGHT ANKLE & FOOT */}
                  <path d="M136,345 L138,364 C138,369 134,371 128,371 L124,371 L124,345 Z" fill="#18181c" stroke="#333339" strokeWidth="1" />

                  {/* LEFT FOREARM & HAND */}
                  <path d="M55,118 C50,135 44,155 40,175 C38,185 36,195 35,205 L44,205 C46,195 49,178 54,160 L68,118 Z" fill="#1f1f23" stroke="#2c2c32" strokeWidth="1" />

                  {/* RIGHT FOREARM & HAND */}
                  <path d="M145,118 C150,135 156,155 160,175 C162,185 164,195 165,205 L156,205 C154,195 151,178 146,160 L132,118 Z" fill="#1f1f23" stroke="#2c2c32" strokeWidth="1" />
                </g>

                {/* ───── Hotspot Markers ───── */}
                {BODY_PARTS_DATA.map((part) => {
                  const cx = (part.coords.x / 100) * VB_W;
                  const cy = (part.coords.y / 100) * VB_H;
                  const isActive = part.id === selectedPart.id;

                  return (
                    <g
                      key={part.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedPart(part)}
                      role="button"
                      aria-label={`Select ${part.name}`}
                    >
                      {/* Ping ring (active only) */}
                      {isActive && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="14"
                          fill="rgba(255,30,39,0.2)"
                          stroke="#FF1E27"
                          strokeWidth="1"
                          className="animate-ping"
                        />
                      )}
                      {/* Outer ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isActive ? 10 : 7}
                        fill={isActive ? "rgba(255,30,39,0.35)" : "rgba(255,215,0,0.25)"}
                        stroke={isActive ? "#FF1E27" : "#FFD700"}
                        strokeWidth="1.5"
                        style={{ transition: "all 0.25s ease" }}
                      />
                      {/* Inner dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isActive ? 5 : 3.5}
                        fill={isActive ? "#FF1E27" : "#FFD700"}
                        style={{ transition: "all 0.25s ease" }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Status bar */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md px-3 py-2 rounded border border-white/10 flex items-center justify-between text-[11px] font-tech text-gray-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  TAP AREA TO INSPECT
                </span>
                <span className="text-brand-yellow uppercase font-bold tracking-wider">
                  {selectedPart.name.split(" ")[0]}
                </span>
              </div>
            </div>

          </div>

          {/* Right: Detail Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-card border border-white/15 rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                {/* Red top accent bar */}
                <div className="h-1.5 bg-brand-red absolute top-0 left-0 right-0 rounded-t-xl" />

                <div className="text-xs font-tech text-brand-red font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Crosshair className="w-4 h-4" /> TARGET ANALYSIS
                </div>

                <h3 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase mb-6 tracking-wide leading-tight">
                  {selectedPart.name}
                </h3>

                <div className="space-y-6">
                  {/* Common After */}
                  <div>
                    <div className="text-xs font-tech text-brand-yellow font-bold uppercase tracking-wider mb-2">
                      COMMON STRAIN AFTER:
                    </div>
                    <ul className="space-y-1.5">
                      {selectedPart.commonAfter.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-sans text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment Focus */}
                  <div>
                    <div className="text-xs font-tech text-brand-yellow font-bold uppercase tracking-wider mb-2">
                      RECOVERY FOCUS:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedPart.focus.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-tech text-gray-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Action */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-tech text-gray-400 uppercase tracking-widest">
                        RECOMMENDED TREATMENT
                      </div>
                      <div className="font-display text-xl font-bold text-white uppercase">
                        {selectedPart.recommended}
                      </div>
                      <div className="text-xs font-tech text-brand-red font-bold">
                        {selectedPart.recommendedPrice}
                      </div>
                    </div>

                    <a
                      href={getWhatsAppBookingUrl({
                        targetArea: selectedPart.name,
                        service: selectedPart.recommended,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="BOOK"
                      className="px-6 py-3 bg-brand-red hover:bg-brand-yellow hover:text-black text-white font-tech font-bold text-xs tracking-widest uppercase rounded transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,30,39,0.4)]"
                    >
                      <span>BOOK FOR THIS AREA</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Disclaimer */}
                  <div className="flex items-center gap-2 text-[11px] font-sans text-gray-400 pt-1">
                    <ShieldAlert className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>Educational recovery guidance only. Non-diagnostic.</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
