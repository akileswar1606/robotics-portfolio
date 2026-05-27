import { HeroSection } from "@/components/sections/HeroSection";
import { PROFILE } from "@/constants";
import { Cpu, Globe, Rocket, Shield } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Robotics Core", value: "ROS2/PLC", icon: Cpu },
    { label: "Systems Integrated", value: "15+", icon: Globe },
    { label: "Automation Grade", value: "Industrial", icon: Shield },
    { label: "Response Time", value: "<1ms", icon: Rocket },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />

      {/* Quick Stats */}
      <section className="px-6 -mt-20 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-white/5 flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-cyber-blue/5 border border-cyber-blue/10 group-hover:border-cyber-blue/40 transition-colors">
                <stat.icon className="w-6 h-6 text-cyber-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Engineering <span className="text-cyber-blue">Scalable</span> Automation
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            From low-level embedded firmware to high-level robot coordination, I build systems that are robust, real-time, and production-ready. My approach combines mechanical intuition with software engineering rigor.
          </p>
          <div className="grid grid-cols-2 gap-6 font-mono text-xs">
            <div className="space-y-2">
              <p className="text-cyber-blue">{"// MISSION"}</p>
              <p>Autonomous Industrial Excellence</p>
            </div>
            <div className="space-y-2">
              <p className="text-industrial-orange">{"// PRIMARY_STACK"}</p>
              <p>ROS2 / C++ / PLC</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square glass rounded-3xl overflow-hidden border-white/5 flex items-center justify-center group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-20 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background to-transparent">
            <p className="text-xs font-mono text-cyber-blue mb-1">MODULE_VIEW: ROBOTIC_CORE</p>
            <p className="font-bold">Real-time Kinematics Engine</p>
          </div>
        </div>
      </section>
    </div>
  );
}
