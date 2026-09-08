import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Shield, Layers, Code2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0e1320] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-slate-900/90 to-slate-950/90 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                {project.badge && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/15 border border-cyan-500/40 text-cyan-300">
                    {project.badge}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-400 capitalize">
                  {project.category}
                </span>
                {project.lensCategory === 'growth' && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/15 border border-emerald-500/40 text-emerald-300">
                    Marketing & Sales
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-cyan-300 font-medium">
                {project.subtitle}
              </p>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto">
          {/* Summary */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution */}
          {project.details.problem && project.details.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <div className="text-xs font-mono uppercase text-rose-400 font-semibold mb-1.5 flex items-center gap-1.5">
                  <span>The Challenge / Friction</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <div className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>The Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
            </div>
          )}

          {/* Architecture / Strategy Points */}
          {project.details.architectureOrStrategy && (
            <div className="p-5 rounded-xl bg-slate-900/60 border border-white/10">
              <div className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architecture & Implementation Blueprint</span>
              </div>
              <ul className="space-y-2.5">
                {project.details.architectureOrStrategy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Deliverables & Outcomes */}
          {project.details.metricsOrOutcomes && (
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                Key Metrics & Validation Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.details.metricsOrOutcomes.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technologies & Tools Applied</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-cyan-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            Author: Syed M Ghazi Abbas
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
