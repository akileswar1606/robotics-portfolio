import { PROFILE } from "@/constants";
import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4 uppercase">Contact <span className="text-cyber-blue neon-text">Node</span></h1>
        <p className="text-white/60 font-mono text-sm max-w-xl">
          {">"} Establishing communication channel for collaboration or inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glass p-8 rounded-3xl border-white/5 order-2 md:order-1">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Identify_Name</label>
              <input 
                type="text" 
                placeholder="INPUT_NAME_HERE"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-blue transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Return_Email</label>
              <input 
                type="email" 
                placeholder="MAIL@DOMAIN.SYSTEM"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-blue transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Message_Payload</label>
              <textarea 
                rows={4}
                placeholder="STATUS_REPORT_CONTENT"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyber-blue transition-colors resize-none"
              />
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-4 bg-cyber-blue text-black font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]">
              <Send className="w-4 h-4" />
              TRANSMIT MESSAGE
            </button>
          </form>
        </div>

        {/* Info & Socials */}
        <div className="space-y-8 order-1 md:order-2">
          <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Direct_Connect</h2>
            
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyber-blue/40 transition-colors">
                <Mail className="w-5 h-5 text-cyber-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">Primary_Email</p>
                <p className="text-white/80 group-hover:text-cyber-blue transition-colors">{PROFILE.email}</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyber-blue/40 transition-colors">
                <Phone className="w-5 h-5 text-cyber-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">Secure_Line</p>
                <p className="text-white/80 group-hover:text-cyber-blue transition-colors">{PROFILE.whatsapp}</p>
              </div>
            </a>
          </div>

          <div className="glass p-8 rounded-3xl border-white/5">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Matrix_Nodes</h2>
            <div className="flex gap-4">
              <a href={PROFILE.linkedin} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-blue/40 hover:text-cyber-blue transition-all flex-1 flex flex-col items-center gap-2 group">
                <Linkedin className="w-6 h-6" />
                <span className="text-[10px] font-mono group-hover:text-cyber-blue">LINKEDIN</span>
              </a>
              <a href={PROFILE.github} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-blue/40 hover:text-cyber-blue transition-all flex-1 flex flex-col items-center gap-2 group">
                <Github className="w-6 h-6" />
                <span className="text-[10px] font-mono group-hover:text-cyber-blue">GITHUB</span>
              </a>
              <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-blue/40 hover:text-cyber-blue transition-all flex-1 flex flex-col items-center gap-2 group">
                <MessageSquare className="w-6 h-6" />
                <span className="text-[10px] font-mono group-hover:text-cyber-blue">WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
