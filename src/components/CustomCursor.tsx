"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest("[data-cursor]") as HTMLElement | null;

      if (hoverable) {
        const text = hoverable.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      <motion.div
        className={`fixed left-0 top-0 rounded-full flex items-center justify-center font-bold uppercase tracking-wider text-xs transition-colors duration-200 ${
          cursorVariant === "hover"
            ? "bg-brand-red text-white w-16 h-16 shadow-[0_0_20px_rgba(255,30,39,0.6)]"
            : "bg-brand-yellow/80 text-black w-4 h-4 shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        }`}
        animate={{
          x: position.x - (cursorVariant === "hover" ? 32 : 8),
          y: position.y - (cursorVariant === "hover" ? 32 : 8),
          scale: cursorVariant === "hover" ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      >
        {cursorVariant === "hover" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] tracking-widest text-center px-1 font-extrabold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
