import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#07090e] relative text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-white font-['Space_Grotesk'] font-bold text-sm tracking-wide">
              <span>SYED M GHAZI ABBAS</span>
              <span className="text-cyan-400">// DEVHQ</span>
            </div>
            <p className="text-slate-500 text-[11px]">
              Computer Science @ UMT Lahore • Software Engineer & Growth Strategist
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-400 text-xs">
            <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">AWS Certs</a>
            <a href="#articles" className="hover:text-emerald-400 transition-colors">Essays</a>
            <a href="#terminal" className="hover:text-cyan-400 transition-colors">CLI</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Right Status & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DevHQ Online</span>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Syed M Ghazi Abbas. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React 19, Tailwind CSS & High-Impact Typography</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
