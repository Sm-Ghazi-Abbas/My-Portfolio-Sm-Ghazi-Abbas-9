import { useState, useEffect } from 'react';
import { LensMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileText, 
  Menu, 
  X, 
  Terminal, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  Layers
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
    { label: 'Skills & Stack', href: '#skills' },
    { label: 'AWS Certs', href: '#certifications' },
    { label: 'Essays', href: '#articles' },
    { label: 'CLI', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status */}
          <a
            href="#overview"
            id="brand-logo-btn"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-[0_0_12px_rgba(56,189,248,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] transition-all">
              GA
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                GHAZI <span className="text-cyan-400 font-mono text-xs">// DEVHQ</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Tech & Growth Available
                </span>
              </div>
            </div>
          </a>

          {/* Center: Lens Switcher (Unique feature for Dev + Marketing/Sales profile) */}
          <div className="hidden lg:flex items-center bg-slate-900/80 p-1 rounded-full border border-white/10 shadow-inner">
            <button
              id="lens-btn-all"
              onClick={() => onLensChange('all')}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-all flex items-center gap-1.5 ${
                activeLens === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Portfolio</span>
            </button>
            <button
              id="lens-btn-tech"
              onClick={() => onLensChange('engineering')}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-all flex items-center gap-1.5 ${
                activeLens === 'engineering'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_10px_rgba(14,165,233,0.2)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Software & Cloud</span>
            </button>
            <button
              id="lens-btn-growth"
              onClick={() => onLensChange('growth')}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-all flex items-center gap-1.5 ${
                activeLens === 'growth'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(52,211,153,0.2)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Marketing & Sales</span>
            </button>
          </div>

          {/* Right Navigation & CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-xs lg:text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <button
                id="nav-resume-btn"
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </button>
              <a
                id="nav-contact-cta"
                href="#contact"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-medium transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-resume-btn-header"
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 text-xs flex items-center gap-1"
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
        <div className="md:hidden bg-[#0d121c] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2">
          {/* Mobile Lens Selector */}
          <div className="p-2 bg-slate-900/90 rounded-xl border border-white/10">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Lens
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
                Tech
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
                Growth
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-2">
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
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950"
            >
              Get In Touch with Syed
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
