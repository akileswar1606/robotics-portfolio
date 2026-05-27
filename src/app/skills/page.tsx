import { SKILLS } from "@/constants";
import { Cpu, Layout, Server, Settings, Zap } from "lucide-react";

export default function SkillsPage() {
  const icons = [Cpu, Settings, Server, Layout, Zap];

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4 uppercase">Tech <span className="text-cyber-blue neon-text">Stack</span></h1>
        <p className="text-white/60 font-mono text-sm max-w-xl">
          {">"} Specialized toolnets for Industrial 4.0 and Robotic Control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((category, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={category.category} className="glass p-8 rounded-3xl border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <Icon className="w-6 h-6 text-cyber-blue" />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-tight">{category.category}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <div key={skill} className="px-4 py-2 rounded-lg bg-cyber-blue/5 border border-cyber-blue/10 text-white/80 text-sm font-mono flex items-center gap-2 group hover:border-cyber-blue/40 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                    {skill}
                  </div>
                ))}
              </div>
              
              {/* Telemetry Decoration */}
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-30">
                <p className="text-[10px] font-mono whitespace-nowrap">MODULE_LOADED_{idx}</p>
                <div className="w-full h-px bg-white/10 mx-4" />
                <p className="text-[10px] font-mono">100%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
