import { HeroSection } from "@/components/sections/HeroSection";
import { PROFILE } from "@/constants";
import { getAssetPath } from "@/lib/utils";
import { ArrowRight, Cpu, Network, Radio, ShieldCheck, Target, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    { label: "Robotics Core", value: "ABB & FANUC", icon: Cpu },
    { label: "PLC Motion", value: "Beckhoff EtherCAT", icon: Target },
    { label: "Position Control", value: "±0.1 mm Closed-Loop", icon: ShieldCheck },
    { label: "ROS & Middleware", value: "ROS 2 Jazzy / C#", icon: Network },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />

      {/* Quick Stats */}
      <section className="px-6 -mt-20 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass p-6 rounded-2xl border-white/5 flex items-center gap-4 group hover:border-cyber-blue/30 transition-all"
            >
              <div className="p-3 rounded-xl bg-cyber-blue/5 border border-cyber-blue/10 group-hover:border-cyber-blue/40 transition-colors">
                <stat.icon className="w-6 h-6 text-cyber-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser Section with Real Photo */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            ENGINEERING_APPROACH
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight">
            Engineering <span className="text-cyber-blue neon-text">Turnkey</span> Industrial Automation
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base">
            From industrial robot arms (ABB OmniCore/IRC5, FANUC) to Beckhoff TwinCAT 3 PLC programming, EtherCAT motion control, and C# ABB Robot PC SDK integration, I engineer systems that are robust, high-precision, and production-tested.
          </p>

          <div className="grid grid-cols-2 gap-4 font-mono text-xs mb-8">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-cyber-blue mb-1">{"// ROBOTICS_ARM"}</p>
              <p className="text-white/90">ABB RAPID & FANUC TP</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-industrial-orange mb-1">{"// PLC_STACK"}</p>
              <p className="text-white/90">TwinCAT 3 / ST / EtherCAT</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-plasma-green mb-1">{"// HOST_INTEGRATION"}</p>
              <p className="text-white/90">C# Robot PC SDK / HMI</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-cyber-blue mb-1">{"// AUTONOMY"}</p>
              <p className="text-white/90">ROS 2 Jazzy (rclpy)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyber-blue hover:underline"
            >
              Read Full Technical Profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Real Work Photo Card */}
        <div className="relative aspect-[4/5] glass rounded-3xl overflow-hidden border-white/10 group">
          <Image
            src={getAssetPath(PROFILE.image)} unoptimized
            alt="Akileswar P A commissioning FANUC industrial robot"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 glass border-t border-white/10">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-mono text-cyber-blue">WORKCELL_DEPLOYMENT: FANUC_ROBOT</p>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-plasma-green/20 text-plasma-green border border-plasma-green/30">
                ACTIVE
              </span>
            </div>
            <p className="text-base font-bold text-white">Industrial Manipulator Commissioning</p>
            <p className="text-xs text-white/60 font-mono mt-0.5">
              Akileswar P A • FANUC TP & Beckhoff Conveyor Integration
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
