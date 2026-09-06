"use client";

import React from "react";

export function Marquee() {
  const items = [
    "SPORT MASSAGE",
    "RECOVERY",
    "MOBILITY",
    "PERFORMANCE",
    "SPORTS TAPING",
    "PNF STRETCHING",
    "FEMALE ATHLETE LAB",
    "PREVENT INJURY",
  ];

  return (
    <div className="relative w-full bg-brand-red py-3.5 overflow-hidden border-y border-brand-red/50 shadow-[0_0_30px_rgba(255,30,39,0.3)] z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set */}
        <div className="flex items-center">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="font-display text-lg sm:text-2xl font-bold tracking-widest text-white uppercase mx-4">
                {item}
              </span>
              <span className="text-brand-yellow text-sm mx-2">★</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center">
          {items.map((item, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="font-display text-lg sm:text-2xl font-bold tracking-widest text-white uppercase mx-4">
                {item}
              </span>
              <span className="text-brand-yellow text-sm mx-2">★</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
