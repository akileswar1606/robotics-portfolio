import { PROFILE } from "@/constants";
import { Award, BookOpen, Fingerprint, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4 uppercase text-cyber-blue neon-text">Profile_Data</h1>
            <p className="text-white/60 font-mono text-sm">
              {">"} Decrypting the background and vision of a robotics engineer.
            </p>
          </div>

          <div className="space-y-8 text-white/70 leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-bold italic">Robotics & Control Systems Engineer</span> dedicated to pushing the boundaries of Industrial Automation. With a strong foundation in EEE and specialized expertise in <span className="text-cyber-blue font-mono">ROS2</span>, <span className="text-cyber-blue font-mono">PLC Integration</span>, and <span className="text-cyber-blue font-mono">Embedded Systems</span>.
            </p>
            <p>
              My journey began at <span className="text-white font-medium">Mepco Schlenk Engineering College</span>, where I explored the intersection of electrical hardware and intelligent software. Today, at <span className="text-industrial-orange font-medium underline underline-offset-4">Dhvani R&D</span>, I architect solutions that bridge the gap between virtual simulations and physical motion.
            </p>
            <p>
              I believe in <span className="italic">Systems-First Engineering</span>—designing not just robots, but scalable architectures that thrive in real-world industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyber-blue" />
              <span className="text-xs font-mono">CHENNAI, IN</span>
            </div>
            <div className="glass p-4 rounded-2xl border-white/5 flex items-center gap-3">
              <Award className="w-4 h-4 text-industrial-orange" />
              <span className="text-xs font-mono">SIH_FINALIST</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass p-8 rounded-[40px] border-white/5 relative z-10 overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Fingerprint className="w-32 h-32 text-cyber-blue" />
            </div>
            
            <h2 className="text-xl font-bold mb-8 uppercase tracking-widest text-white/40">Core_Specializations</h2>
            
            <ul className="space-y-6">
              {[
                { title: "Industrial Intelligence", desc: "Developing real-time control algorithms for multi-axis industrial robots." },
                { title: "Protocol Orchestration", desc: "Expertise in EtherNet/IP, EtherCAT, and OPC UA for seamless PLC-Robot talk." },
                { title: "Swarm & Coordination", desc: "Researching decentralized control for multi-agent robotic systems." },
                { title: "Edge Computing", desc: "Optimizing AI and Control models for ESP32 and ARM-based controllers." }
              ].map((spec, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-cyber-blue group-hover:scale-150 transition-transform" />
                  <div>
                    <h3 className="font-bold text-white group-hover:text-cyber-blue transition-colors uppercase text-sm tracking-tighter">{spec.title}</h3>
                    <p className="text-xs text-white/40 mt-1">{spec.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyber-blue">
                <BookOpen className="w-3 h-3" />
                EDUCATION.LOG
              </div>
              <p className="text-sm font-bold uppercase">BE ELECTRICAL & ELECTRONICS</p>
              <p className="text-[10px] text-white/40">MEPCO SCHLENK ENGINEERING COLLEGE | 2021-2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
