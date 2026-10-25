import { SKILLS } from "@/constants";
import { Bot, Cable, Code2, Cpu, Layout, Radio, Server, Settings, Zap } from "lucide-react";

export default function SkillsPage() {
  const icons = [Bot, Settings, Cable, Code2, Cpu, Zap];

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-24">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          TECHNICAL_CAPABILITIES_MATRIX
        </div>
        <h1 className="text-5xl font-black mb-4 uppercase">
          Tech <span className="text-cyber-blue neon-text">Stack</span>
        </h1>
        <p className="text-white/60 font-mono text-sm max-w-xl leading-relaxed">
          {">"} Specialized engineering skillset for Industry 4.0, ABB/FANUC robot integration, Beckhoff TwinCAT PLC motion control, and ROS 2.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={category.category}
              className="glass p-8 rounded-3xl border-white/5 flex flex-col justify-between hover:border-cyber-blue/30 transition-colors"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyber-blue">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-bold uppercase tracking-tight text-white">
                    {category.category}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-cyber-blue/5 border border-cyber-blue/10 text-white/80 text-xs font-mono flex items-center gap-2 group hover:border-cyber-blue/40 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Decoration */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center opacity-30">
                <p className="text-[10px] font-mono whitespace-nowrap">MODULE_{idx + 1}_READY</p>
                <div className="w-full h-px bg-white/10 mx-3" />
                <p className="text-[10px] font-mono">100%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
