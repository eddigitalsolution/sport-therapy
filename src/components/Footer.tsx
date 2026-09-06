"use client";

import React from "react";
import { BRAND_DATA } from "@/lib/data";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark py-16 border-t border-white/10 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center tracking-wider leading-none">
                <span className="font-display text-3xl font-extrabold text-white tracking-tight">PE</span>
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 34 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-0.5"
                >
                  <path
                    d="M2,30 L12,14 L17,21 L26,2 L34,30 L25,30 L22,21 L18,30 Z"
                    fill="#FF1E27"
                    stroke="#FF1E27"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-display text-3xl font-extrabold text-white tracking-tight">K</span>
              </div>
              <div className="font-tech text-[9.5px] font-bold tracking-[0.28em] text-brand-yellow uppercase mt-0.5">
                PERFORMANCE
              </div>
            </div>

            <div className="text-xs font-tech text-brand-yellow tracking-widest uppercase font-semibold">
              {BRAND_DATA.tagline}
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Female-only sports massage and sports recovery studio dedicated to female athletes and active women looking to enhance mobility, speed up recovery, and dominate their sport.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-tech text-white uppercase tracking-widest font-bold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-tech tracking-wider">
              <li>
                <a href="#services" className="hover:text-brand-yellow transition-colors">
                  SERVICES & PRICING
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-yellow transition-colors">
                  WHY RE:MK
                </a>
              </li>
              <li>
                <a href="#athletes" className="hover:text-brand-yellow transition-colors">
                  FOR ATHLETES
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-yellow transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Booking Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-tech text-white uppercase tracking-widest font-bold">
              DIRECT WHATSAPP BOOKING
            </div>
            <div className="text-sm font-sans text-gray-300">
              Therapist: <strong className="text-white">{BRAND_DATA.therapist}</strong>
            </div>
            <div className="font-display text-2xl font-bold text-brand-yellow">
              {BRAND_DATA.phoneDisplay}
            </div>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-brand-red text-white text-xs font-tech font-bold uppercase rounded border border-white/10 transition-colors"
            >
              <span>SEND WHATSAPP MESSAGE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-tech text-gray-500 gap-4">
          <div>
            © {currentYear} {BRAND_DATA.name}. ALL RIGHTS RESERVED. FEMALE-ONLY RECOVERY STUDIO.
          </div>
          <div className="flex items-center gap-6">
            <span>PERFORM</span>
            <span>•</span>
            <span>RECOVER</span>
            <span>•</span>
            <span>DOMINATE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
