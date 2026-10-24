import { useState } from 'react';
import { LensMode } from '../types';
import { SKILL_CATEGORIES, LANGUAGES } from '../data/portfolioData';
import { 
  Code, 
  Cpu, 
  TrendingUp, 
  Layers, 
  Search, 
  Sparkles, 
  Globe2
} from 'lucide-react';

interface SkillsSectionProps {
  activeLens: LensMode;
}

export default function SkillsSection({ activeLens }: SkillsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const filteredSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.highlight && s.highlight.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return { ...cat, skills: filteredSkills };
  }).filter((cat) => {
    if (searchQuery) return cat.skills.length > 0;
    if (activeLens === 'engineering' && cat.lensCategory === 'growth') return false;
    if (activeLens === 'growth' && cat.lensCategory === 'engineering') return false;
    return true;
  });

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
              Capabilities & Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
              Skills & Domain Expertise
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Spanning core software engineering, AWS cloud monitoring, commercial digital marketing, technical SEO, and talent operations.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skill-search-input"
              type="text"
              placeholder="Filter skills (e.g., Python, AWS, SEO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300">
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] text-slate-400 font-mono line-clamp-1">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Languages Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Executive & Soft Skills */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold font-['Space_Grotesk'] text-white mb-4">
              Execution Mindset & Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { name: 'Problem Solving', desc: 'Root-cause analysis & algorithmic design' },
                { name: 'Crisis Management', desc: 'Composure under delivery pressures' },
                { name: 'Communication', desc: 'Bridging engineering & sales stakeholders' },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-white mb-0.5">{item.name}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <h3 className="text-base font-bold font-['Space_Grotesk'] text-white mb-4">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {LANGUAGES.map((lang, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">{lang.name}</div>
                    <div className="text-[11px] text-slate-400">{lang.proficiency}</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    {lang.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
