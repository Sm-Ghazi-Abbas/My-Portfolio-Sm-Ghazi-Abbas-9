import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-slate-900 bg-[#07090e] relative text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-white font-['Space_Grotesk'] font-bold text-base tracking-wide">
              Syed M. Ghazi Abbas
            </span>
            <p className="text-slate-500 text-[11px]">
              Computer Science @ UMT Lahore · AI Engineer and Growth Strategist
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs">
            <a href="#overview" className="hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#articles" className="hover:text-emerald-400 transition-colors">Writing</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center gap-3">
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
              title="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Syed M. Ghazi Abbas. All rights reserved.
          </div>
          <div>
            Lahore, Pakistan · {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
          </div>
        </div>
      </div>
    </footer>
  );
}
