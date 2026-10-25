"use client";

import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Bot, Cpu, Layers } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Industrial Robotics",
    "ROS 2 & Autonomous Systems",
    "Precision Motion & NDT",
    "Embedded Hardware",
    "Embedded & IoT",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono mb-4">
          <Bot className="w-3.5 h-3.5" />
          SYSTEM_PORTFOLIO_DEPLOYMENTS
        </div>
        <h1 className="text-5xl font-black mb-4 uppercase">
          Project <span className="text-cyber-blue neon-text">Archive</span>
        </h1>
        <p className="text-white/60 font-mono text-sm max-w-2xl leading-relaxed">
          {">"} Real-world deployments spanning ABB & FANUC industrial robotic cells, Beckhoff TwinCAT PLC motion logic, C# PC SDK integration, ROS 2 Jazzy, and IoT hardware diagnostics.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategory === cat
                ? "bg-cyber-blue text-black font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                : "glass text-white/60 hover:text-white border-white/5 hover:border-cyber-blue/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            category={project.category}
            period={project.period}
            highlight={project.highlight}
          />
        ))}
      </div>
    </div>
  );
}
