import { cn } from "@/lib/utils";
import { ExternalLink, Github, Terminal } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  className?: string;
}

export function ProjectCard({ title, description, tags, category, className }: ProjectCardProps) {
  return (
    <div className={cn("glass group relative overflow-hidden rounded-3xl border-white/5 flex flex-col h-full", className)}>
      <div className="p-8 flex-1">
        <div className="flex items-center justify-between mb-6">
          <div className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-[10px] font-mono tracking-widest uppercase">
            {category}
          </div>
          <div className="flex gap-3">
            <Link href="#" className="text-white/20 hover:text-cyber-blue transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/20 hover:text-cyber-blue transition-colors">
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-cyber-blue transition-colors leading-tight uppercase">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 py-4 bg-white/5 border-t border-white/5 flex items-center gap-2 group-hover:bg-cyber-blue/10 transition-colors">
        <Terminal className="w-4 h-4 text-cyber-blue" />
        <span className="text-[10px] font-mono text-white/40 group-hover:text-cyber-blue transition-colors">
          COMPUTE_MODULE_INITIALIZED
        </span>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-cyber-blue/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
