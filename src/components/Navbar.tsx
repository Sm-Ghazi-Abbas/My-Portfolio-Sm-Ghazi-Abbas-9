import { useState, useEffect } from 'react';
import { LensMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight,
  Layers,
  Cpu,
  TrendingUp
} from 'lucide-react';

interface NavbarProps {
  activeLens: LensMode;
  onLensChange: (lens: LensMode) => void;
  onOpenResume: () => void;
}

export default function Navbar({ activeLens, onLensChange, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Writing', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Wordmark */}
          <a
            href="#overview"
            id="brand-logo-btn"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus:outline-none"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-sky-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs tracking-wider transition-all group-hover:border-cyan-400">
              GA
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Syed M. Ghazi Abbas
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Software Engineer & Growth
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs lg:text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Resume */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
            <a
              id="nav-contact-cta"
              href="#contact"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] whitespace-nowrap shrink-0"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-resume-btn-header"
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 text-xs flex items-center gap-1 sm:hidden"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2">
          {/* Quick Lens Filter */}
          <div className="p-2 bg-slate-900/90 rounded-xl border border-white/10">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">
              Filter by Lens:
            </div>
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => {
                  onLensChange('all');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 px-2 text-xs rounded-lg font-medium text-center ${
                  activeLens === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400'
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  onLensChange('engineering');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 px-2 text-xs rounded-lg font-medium text-center ${
                  activeLens === 'engineering'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'text-slate-400'
                }`}
              >
                Tech & Cloud
              </button>
              <button
                onClick={() => {
                  onLensChange('growth');
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 px-2 text-xs rounded-lg font-medium text-center ${
                  activeLens === 'growth'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400'
                }`}
              >
                Marketing & SEO
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Interactive Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
