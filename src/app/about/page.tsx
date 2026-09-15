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
              {">"} Decrypting the background, certifications, and engineering vision.
            </p>
          </div>

          <div className="space-y-8 text-white/70 leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-bold italic">Robotics & Control Systems Engineer</span> dedicated to pushing the boundaries of Industrial Automation. With a strong foundation in EEE and specialized expertise in <span className="text-cyber-blue font-mono">ROS2</span>, <span className="text-cyber-blue font-mono">Beckhoff TwinCAT 3 PLC</span>, and <span className="text-cyber-blue font-mono">ABB RobotStudio</span>.
            </p>
            <p>
              My journey began at <span className="text-white font-medium">Mepco Schlenk Engineering College</span>, where I focused on embedded control systems and led team entries to become a <span className="text-industrial-orange font-semibold">Smart India Hackathon (SIH) National Finalist</span> in 2023 and 2024.
            </p>
            <p>
              Currently at <span className="text-industrial-orange font-medium underline underline-offset-4">Dhvani Research & Development</span>, I engineer production workcells that bridge real-world physical kinematics with real-time fieldbus communications like EtherNet/IP and EtherCAT.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyber-blue" />
              <span className="text-xs font-mono">TAMIL NADU, IN</span>
            </div>
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <Award className="w-4 h-4 text-industrial-orange" />
              <span className="text-xs font-mono">SIH 2023/2024 FINALIST</span>
            </div>
          </div>
        </div>

        <div className="relative space-y-8">
          {/* Specializations Card */}
          <div className="glass p-8 rounded-[40px] border-white/5 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Fingerprint className="w-32 h-32 text-cyber-blue" />
            </div>
            
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/40">Core_Specializations</h2>
            
            <ul className="space-y-4">
              {[
                { title: "Industrial Intelligence", desc: "Developing real-time control algorithms for multi-axis ABB & Beckhoff systems." },
                { title: "Protocol Orchestration", desc: "Expertise in EtherNet/IP, EtherCAT, and OPC UA for seamless PLC-Robot integration." },
                { title: "Swarm & Motion Planning", desc: "ROS2 kinematic velocity tracking & formation control for autonomous robots." },
                { title: "Embedded Hardware", desc: "ESP32 & STM32 real-time telemetry, PCB design, and sensor fusion." }
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
              <p className="text-sm font-bold uppercase">BE Electrical & Electronics Engineering</p>
              <p className="text-[10px] text-white/40">MEPCO SCHLENK ENGINEERING COLLEGE | 2021 - 2025</p>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="glass p-8 rounded-[40px] border-white/5 relative z-10">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest text-white/40 flex items-center gap-2">
              <Award className="w-5 h-5 text-industrial-orange" />
              Verified_Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 transition-colors flex items-start gap-3">
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
