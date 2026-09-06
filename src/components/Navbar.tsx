"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "#services" },
    { name: "WHY RE:MK", href: "#why-us" },
    { name: "FOR ATHLETES", href: "#athletes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Exact PEAK PERFORMANCE Branding */}
          <a href="#" className="group flex flex-col justify-center">
            {/* Row 1: PE [Red Peak SVG] K */}
            <div className="flex items-center tracking-wider leading-none group-hover:opacity-90 transition-opacity">
              <span className="font-display text-3xl font-extrabold text-white tracking-tight">PE</span>
              {/* The exact red mountain peak forming the A */}
              <svg
                width="30"
                height="28"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-0.5 transform group-hover:scale-105 transition-transform duration-300"
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

            {/* Row 2: PERFORMANCE (Gold thin uppercase) */}
            <div className="font-tech text-[9px] font-bold tracking-[0.28em] text-brand-yellow uppercase -mt-0.5">
              PERFORMANCE
            </div>

            {/* Row 3: SOLVE. ENHANCE. DOMINATE. */}
            <div className="text-[7.5px] font-tech tracking-[0.18em] text-gray-400 uppercase leading-none mt-0.5">
              SOLVE. ENHANCE. DOMINATE.
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-tech tracking-widest text-gray-300 hover:text-brand-yellow transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="BOOK"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-yellow hover:text-black text-white text-xs font-bold font-tech tracking-wider uppercase transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(255,30,39,0.4)] hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] group"
            >
              <span>BOOK NOW</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-white hover:text-brand-yellow focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-brand-yellow" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-brand-dark/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg tracking-wider font-bold text-white">
                  PEAK PERFORMANCE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-auto">
              <div className="text-[10px] font-tech text-brand-yellow tracking-widest uppercase flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> FEMALE ATHLETE RECOVERY LAB
              </div>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="font-display text-4xl font-bold tracking-wider text-white hover:text-brand-yellow transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-sm font-tech text-gray-500 group-hover:text-brand-red">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer & CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="text-xs text-gray-400 font-tech">
                DIRECT WHATSAPP BOOKING WITH SOFEA
              </div>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-brand-red text-white text-center font-tech font-bold tracking-widest text-sm uppercase rounded shadow-[0_0_20px_rgba(255,30,39,0.5)] flex items-center justify-center gap-2"
              >
                <span>BOOK YOUR SESSION NOW →</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
