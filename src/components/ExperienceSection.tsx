import { LensMode } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, Zap } from 'lucide-react';

interface ExperienceSectionProps {
  activeLens: LensMode;
}

export default function ExperienceSection({ activeLens }: ExperienceSectionProps) {
  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeLens === 'engineering' && exp.lensCategory === 'growth') {
      return false;
    }
    return true;
  });

  return (
    <section id="experience" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            Career Journey & Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
            Internship & Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Real-world execution across digital marketing, technical SEO audits, AI workflow automations, and remote talent operations.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-6 max-w-5xl">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Sub-badge / Highlight metric */}
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <span className="text-xs font-mono text-slate-300">
                  {exp.type}
                </span>
                {exp.highlightMetric && (
                  <>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      {exp.highlightMetric}
                    </span>
                  </>
                )}
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills deployed */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1">Skills Deployed:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
