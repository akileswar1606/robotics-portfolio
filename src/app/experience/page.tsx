import { EXPERIENCE } from "@/constants";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4 uppercase">Career <span className="text-cyber-blue neon-text">Log</span></h1>
        <p className="text-white/60 font-mono text-sm max-w-xl">
          {">"} Engineering milestones and professional evolution.
        </p>
      </div>

      <div className="relative space-y-12">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyber-blue rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,243,255,0.8)] border-4 border-background" />

            <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:text-right" : "md:order-last md:text-left"} pl-8 md:pl-0`}>
              <div className="glass p-8 rounded-3xl border-white/5 hover:border-cyber-blue/20 transition-colors">
                <div className={`flex items-center gap-2 mb-2 text-cyber-blue font-mono text-xs ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{exp.role}</h3>
                <div className={`flex items-center gap-2 text-white/40 text-sm mb-4 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {exp.description}
                </p>
                
                <div className={`flex flex-wrap gap-4 mt-6 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/30 px-2 py-1 bg-white/5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-plasma-green" />
                    VERIFIED_STAMP
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
