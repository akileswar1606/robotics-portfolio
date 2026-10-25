"use client";

import { PROFILE } from "@/constants";
import { CheckCircle2, Github, Linkedin, Mail, MessageSquare, Phone, Send, Terminal } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-24">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-4">
          <Terminal className="w-3.5 h-3.5" />
          COMMUNICATION_LINK_ESTABLISHED
        </div>
        <h1 className="text-5xl font-black mb-4 uppercase">
          Contact <span className="text-cyber-blue neon-text">Channel</span>
        </h1>
        <p className="text-white/60 font-mono text-sm max-w-xl leading-relaxed">
          {">"} Direct communications for industrial robotics collaborations, turnkey automation systems, or R&D engineering roles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glass p-8 rounded-3xl border-white/5 order-2 md:order-1">
          <h2 className="text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-blue" />
            Direct_Transmission_Terminal
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Identify_Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="YOUR NAME / ORGANIZATION"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyber-blue transition-colors font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Return_Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="YOUR_EMAIL@DOMAIN.COM"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyber-blue transition-colors font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="SYSTEM INQUIRY / COLLABORATION"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyber-blue transition-colors font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase">Message_Payload</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="PROJECT SPECIFICATIONS OR INQUIRY DETAILS..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyber-blue transition-colors resize-none font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-cyber-blue text-black font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] uppercase tracking-wider text-sm"
            >
              <Send className="w-4 h-4" />
              TRANSMIT PAYLOAD (SEND EMAIL)
            </button>

            {sent && (
              <div className="flex items-center gap-2 text-plasma-green text-xs font-mono p-3 rounded-lg bg-plasma-green/10 border border-plasma-green/20">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Email client initialized with transmission payload!</span>
              </div>
            )}
          </form>
        </div>

        {/* Info & Socials */}
        <div className="space-y-8 order-1 md:order-2">
          <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Direct_Connect</h2>

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyber-blue/40 transition-colors">
                <Mail className="w-5 h-5 text-cyber-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">Primary Email</p>
                <p className="text-white/80 group-hover:text-cyber-blue transition-colors font-mono text-sm">
                  {PROFILE.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${PROFILE.whatsapp.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyber-blue/40 transition-colors">
                <Phone className="w-5 h-5 text-cyber-blue" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">Direct Mobile Line</p>
                <p className="text-white/80 group-hover:text-cyber-blue transition-colors font-mono text-sm">
                  {PROFILE.whatsapp}
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/919361445784"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-plasma-green/40 transition-colors">
                <MessageSquare className="w-5 h-5 text-plasma-green" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">WhatsApp Instant Chat</p>
                <p className="text-white/80 group-hover:text-plasma-green transition-colors font-mono text-sm">
                  +91 93614 45784
                </p>
              </div>
            </a>
          </div>

          <div className="glass p-8 rounded-3xl border-white/5">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Network_Nodes</h2>
            <div className="grid grid-cols-3 gap-4">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-blue/40 hover:text-cyber-blue transition-all flex flex-col items-center gap-2 group"
              >
                <Linkedin className="w-6 h-6 text-cyber-blue" />
                <span className="text-[10px] font-mono group-hover:text-cyber-blue">LINKEDIN</span>
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-blue/40 hover:text-cyber-blue transition-all flex flex-col items-center gap-2 group"
              >
                <Github className="w-6 h-6 text-white/80 group-hover:text-white" />
                <span className="text-[10px] font-mono group-hover:text-cyber-blue">GITHUB</span>
              </a>
              <a
                href="https://wa.me/919361445784"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-plasma-green/40 hover:text-plasma-green transition-all flex flex-col items-center gap-2 group"
              >
                <MessageSquare className="w-6 h-6 text-plasma-green" />
                <span className="text-[10px] font-mono group-hover:text-plasma-green">WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
