"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function RecoveryProcess() {
  const steps = [
    {
      num: "01",
      step: "TRAIN",
      desc: "Push your physical limits, build strength, endurance, and sport skill.",
    },
    {
      num: "02",
      step: "LOAD",
      desc: "Accumulate metabolic fatigue and micro-muscle strain during competition.",
    },
    {
      num: "03",
      step: "RECOVER",
      desc: "Targeted RE:MK sports massage flushes toxins and releases deep knots.",
    },
    {
      num: "04",
      step: "MOVE",
      desc: "Restore optimal kinetic alignment, joint ROM, and muscle length.",
    },
    {
      num: "05",
      step: "PERFORM",
      desc: "Step onto the field or court at 100% physical readiness to dominate.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-dark relative border-b border-white/10 overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-tech text-xs font-bold text-brand-red tracking-widest uppercase mb-3 px-3 py-1 bg-brand-red/10 border border-brand-red/30 rounded">
            <Zap className="w-3.5 h-3.5" />
            THE ATHLETE CONTINUUM
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            ATHLETE RECOVERY <span className="text-brand-yellow">PROCESS.</span>
          </h2>
          <p className="text-gray-400 font-sans text-base mt-4">
            Recovery isn&apos;t an afterthought. It is an active phase of your high-performance training loop.
          </p>
        </div>

        {/* Timeline Process Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red -translate-y-1/2 opacity-30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-brand-card border border-white/10 p-6 rounded-lg text-center relative group hover:border-brand-red transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col justify-between"
              >
                {/* Step Circle Marker */}
                <div className="w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-red text-brand-yellow font-display text-xl font-bold flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,30,39,0.4)]">
                  {idx + 1}
                </div>

                <div>
                  <div className="text-[10px] font-tech text-gray-500 uppercase tracking-widest mb-1">
                    PHASE 0{idx + 1}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-brand-yellow transition-colors">
                    {item.step}
                  </h3>
                  <p className="text-gray-400 text-xs font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow indicator between steps for mobile */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden mt-4 text-brand-red font-bold text-lg">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
