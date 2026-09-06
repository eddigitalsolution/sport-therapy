"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { BRAND_DATA } from "@/lib/data";

export function FinalCTA() {
  return (
    <section className="py-28 bg-black relative border-b border-white/10 overflow-hidden">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-yellow/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow/10 border border-brand-yellow/40 rounded text-brand-yellow font-tech text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span>FEMALE ATHLETE RECOVERY LAB</span>
          </div>

          {/* Huge Typography */}
          <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-white uppercase leading-none">
            READY TO <br />
            <span className="text-brand-yellow">PERFORM BETTER?</span>
          </h2>

          <p className="text-gray-300 font-sans text-lg sm:text-2xl max-w-xl mx-auto">
            Your recovery starts here. Don&apos;t wait for muscle strains to bench you from competition.
          </p>

          {/* Main WhatsApp CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="BOOK"
              className="w-full sm:w-auto px-10 py-5 bg-brand-yellow hover:bg-brand-red text-black hover:text-white font-tech font-extrabold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_40px_rgba(255,215,0,0.5)] flex items-center justify-center gap-3 group"
            >
              <span>BOOK YOUR SESSION NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Direct Therapist Info */}
          <div className="pt-8 border-t border-white/10 max-w-md mx-auto flex items-center justify-center gap-6 text-gray-300 font-tech text-sm">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-brand-red" />
              <span className="font-bold text-white uppercase">THERAPIST: {BRAND_DATA.therapist}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-brand-yellow" />
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-yellow" />
              <span className="font-bold text-brand-yellow">{BRAND_DATA.phoneDisplay}</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
