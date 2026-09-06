"use client";

import React from "react";
import { motion } from "framer-motion";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function PhotoBanner() {
  return (
    <section className="relative py-32 bg-brand-dark overflow-hidden border-b border-white/10 flex items-center justify-center">
      {/* Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1800&auto=format&fit=crop"
          alt="Female Athlete High Impact Performance"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark" />
        <div className="absolute inset-0 bg-noise opacity-40" />
      </div>

      {/* Poster Red Flow Line Graphic Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-200,400 Q400,100 1000,500 T1800,200"
          fill="none"
          stroke="#FF1E27"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/20 border border-brand-red/40 rounded text-brand-yellow font-tech text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span>ATHLETE INTEGRITY</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase leading-none drop-shadow-2xl max-w-4xl mx-auto">
            YOUR BODY IS YOUR <br />
            <span className="text-brand-red">MOST IMPORTANT EQUIPMENT.</span>
          </h2>

          <p className="text-gray-300 font-tech text-lg sm:text-xl tracking-wider uppercase font-semibold max-w-xl mx-auto">
            Train hard. Recover smart.
          </p>

          <div className="pt-6">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="BOOK"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-brand-yellow hover:text-black text-white font-tech font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_30px_rgba(255,30,39,0.6)] group"
            >
              <span>CLAIM YOUR RECOVERY SESSION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
