import { ARTICLES, PERSONAL_INFO } from '../data/portfolioData';
import { BookOpen, ExternalLink, Sparkles, Clock, ArrowRight, Droplets, Cpu, CheckCircle2 } from 'lucide-react';

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Medium Content Blogger & Tech Thought Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
              Publications & Essays
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Critical analytical essays exploring AI compute bottlenecks, cloud infrastructure thermodynamics, and the environmental footprint of hyper-scale models.
            </p>
          </div>

          <a
            id="view-all-medium-articles-btn"
            href={PERSONAL_INFO.mediumUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 border border-white/10 text-xs font-mono transition-colors self-start md:self-auto"
          >
            <span>Visit Medium Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Article Card */}
        <div className="space-y-6">
          {ARTICLES.map((article, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-emerald-500/25 hover:border-emerald-500/40 transition-all relative overflow-hidden group"
            >
              {/* Background ambient blur */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />

              <div className="relative z-10">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5" />
                      <span>Featured Medium Essay</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    Author: Syed M Ghazi Abbas
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] text-white group-hover:text-emerald-300 transition-colors mb-3 leading-tight">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline flex items-start gap-2"
                  >
                    <span>{article.title}</span>
                    <ExternalLink className="w-5 h-5 flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100" />
                  </a>
                </h3>

                <p className="text-sm sm:text-base text-cyan-300/90 font-medium mb-4">
                  {article.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-4xl">
                  {article.summary}
                </p>

                {/* Key takeaways box */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-white/10 mb-6 max-w-4xl">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Core Analytical Thesis & Key Findings</span>
                  </div>
                  <ul className="space-y-2.5">
                    {article.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Read Action */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    id="read-medium-article-btn"
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(52,211,153,0.25)]"
                  >
                    <span>Read Full Story on Medium</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
