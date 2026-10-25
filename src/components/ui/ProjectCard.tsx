import { cn } from "@/lib/utils";
import { Calendar, ExternalLink, Github, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  period?: string;
  highlight?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  category,
  period,
  highlight,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "glass group relative overflow-hidden rounded-3xl border-white/5 flex flex-col h-full hover:border-cyber-blue/30 transition-all duration-300",
        className
      )}
    >
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-[10px] font-mono tracking-widest uppercase">
                {category}
              </span>
              {highlight && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-industrial-orange/10 border border-industrial-orange/20 text-industrial-orange text-[9px] font-mono uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" />
                  {highlight}
                </span>
              )}
            </div>

            {period && (
              <span className="text-[11px] font-mono text-white/40 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-cyber-blue/60" />
                {period}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-cyber-blue transition-colors leading-tight uppercase">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-white/50 border border-white/10 px-2.5 py-1 rounded-md bg-white/[0.02]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 py-3.5 bg-white/5 border-t border-white/5 flex items-center justify-between group-hover:bg-cyber-blue/10 transition-colors">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyber-blue" />
          <span className="text-[10px] font-mono text-white/40 group-hover:text-cyber-blue transition-colors">
            SYSTEM_INTEGRATION_VERIFIED
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            href="https://github.com/akileswar1606"
            target="_blank"
            className="text-white/30 hover:text-cyber-blue transition-colors"
          >
            <Github className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyber-blue/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
