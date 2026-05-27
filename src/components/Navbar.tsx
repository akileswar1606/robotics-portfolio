"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, PROFILE } from "@/constants";
import { motion } from "framer-motion";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl border-white/5"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 group-hover:border-cyber-blue animate-pulse">
            <Bot className="w-5 h-5 text-cyber-blue" />
          </div>
          <span className="font-bold text-lg tracking-tighter uppercase whitespace-nowrap">
            {PROFILE.name} <span className="hidden sm:inline text-white/40 italic font-medium ml-2 text-xs">Robotics Eng.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-cyber-blue",
                pathname === link.href ? "text-cyber-blue" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-cyber-blue hover:text-black transition-all"
          >
            HIRE ME
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 left-6 right-6 glass p-6 rounded-2xl md:hidden flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium",
                  pathname === link.href ? "text-cyber-blue" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
}
