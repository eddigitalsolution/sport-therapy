"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Flame, Shield, TrendingUp, CheckCircle2 } from "lucide-react";

export function NotASpaSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhance Performance",
      desc: "Optimize muscular recruitment and reduce systemic fatigue so you hit peak outputs every session.",
    },
    {
      icon: Flame,
      title: "Relieve Muscle Tension",
      desc: "Target deep fascial adhesions and trigger points built up from intense training loads.",
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      desc: "Identify tight kinetic chains before muscle imbalances cause strains or joint overload.",
    },
    {
      icon: Activity,
      title: "Improve ROM",
      desc: "Restore full joint range of motion through focused soft tissue manipulation and dynamic mobility work.",
    },
    {
      icon: Zap,
      title: "Aids Recovery",
      desc: "Accelerate blood circulation and metabolic waste flush to recover faster between games.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-dark relative overflow-hidden border-b border-white/10">
      {/* Background line graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-tech text-xs font-bold text-brand-red tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            ATHLETIC DISRUPTION
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none mb-4">
            THIS ISN&apos;T <br />
            <span className="text-brand-yellow">A SPA MASSAGE.</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl font-sans leading-relaxed">
            It&apos;s targeted recovery designed specifically around the physical demands of your sport. We don&apos;t do soft background music or soothing aromatic oils — we deliver physical readiness.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-card border border-white/10 p-8 rounded-lg relative group hover:border-brand-red/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top Corner Red Line */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-red group-hover:w-full transition-all duration-500" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-tech text-xs font-bold text-gray-500">0{index + 1}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-brand-yellow transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {benefit.desc}
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-[11px] font-tech text-brand-red uppercase font-bold tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ATHLETE TESTED PROTOCOL</span>
                </div>
              </motion.div>
            );
          })}

          {/* Statement Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-brand-red to-red-950 p-8 rounded-lg border border-brand-red flex flex-col justify-between relative overflow-hidden group shadow-[0_0_30px_rgba(255,30,39,0.3)]"
          >
            <div className="relative z-10">
              <div className="text-xs font-tech text-brand-yellow uppercase font-bold tracking-widest mb-3">
                MISSION STATEMENT
              </div>
              <h3 className="font-display text-3xl font-bold text-white uppercase leading-tight mb-4">
                BUILT FOR WOMEN WHO COMPETE AT THEIR MAXIMUM.
              </h3>
              <p className="text-white/90 text-sm leading-relaxed font-sans">
                Designed to support mobility, recovery, and physical readiness so you step onto the court or field fully prepared.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between font-tech text-xs text-brand-yellow font-bold uppercase tracking-wider relative z-10">
              <span>SOLVE • ENHANCE • DOMINATE</span>
              <span>RE:MK</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
