import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor & Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
            Education & Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Formal computer science training and analytical pre-engineering foundations in Lahore, Pakistan.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                  {edu.degree}
                </h3>
                
                <div className="text-sm font-semibold text-indigo-400 font-mono mb-3">
                  {edu.institution}
                </div>

                <div className="text-xs text-slate-300 font-mono mb-5 p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>{edu.focus}</span>
                </div>

                <ul className="space-y-2.5">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Institution: {edu.institution.split('(')[0]}</span>
                <span className="text-emerald-400">Verified Enrollment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
