"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/lib/whatsapp";

export function FloatingWhatsAppCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[calc(100vw-2rem)]"
        >
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="BOOK"
            className="flex items-center gap-3 px-5 py-3.5 bg-brand-red hover:bg-brand-yellow hover:text-black text-white rounded-full font-tech text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-[0_10px_30px_rgba(255,30,39,0.6)] hover:shadow-[0_10px_35px_rgba(255,215,0,0.7)] transition-all duration-300 group border border-white/20"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>BOOK YOUR SESSION</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
