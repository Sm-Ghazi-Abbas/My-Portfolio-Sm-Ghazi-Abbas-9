import { LensMode } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, TrendingUp, CheckCircle2, Award, Zap } from 'lucide-react';

interface ExperienceSectionProps {
  activeLens: LensMode;
}

export default function ExperienceSection({ activeLens }: ExperienceSectionProps) {
  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeLens === 'engineering' && exp.lensCategory === 'growth') {
      // Keep hybrid experiences visible
      return false;
    }
    return true;
  });

  return (
    <section id="experience" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
            Internship & Industry Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Real-world execution across digital marketing, technical SEO, AI automation workflows, and candidate talent acquisition pipelines.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-cyan-500/20 ml-3 sm:ml-6 space-y-12">
          {filteredExperiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#090b10] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                        {exp.role}
                      </span>
                      <span className="text-sm font-semibold text-cyan-400 font-mono">
                        @ {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {exp.type}
                  </span>
                  {exp.highlightMetric && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      {exp.highlightMetric}
                    </span>
                  )}
                </div>

                {/* Bullet Points from Resume */}
                <ul className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Skills Deployed:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-slate-200 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
