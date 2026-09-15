import { CERTIFICATIONS, PROFILE } from "@/constants";
import { Award, BookOpen, CheckCircle, Fingerprint, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 uppercase text-cyber-blue neon-text">Profile_Data</h1>
            <p className="text-white/60 font-mono text-sm">
              {">"} Decrypting career background, R&D experience, and humanoid robotics vision.
            </p>
          </div>

          <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
            <p>
              I am a <span className="text-white font-bold italic">Robotics & Control System Engineer</span> with hands-on experience in industrial automation, robot–PLC integration, and embedded systems, with a clear long-term goal of building <span className="text-cyber-blue font-mono">humanoid robots</span>.
            </p>
            <p>
              My professional experience at <span className="text-white font-semibold">Dhvani Research & Development Solutions</span> includes working with <span className="text-cyber-blue font-mono">ABB industrial robots</span> and <span className="text-cyber-blue font-mono">Doosan cobots</span>, focusing on motion control, Beckhoff TwinCAT PLC programming, EtherNet/IP & Modbus communication, and custom HMI development.
            </p>
            <p>
              I actively bridge hardware and software logic by working with <span className="text-industrial-orange font-semibold">ESP32, Arduino, and precision sensors</span>, and I am actively building my expertise toward humanoid robotics in ROS2 architectures, kinematics, URDF/XACRO modeling, and balance concepts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyber-blue" />
              <span className="text-xs font-mono">{PROFILE.location}</span>
            </div>
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <Award className="w-4 h-4 text-industrial-orange" />
              <span className="text-xs font-mono">HUMANOID ROBOTICS ASPIRANT</span>
            </div>
          </div>
        </div>

        <div className="relative space-y-8">
          {/* Core Specializations */}
          <div className="glass p-8 rounded-[40px] border-white/5 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Fingerprint className="w-32 h-32 text-cyber-blue" />
            </div>
            
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/40">Focus_Domains</h2>
            
            <ul className="space-y-4">
              {[
                { title: "Robot-PLC Integration", desc: "EtherNet/IP & Modbus communication linking ABB arms & Doosan cobots with Beckhoff PLCs." },
                { title: "Motion & HMI Control", desc: "RAPID, DRL code, custom ABB OmniCore (AppStudio) & IRC5 (ScreenMaker) HMI pages." },
                { title: "Embedded Systems & Hardware", desc: "ESP32/Arduino data acquisition, optocoupler circuit design, and panel wiring." },
                { title: "Humanoid Robotics Vision", desc: "ROS2 robot architectures, URDF/XACRO modeling, dynamics, and balance concepts." }
              ].map((spec, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyber-blue group-hover:scale-150 transition-transform" />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-cyber-blue transition-colors uppercase text-sm tracking-tighter">{spec.title}</h3>
                    <p className="text-xs text-white/40 mt-0.5">{spec.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyber-blue">
                <BookOpen className="w-3 h-3" />
                EDUCATION.LOG
              </div>
              <p className="text-sm font-bold uppercase">BE ELECTRICAL & ELECTRONICS ENGINEERING</p>
              <p className="text-[10px] text-white/40">MEPCO SCHLENK ENGINEERING COLLEGE | 2021 - 2025</p>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="glass p-8 rounded-[40px] border-white/5 relative z-10">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Award className="w-5 h-5 text-industrial-orange" />
              Official_Certifications
            </h2>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 transition-colors flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-plasma-green mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">{cert.title}</p>
                    <p className="text-[10px] font-mono text-white/40">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
