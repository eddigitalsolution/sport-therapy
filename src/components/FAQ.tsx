"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-tech text-xs font-bold text-brand-yellow tracking-widest uppercase mb-3 px-3 py-1 bg-white/5 border border-white/10 rounded">
            <HelpCircle className="w-3.5 h-3.5 text-brand-red" />
            CLEAR ANSWERS
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            FREQUENTLY ASKED <span className="text-brand-red">QUESTIONS.</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-brand-card border border-white/10 rounded-lg overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-xl sm:text-2xl font-bold text-white uppercase hover:text-brand-yellow transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-sm font-tech text-brand-red">0{index + 1}</span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-yellow transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-brand-red" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-300 font-sans text-sm sm:text-base leading-relaxed border-t border-white/5 whitespace-pre-line">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
