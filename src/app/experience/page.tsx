"use client";

import { EDUCATION, EXPERIENCE } from "@/constants";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Cpu, GraduationCap, Wrench } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto pb-24">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          INDUSTRIAL_CAREER_TRACK
        </div>
        <h1 className="text-5xl font-black mb-4 uppercase tracking-tight">
          Career <span className="text-cyber-blue neon-text">& Experience</span>
        </h1>
        <p className="text-white/60 font-mono text-sm max-w-2xl leading-relaxed">
          {">"} Engineering milestones across industrial robotics, Beckhoff PLC control, C# SDK integration, and advanced NDT automation.
        </p>
      </div>

      {/* Main Experience Section */}
      <div className="space-y-12 mb-20">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="glass p-8 md:p-10 rounded-3xl border-white/5 space-y-8 relative overflow-hidden">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono text-cyber-blue tracking-wider uppercase block mb-1">
                  {exp.subtitle}
                </span>
                <h2 className="text-3xl font-black uppercase text-white tracking-tight">{exp.company}</h2>
                <p className="text-sm text-white/50 font-mono mt-1">{exp.location}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono self-start">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
            </div>

            {/* Role Progression Timeline */}
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                {"//"} ROLE_EVOLUTION
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.roles.map((r, rIdx) => (
                  <div
                    key={rIdx}
                    className={`p-4 rounded-2xl border transition-all ${
                      rIdx === 0
                        ? "bg-cyber-blue/10 border-cyber-blue/40 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
                        : "bg-white/5 border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono text-cyber-blue mb-1">
                      <Briefcase className="w-3 h-3" />
                      {r.period}
                    </div>
                    <p className="text-sm font-bold text-white leading-snug">{r.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <p className="text-white/70 text-sm leading-relaxed border-l-2 border-cyber-blue/50 pl-4 py-1 italic">
              {exp.summary}
            </p>

            {/* Industrial Systems Delivered */}
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
                {"//"} COMMISSIONED_AUTOMATION_SYSTEMS
              </p>
              <div className="space-y-6">
                {exp.systems.map((sys, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyber-blue/30 transition-colors group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center text-cyber-blue group-hover:scale-110 transition-transform">
                          <Wrench className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-lg text-white group-hover:text-cyber-blue transition-colors uppercase">
                          {sys.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-white/40 px-2.5 py-1 rounded-md bg-white/5">
                        {sys.period}
                      </span>
                    </div>

                    <ul className="space-y-2 ml-2">
                      {sys.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-cyber-blue mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Timeline */}
      <div>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-orange/10 border border-industrial-orange/20 text-industrial-orange text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC_FOUNDATION
          </div>
          <h2 className="text-3xl font-black uppercase text-white tracking-tight">
            Education <span className="text-industrial-orange">& Qualifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-cyber-blue block mb-2">{edu.period}</span>
                <h3 className="text-base font-bold text-white mb-1 uppercase leading-snug">{edu.degree}</h3>
                <p className="text-xs text-white/60 mb-2">{edu.institution}</p>
                <p className="text-xs text-white/40 mb-4">{edu.location}</p>
                <div className="inline-block px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-plasma-green font-semibold mb-3">
                  {edu.score}
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed border-t border-white/5 pt-3">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
