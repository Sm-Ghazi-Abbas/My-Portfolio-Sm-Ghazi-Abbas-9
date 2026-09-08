import { useState } from 'react';
import { Project, LensMode } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Code, 
  Cpu, 
  ExternalLink, 
  FolderGit2, 
  Layers, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  TrendingUp,
  Gamepad2,
  Lock,
  Search
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
    { id: 'cloud', label: 'Cloud & Security' },
    { id: 'mobile', label: 'Mobile & React Native' },
    { id: 'growth', label: 'Marketing, SEO & AI' },
    { id: 'product', label: 'Product & Games' },
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
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Engineered Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              From zero-trust cloud architectures and 1,500+ line React Native apps to AI growth workflows and commercial SEO engines.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-white/10">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                id={`project-filter-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
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
            const isCloudZeroTrust = project.id === 'zero-trust-cloud';
            const isRestaurantApp = project.id === 'restaurant-app';
            const isUniPool = project.id === 'uni-pool';
            const isAIGrowth = project.id === 'ai-growth-automation';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isCloudZeroTrust || isRestaurantApp
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-cyan-950/20'
                    : 'bg-slate-900/70'
                }`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {getCategoryIcon(project.category)}
                      </div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                        {project.badge || project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.lensCategory === 'growth' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                          Growth & Sales
                        </span>
                      )}
                      <div className="h-8 w-8 rounded-lg bg-white/5 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-3">
                    {project.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Project specific visual features */}
                  {isCloudZeroTrust && (
                    <div className="mb-5 p-3.5 rounded-xl bg-black/40 border border-cyan-500/20 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-cyan-400 pb-1 border-b border-white/10">
                        <span className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5" /> NIST SP 800-207 Architecture
                        </span>
                        <span className="text-emerald-400">Zero-Trust File Vault</span>
                      </div>
                      <div className="text-[11px] text-slate-300 space-y-1">
                        <div>• TLS Enforcement + Short-lived STS temporary credentials</div>
                        <div>• S3 KMS Envelope Encryption + Real-time CloudTrail telemetry</div>
                      </div>
                    </div>
                  )}

                  {isRestaurantApp && (
                    <div className="mb-5 p-3.5 rounded-xl bg-black/40 border border-sky-500/20 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-sky-400 pb-1 border-b border-white/10">
                        <span className="flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5" /> Full-Stack Mobile Stack
                        </span>
                        <span className="text-cyan-300">~1,500+ LOC</span>
                      </div>
                      <div className="text-[11px] text-slate-300 space-y-1">
                        <div>• 5 Mobile Screens: Discover, Detail, Reservation, History, Profile</div>
                        <div>• JSON Server REST API with real-time filters & empty states</div>
                      </div>
                    </div>
                  )}

                  {isUniPool && (
                    <div className="mb-5 p-3 rounded-xl bg-pink-500/5 border border-pink-500/20 font-mono text-xs text-pink-300 space-y-1">
                      <div className="font-semibold text-pink-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> 'Pink-Pool' Safety Differentiator
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Female-only student carpooling matching & university campus verification.
                      </div>
                    </div>
                  )}

                  {isAIGrowth && (
                    <div className="mb-5 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 font-mono text-xs text-emerald-300 space-y-1">
                      <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" /> Commercial ROI Focus
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Automated prospect enrichment, personalized B2B outreach & 60% time saved.
                      </div>
                    </div>
                  )}

                  {/* Bullet points summary */}
                  <ul className="space-y-2 mb-6">
                    {project.bulletPoints.slice(0, 2).map((bp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags & click prompt */}
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
                    Details <ArrowUpRight className="w-3 h-3" />
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
