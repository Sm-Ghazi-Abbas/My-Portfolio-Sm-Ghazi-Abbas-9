import { useState } from 'react';
import { LensMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Check, 
  Copy, 
  ExternalLink, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  Code, 
  TrendingUp, 
  ShieldCheck,
  ChevronDown,
  BookOpen
} from 'lucide-react';

interface HeroProps {
  activeLens: LensMode;
  onLensChange: (lens: LensMode) => void;
  onOpenResume: () => void;
}

export default function Hero({ activeLens, onLensChange, onOpenResume }: HeroProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>UMT Lahore • BSCS Undergrad</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-[0_0_15px_rgba(52,211,153,0.15)]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Engineering × Marketing & Sales</span>
          </div>

          <a
            href={PERSONAL_INFO.featuredArticleUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 text-xs font-mono transition-colors shadow-[0_0_12px_rgba(52,211,153,0.1)] group"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Medium Blogger • AI Deep-Dives</span>
            <ExternalLink className="w-3 h-3 text-emerald-400/70 group-hover:text-emerald-300" />
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-slate-300 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>

        {/* Main Heading & Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white leading-[1.08] mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Syed M Ghazi Abbas</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
            {PERSONAL_INFO.title}
          </p>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-3xl">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* The Hybrid Value Proposition Card */}
        <div className="mb-10 max-w-4xl p-5 sm:p-6 rounded-2xl glass-panel border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>The Dual Advantage: Engineering + Growth</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {PERSONAL_INFO.hybridPitch}
              </p>
            </div>

            {/* Lens Selector embedded in Hero */}
            <div className="flex-shrink-0 w-full md:w-auto bg-black/40 p-1.5 rounded-xl border border-white/10">
              <div className="text-[11px] text-slate-400 px-2 py-0.5 font-mono">
                View Portfolio by Lens:
              </div>
              <div className="flex items-center gap-1 mt-1">
                <button
                  id="hero-lens-all"
                  onClick={() => onLensChange('all')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    activeLens === 'all'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Both (All)
                </button>
                <button
                  id="hero-lens-tech"
                  onClick={() => onLensChange('engineering')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    activeLens === 'engineering'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Software & Cloud
                </button>
                <button
                  id="hero-lens-growth"
                  onClick={() => onLensChange('growth')}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    activeLens === 'growth'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Marketing & Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons & Contact Badges */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            id="hero-view-projects-btn"
            href="#projects"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all flex items-center gap-2 group"
          >
            <span>Explore Technical & Growth Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            id="hero-open-resume-btn"
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 hover:border-cyan-500/40 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View & Print Resume</span>
          </button>

          <a
            id="hero-contact-btn"
            href="#contact"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
          >
            <span>Contact Syed</span>
          </a>
        </div>

        {/* Contact Pill Row with 1-click copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 max-w-5xl mb-14">
          {/* Email */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between group hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-400 uppercase font-mono">Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-mono text-slate-200 truncate hover:text-cyan-300 block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              id="copy-email-btn"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              title="Copy email to clipboard"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              {copiedItem === 'email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between group hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Phone / WhatsApp</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-mono text-slate-200 hover:text-emerald-300"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              id="copy-phone-btn"
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              title="Copy phone number"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              {copiedItem === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            id="hero-linkedin-link"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between group hover:border-sky-500/40 transition-colors"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Linkedin className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-400 uppercase font-mono">LinkedIn</div>
                <div className="text-xs font-mono text-slate-200 truncate group-hover:text-sky-300">
                  /in/sm-ghazi-abbas
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400" />
          </a>

          {/* GitHub */}
          <a
            id="hero-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between group hover:border-purple-500/40 transition-colors"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Github className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-400 uppercase font-mono">GitHub</div>
                <div className="text-xs font-mono text-slate-200 truncate group-hover:text-purple-300">
                  Sm-Ghazi-Abbas
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
          </a>

          {/* Medium */}
          <a
            id="hero-medium-link"
            href={PERSONAL_INFO.featuredArticleUrl}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20 flex items-center justify-between group hover:border-emerald-500/50 transition-colors"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <BookOpen className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[11px] text-emerald-400 uppercase font-mono">Medium Blog</div>
                <div className="text-xs font-mono text-slate-200 truncate group-hover:text-emerald-300">
                  AI Water Crisis
                </div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
