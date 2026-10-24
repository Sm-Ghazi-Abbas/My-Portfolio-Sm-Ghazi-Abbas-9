import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
            Education & Foundations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Formal computer science degree and rigorous analytical pre-engineering foundations in Lahore, Pakistan.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.period}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {edu.degree}
                </h3>
                
                <div className="text-sm font-semibold text-cyan-400 font-mono mb-3">
                  {edu.institution}
                </div>

                <div className="text-xs text-slate-300 font-mono mb-5 p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>{edu.focus}</span>
                </div>

                <ul className="space-y-2.5">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{edu.institution.split('(')[0]}</span>
                <span className="text-emerald-400">Verified Enrollment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
