"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Zap } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { BRAND_DATA } from "@/lib/data";

export function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Subtle mouse parallax desktop
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12;
    const y = (clientY / innerHeight - 0.5) * 12;
    setMouseOffset({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-brand-dark overflow-hidden flex items-center bg-tech-grid"
    >
      {/* Red ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Poster-inspired SVG flowing red line curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,200 Q300,50 600,300 T1400,200"
          fill="none"
          stroke="#FF1E27"
          strokeWidth="1.5"
        />
        <path
          d="M-100,230 Q320,80 620,330 T1400,230"
          fill="none"
          stroke="#FF1E27"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <path
          d="M-100,260 Q340,110 640,360 T1400,260"
          fill="none"
          stroke="#FF1E27"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <path
          d="M-100,290 Q360,140 660,390 T1400,290"
          fill="none"
          stroke="#FF1E27"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Brand Badge & Chevrons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="px-3 py-1 bg-brand-red/15 border border-brand-red/40 rounded text-brand-red font-tech text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FEMALE ONLY STUDIO</span>
              </div>
              <div className="text-brand-yellow font-bold tracking-tighter text-sm flex items-center">
                <span>&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>
              </div>
            </motion.div>

            {/* Display Headline */}
            <div className="space-y-1 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white uppercase leading-none">
                  PERFORM<span className="text-brand-red">.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-brand-yellow uppercase leading-none">
                  RECOVER<span className="text-white">.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white uppercase leading-none">
                  DOMINATE<span className="text-brand-red">.</span>
                </h1>
              </motion.div>
            </div>

            {/* Subheading & Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="space-y-4 max-w-2xl mb-8"
            >
              <div className="font-tech text-base sm:text-lg text-brand-yellow font-bold tracking-wider uppercase flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-red" />
                <span>SPORT MASSAGE FOR FEMALE ATHLETES</span>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans font-normal">
                Recovery designed for women who train hard, compete harder, and refuse to perform at 80%.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="BOOK"
                className="px-8 py-4 bg-brand-red hover:bg-brand-yellow hover:text-black text-white font-tech font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm shadow-[0_0_25px_rgba(255,30,39,0.5)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] flex items-center justify-center gap-3 group"
              >
                <span>BOOK YOUR SESSION</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                data-cursor="EXPLORE"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-tech text-xs tracking-widest uppercase transition-colors rounded-sm flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE SERVICES</span>
                <ChevronDown className="w-4 h-4 text-brand-yellow transition-transform group-hover:translate-y-1" />
              </a>
            </motion.div>

            {/* Quick Micro Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <div className="font-display text-2xl font-bold text-white">RM135</div>
                <div className="text-[11px] font-tech text-gray-400">FULL BODY 1 HR</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-brand-yellow">SOFEA</div>
                <div className="text-[11px] font-tech text-gray-400">THERAPIST IN-CHARGE</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-brand-red">100%</div>
                <div className="text-[11px] font-tech text-gray-400">FEMALE FOCUSED</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Poster-inspired Female Athlete Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                x: mouseOffset.x,
                y: mouseOffset.y,
              }}
              className="relative z-10"
            >
              {/* Outer frame & red line border */}
              <div className="relative rounded-lg overflow-hidden border border-white/15 bg-brand-card shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                
                {/* Poster Red Flow Line Graphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

                {/* Primary Athlete Image */}
                <img
                  src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop"
                  alt="Female Football Athlete Performance"
                  data-cursor="VIEW"
                  className="w-full h-[480px] sm:h-[560px] object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Poster Chevrons Badge */}
                <div className="absolute top-4 left-4 z-20 bg-brand-dark/90 backdrop-blur-md px-3 py-1.5 border border-brand-red/50 rounded flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
                  <span className="font-tech text-xs font-bold text-white tracking-widest uppercase">
                    ATHLETE RECOVERY STUDIO
                  </span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-brand-dark/90 backdrop-blur-md p-4 rounded border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-tech text-brand-yellow tracking-widest uppercase">
                      {BRAND_DATA.tagline}
                    </div>
                    <div className="font-display text-lg font-bold text-white tracking-wide">
                      HIGH INTENSITY MOBILITY & TISSUE WORK
                    </div>
                  </div>
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-brand-red flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

              </div>

              {/* Technical Decorative Corner Lines */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-brand-yellow z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-brand-red z-20 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
