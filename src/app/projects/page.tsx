import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto pb-20">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4 uppercase">Project <span className="text-cyber-blue neon-text">Archive</span></h1>
        <p className="text-white/60 font-mono text-sm max-w-xl">
          {">"} Displaying curated engineering projects across Robotics, Automation, and IoT domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            category={project.category}
          />
        ))}
        
        {/* Placeholder for "Coming Soon" or "Future" projects */}
        <div className="glass rounded-3xl border-dashed border-white/10 flex flex-col items-center justify-center p-8 opacity-40">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4">
            <span className="animate-pulse">+</span>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest">Awaiting_Deployment</p>
        </div>
      </div>
    </div>
  );
}
