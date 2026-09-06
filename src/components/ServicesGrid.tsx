"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs font-bold text-brand-red tracking-widest uppercase mb-3">
              <Zap className="w-3.5 h-3.5" />
              OFFICIAL RECOVERY MENU
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              RECOVERY <br />
              <span className="text-brand-yellow">SERVICES.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-400 font-sans text-sm sm:text-base mb-2">
              Transparent athlete pricing. All sessions are conducted by Sofea in a dedicated female-only recovery space.
            </p>
            <div className="text-xs font-tech text-brand-red font-bold uppercase tracking-wider">
              NO HIDDEN FEES • WHATSAPP BOOKING ONLY
            </div>
          </div>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-brand-card border rounded-lg p-6 sm:p-8 transition-all duration-300 relative group hover:-translate-y-1 ${
                service.popular
                  ? "border-brand-red shadow-[0_0_30px_rgba(255,30,39,0.2)]"
                  : "border-white/10 hover:border-brand-yellow/60"
              }`}
            >
              {/* Popular Tag */}
              {service.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-red text-white text-[10px] font-tech font-bold uppercase tracking-widest rounded flex items-center gap-1 shadow-md">
                  <Star className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                  <span>MOST POPULAR ATHLETE CHOICE</span>
                </div>
              )}

              {/* Red Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-1.5 h-0 bg-brand-red group-hover:h-full transition-all duration-300 rounded-l" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left: Number & Titles */}
                <div className="lg:col-span-6 flex items-start gap-5">
                  <div className="font-display text-4xl font-bold text-gray-500 group-hover:text-brand-yellow transition-colors">
                    {service.number}
                  </div>
                  <div>
                    <div className="text-xs font-tech text-brand-yellow uppercase tracking-widest font-semibold mb-1">
                      {service.duration}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm font-sans mt-2 max-w-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Center / Right: Price & CTA */}
                <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <div className="flex flex-col">
                    <div className="text-[10px] font-tech text-gray-400 uppercase tracking-widest">
                      INVESTMENT
                    </div>
                    <div className="font-display text-4xl sm:text-5xl font-extrabold text-white group-hover:text-brand-yellow transition-colors">
                      {service.price}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl({
                      service: service.name,
                      price: service.price,
                      duration: service.duration,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="BOOK"
                    className="w-full sm:w-auto px-6 py-3.5 bg-brand-red hover:bg-brand-yellow hover:text-black text-white font-tech font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(255,30,39,0.3)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
