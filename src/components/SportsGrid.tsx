"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { SPORTS_DATA } from "@/lib/data";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export function SportsGrid() {
  return (
    <section id="athletes" className="py-24 bg-brand-dark relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs font-bold text-brand-yellow tracking-widest uppercase mb-3">
              <Zap className="w-3.5 h-3.5 text-brand-red" />
              TARGET ATHLETE PROFILES
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              BUILT FOR <br />
              <span className="text-brand-red">ATHLETES.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-sans max-w-md text-sm sm:text-base">
            Every sport imposes unique movement patterns, stress points, and muscle loads. We customize every session to your discipline.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPORTS_DATA.map((sport, index) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-card border border-white/10 rounded-lg overflow-hidden group relative hover:border-brand-red transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.title}
                  data-cursor="EXPLORE"
                  className="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
                
                {/* Large Number Badge */}
                <div className="absolute top-4 left-4 font-display text-4xl font-extrabold text-white/90 drop-shadow-md group-hover:text-brand-yellow transition-colors">
                  {sport.number}
                </div>

                {/* Arrow Icon */}
                <a
                  href={getWhatsAppBookingUrl({ sport: sport.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book recovery session for ${sport.title}`}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-red group-hover:border-brand-red transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-brand-yellow transition-colors">
                  {sport.title}
                </h3>
                <p className="text-gray-400 text-xs font-sans mb-4 leading-relaxed">
                  {sport.description}
                </p>

                {/* Focus Badges */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="text-[10px] font-tech text-brand-red uppercase font-bold tracking-widest">
                    PRIMARY RECOVERY FOCUS:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sport.focus.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[11px] font-tech text-gray-300 group-hover:border-brand-yellow/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
