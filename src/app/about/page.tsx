import { CERTIFICATIONS, EDUCATION, PROFILE } from "@/constants";
import { Award, BookOpen, CheckCircle, ExternalLink, Fingerprint, MapPin, ShieldCheck, Terminal, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const focusDomains = [
    {
      title: "Industrial Robotics & Automation",
      desc: "Commissioning & programming ABB (OmniCore, IRC5), FANUC (TP, ROBOGUIDE, UOP signal mapping), and Doosan cobots (DRL/Dart Studio) with safety interlocks.",
    },
    {
      title: "PLC, EtherCAT & Motion Control",
      desc: "Beckhoff TwinCAT 3 IEC 61131-3 Structured Text, EtherCAT, servo motor parameter tuning, linear tracks, and closed-loop position control down to ±0.1 mm.",
    },
    {
      title: "C# PC SDK & Advanced HMIs",
      desc: "Developing C# host automation applications utilizing the ABB Robot PC SDK, alongside custom web-based HMI dashboards (HTML/CSS/JS in ABB AppStudio) and ScreenMaker.",
    },
    {
      title: "ROS 2 & Autonomous Architectures",
      desc: "Architecting multi-node systems in ROS 2 Jazzy with Python (rclpy), custom messages, services, and launch configurations for autonomous robotics.",
    },
  ];

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-24">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Profile & Photo */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-4">
              <User className="w-3.5 h-3.5" />
              PROFILE_DATA_STREAM
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-2 uppercase text-cyber-blue neon-text">
              {PROFILE.name}
            </h1>
            <p className="text-base font-mono text-white/80 font-bold uppercase tracking-tight">
              {PROFILE.role}
            </p>
          </div>

          {/* Real Work Photo Card */}
          <div className="glass p-3 rounded-3xl border-white/10 relative overflow-hidden group">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black/40">
              <Image
                src={PROFILE.image}
                alt="Akileswar P A programming FANUC industrial robot with teach pendant"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass border-white/10">
                <div className="flex items-center gap-2 text-cyber-blue text-[10px] font-mono mb-1">
                  <Terminal className="w-3 h-3 animate-pulse" />
                  FANUC ROBOT COMMISSIONING & TEACHING
                </div>
                <p className="text-xs text-white/90 font-mono">
                  Akileswar P A on-site with FANUC industrial manipulator & teach pendant
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-2 gap-3">
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyber-blue shrink-0" />
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono text-white/40 uppercase">Location</p>
                <p className="text-xs font-mono text-white/80 truncate">{PROFILE.location}</p>
              </div>
            </div>
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-plasma-green shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">R&D Experience</p>
                <p className="text-xs font-mono text-white/80 font-bold">~2 Years Industrial</p>
              </div>
            </div>
          </div>

          {/* Summary Bio */}
          <div className="glass p-6 rounded-2xl border-white/5 text-sm text-white/70 leading-relaxed space-y-4">
            <p>
              {PROFILE.summary}
            </p>
          </div>
        </div>

        {/* Right Column: Domains, Education, Certifications */}
        <div className="lg:col-span-7 space-y-10">
          {/* Focus Domains */}
          <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <Fingerprint className="w-28 h-28 text-cyber-blue" />
            </div>

            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/40">
              {"//"} CORE_SPECIALIZATIONS
            </h2>

            <div className="space-y-4">
              {focusDomains.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyber-blue/30 transition-colors group"
                >
                  <h3 className="font-bold text-white group-hover:text-cyber-blue transition-colors uppercase text-sm tracking-tight mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-blue" />
                    {spec.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed ml-4">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Log */}
          <div className="glass p-8 rounded-3xl border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-cyber-blue" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white/40">
                {"//"} EDUCATION_ARCHIVE
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-white uppercase">{edu.degree}</h3>
                    <span className="text-xs font-mono text-cyber-blue">{edu.period}</span>
                  </div>
                  <p className="text-xs text-white/60">{edu.institution} • {edu.location}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-[11px] font-mono">
                      {edu.score}
                    </span>
                    <span className="text-[11px] text-white/40 font-mono">{edu.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Certifications */}
          <div className="glass p-8 rounded-3xl border-white/5">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Award className="w-5 h-5 text-industrial-orange" />
              {"//"} OFFICIAL_CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-plasma-green mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white leading-snug">{cert.title}</p>
                      <p className="text-[10px] font-mono text-white/40 mt-0.5">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                  {cert.link && (
                    <Link
                      href={cert.link}
                      target="_blank"
                      className="text-white/30 hover:text-cyber-blue transition-colors shrink-0 mt-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
