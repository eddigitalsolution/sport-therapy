"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BODY_NEEDS_DATA } from "@/lib/data";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { ArrowRight, CheckCircle, Clock, Tag } from "lucide-react";

export function BodyNeedsInteractive() {
  const [selectedId, setSelectedId] = useState(BODY_NEEDS_DATA[0].id);

  const activeNeed = BODY_NEEDS_DATA.find((n) => n.id === selectedId) || BODY_NEEDS_DATA[0];

  return (
    <section className="py-24 bg-brand-dark relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-tech text-xs font-bold text-brand-red tracking-widest uppercase mb-3 inline-block px-3 py-1 bg-brand-red/10 border border-brand-red/30 rounded">
            CUSTOM RECOVERY PROTOCOL
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            WHAT DOES <span className="text-brand-yellow">YOUR BODY NEED?</span>
          </h2>
          <p className="text-gray-400 font-sans text-base mt-4">
            Select your primary objective below to reveal the ideal sports massage session.
          </p>
        </div>

        {/* Option Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {BODY_NEEDS_DATA.map((need) => {
            const isSelected = need.id === selectedId;
            return (
              <button
                key={need.id}
                onClick={() => setSelectedId(need.id)}
                data-cursor="SELECT"
                className={`px-5 py-3 rounded font-tech text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  isSelected
                    ? "bg-brand-red text-white shadow-[0_0_20px_rgba(255,30,39,0.5)] border border-brand-red"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-brand-yellow"
                }`}
              >
                {need.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNeed.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-card border border-brand-red/40 rounded-xl p-8 sm:p-12 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Description */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-tech font-bold text-brand-yellow tracking-widest uppercase">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    MATCHED PROTOCOL: {activeNeed.label}
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase leading-tight">
                    {activeNeed.label} FOCUS
                  </h3>

                  <p className="text-gray-300 font-sans text-base leading-relaxed">
                    {activeNeed.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs font-tech text-gray-400 bg-white/5 px-3 py-1.5 rounded border border-white/10">
                      <Clock className="w-4 h-4 text-brand-yellow" />
                      <span>{activeNeed.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-tech text-gray-400 bg-white/5 px-3 py-1.5 rounded border border-white/10">
                      <Tag className="w-4 h-4 text-brand-red" />
                      <span>RECOMMENDED: {activeNeed.recommendedService}</span>
                    </div>
                  </div>
                </div>

                {/* Right Recommended Box */}
                <div className="lg:col-span-5 bg-black/60 border border-white/10 p-6 rounded-lg flex flex-col justify-between space-y-6 text-center lg:text-left">
                  <div>
                    <div className="text-[10px] font-tech text-gray-400 tracking-widest uppercase mb-1">
                      RECOMMENDED OPTION
                    </div>
                    <div className="font-display text-2xl font-bold text-white uppercase mb-2">
                      {activeNeed.recommendedService}
                    </div>
                    <div className="font-display text-4xl font-extrabold text-brand-yellow">
                      {activeNeed.price}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl({
                      service: activeNeed.recommendedService,
                      price: activeNeed.price,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="BOOK"
                    className="w-full py-3.5 bg-brand-red hover:bg-brand-yellow hover:text-black text-white font-tech font-bold text-xs tracking-widest uppercase rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,30,39,0.4)] flex items-center justify-center gap-2 group"
                  >
                    <span>BOOK THIS PROTOCOL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
