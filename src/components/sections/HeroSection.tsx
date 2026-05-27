"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/constants";
import { ChevronRight, Download, Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date().toISOString());
    const timer = setInterval(() => setTime(new Date().toISOString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-8 animate-pulse">
          <Terminal className="w-3 h-3" />
          SYSTEM_VERSION: 1.2.0 | STATUS: ACTIVE
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 uppercase">
          {PROFILE.name.split(" ").map((part, i) => (
            <span key={i} className={i === 0 ? "text-white" : "text-cyber-blue inline-block neon-text"}>
              {part}{" "}
            </span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-mono"
        >
          {">"} {PROFILE.role} <span className="animate-pulse">|</span>
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 px-8 py-4 bg-cyber-blue text-black font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]"
          >
            INITIALIZE PROJECTS
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
            <Download className="w-4 h-4" />
            DOWNLOAD ARCHIVE.PDF
          </button>
        </div>
      </motion.div>

      {/* Decorative Dashbars */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-1 h-8 bg-cyber-blue/20 rounded-full"
              animate={{ height: [20, 40, 20] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
        <p className="text-[10px] font-mono text-white/20 mt-2">ROBOTIC_TELEMETRY_PORT</p>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block text-right">
        <p className="text-[10px] font-mono text-white/20 mb-2">SYSTEM_CLOCK_UTC</p>
        <p className="text-sm font-mono text-cyber-blue/40">{time || "INITIALIZING..."}</p>
      </div>
    </section>
  );
}
