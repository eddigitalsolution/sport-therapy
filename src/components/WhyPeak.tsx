"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function WhyPeak() {
  const points = [
    {
      num: "01",
      title: "PERFORMANCE",
      desc: "Support physical readiness, movement efficiency, and power output during match day and training.",
      highlight: "FULL READINESS",
    },
    {
      num: "02",
      title: "MOBILITY",
      desc: "Restore joint range of motion, muscle length, and flexibility through targeted PNF stretching.",
      highlight: "RESTORE ROM",
    },
    {
      num: "03",
      title: "RECOVERY",
      desc: "Accelerate muscle repair, clear tissue congestion, and alleviate soreness post-competition.",
      highlight: "TISSUE FLUSH",
    },
    {
      num: "04",
      title: "PREVENTION",
      desc: "Address muscle tension and movement restrictions proactively as a permanent training habit.",
      highlight: "PROACTIVE CARE",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative border-b border-white/10 overflow-hidden">
      
      {/* Yellow Ambient Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-tech text-xs font-bold text-brand-red tracking-widest uppercase mb-3">
            <Zap className="w-3.5 h-3.5" />
            FOUR CORE PILLARS
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            RECOVERY WITH <br />
            <span className="text-brand-yellow">PURPOSE.</span>
          </h2>
          <p className="text-gray-400 font-sans text-base sm:text-lg mt-4">
            We don&apos;t just rub sore muscles — we build systemic athletic resilience across four distinct performance pillars.
          </p>
        </div>

        {/* 4 Large Numbered Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-brand-card border border-white/10 p-8 rounded-lg relative group hover:border-brand-red transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Large Display Number */}
                <div className="font-display text-6xl font-extrabold text-white/20 group-hover:text-brand-red transition-colors mb-6">
                  {pt.num}
                </div>

                <div className="text-[10px] font-tech text-brand-yellow uppercase tracking-widest font-bold mb-1">
                  PILLAR {pt.num}
                </div>

                <h3 className="font-display text-3xl font-bold text-white uppercase mb-3 group-hover:text-brand-yellow transition-colors">
                  {pt.title}
                </h3>

                <p className="text-gray-400 text-sm font-sans leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-tech text-gray-500 group-hover:text-white transition-colors">
                <span>{pt.highlight}</span>
                <span className="text-brand-red font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
