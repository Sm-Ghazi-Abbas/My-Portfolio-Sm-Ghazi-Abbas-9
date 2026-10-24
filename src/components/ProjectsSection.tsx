import { useState } from 'react';
import { Project, LensMode } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Code, 
  Cpu, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Smartphone, 
  TrendingUp,
  Gamepad2,
  Lock,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ProjectsSectionProps {
  activeLens: LensMode;
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ activeLens, onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter projects according to lens and category
  const filteredProjects = PROJECTS.filter((p) => {
    // Lens filter
    if (activeLens === 'engineering' && p.lensCategory === 'growth') return false;
    if (activeLens === 'growth' && p.lensCategory === 'engineering') return false;

    // Category filter
    if (activeCategory === 'all') return true;
    if (activeCategory === 'cloud' && p.category === 'cloud') return true;
    if (activeCategory === 'mobile' && p.category === 'mobile') return true;
    if (activeCategory === 'growth' && p.category === 'growth') return true;
    if (activeCategory === 'product' && (p.category === 'product' || p.category === 'game')) return true;
    return true;
  });

  const categoryTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'growth', label: 'SEO, AI & Growth' },
    { id: 'cloud', label: 'Cloud & Security' },
    { id: 'mobile', label: 'Mobile & Apps' },
    { id: 'product', label: 'Product & Game' },
  ];

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'cloud':
        return <ShieldCheck className="w-4 h-4 text-cyan-400" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-sky-400" />;
      case 'growth':
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'product':
        return <Layers className="w-4 h-4 text-purple-400" />;
      case 'game':
        return <Gamepad2 className="w-4 h-4 text-amber-400" />;
      case 'python':
        return <Code className="w-4 h-4 text-yellow-400" />;
      default:
        return <Code className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
              Selected Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
              Featured Engineering & Growth Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              From commercial technical SEO overhauls and zero-trust cloud architectures to full-stack React Native apps and AI automation pipelines.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 shrink-0">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                id={`project-filter-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isSEOProject = project.id === 'seo-growth-engine';
            const isCloudZeroTrust = project.id === 'zero-trust-cloud';
            const isRestaurantApp = project.id === 'restaurant-app';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
                  isSEOProject || isCloudZeroTrust
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950/90'
                    : ''
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {project.badge || project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.lensCategory === 'growth' && (
                        <span className="text-[11px] font-mono text-emerald-400">
                          Marketing & Growth
                        </span>
                      )}
                      <div className="h-8 w-8 rounded-lg bg-white/5 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-3">
                    {project.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Project specific highlight banner */}
                  {isSEOProject && (
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 space-y-1.5 font-mono text-xs">
                      <div className="flex items-center justify-between text-emerald-400 pb-1 border-b border-white/10">
                        <span className="font-semibold">DevLogix & Client Websites SEO</span>
                        <span className="text-slate-400">Completed Overhaul</span>
                      </div>
                      <div className="text-[11px] text-slate-300 space-y-0.5">
                        <div>• Full technical site audits, Core Web Vitals, Schema (JSON-LD)</div>
                        <div>• Keyword clustering driving organic impressions & client inquiries</div>
                      </div>
                    </div>
                  )}

                  {isCloudZeroTrust && (
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-1.5 font-mono text-xs">
                      <div className="flex items-center justify-between text-cyan-400 pb-1 border-b border-white/10">
                        <span className="font-semibold">NIST SP 800-207 Cloud Security</span>
                        <span className="text-emerald-400">AWS Reference Model</span>
                      </div>
                      <div className="text-[11px] text-slate-300 space-y-0.5">
                        <div>• Short-lived STS temporary credentials + S3 KMS Envelope Encryption</div>
                        <div>• Real-time CloudTrail tamper-evident audit streams to CloudWatch</div>
                      </div>
                    </div>
                  )}

                  {isRestaurantApp && (
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-950/70 border border-sky-500/20 space-y-1.5 font-mono text-xs">
                      <div className="flex items-center justify-between text-sky-400 pb-1 border-b border-white/10">
                        <span className="font-semibold">Full-Stack React Native</span>
                        <span className="text-cyan-300">~1,500+ LOC</span>
                      </div>
                      <div className="text-[11px] text-slate-300 space-y-0.5">
                        <div>• 5 screens with modular components & JSON Server REST API</div>
                      </div>
                    </div>
                  )}

                  {/* Key bullet points */}
                  <ul className="space-y-1.5 mb-6">
                    {project.bulletPoints.slice(0, 2).map((bp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-cyan-400 group-hover:underline flex items-center gap-1">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
