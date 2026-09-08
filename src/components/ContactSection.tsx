import { useState, FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  Clock,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Software Engineering & Cloud',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create a mailto URL with pre-filled subject and body
    const subject = encodeURIComponent(`Opportunity for Syed: ${formData.roleType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Syed,\n\nMy name is ${formData.name} (${formData.email}).\n\nRole / Inquired Service: ${formData.roleType}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
            Let's Build Something High-Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Whether you are hiring for Software Engineering, Cloud & Security, AI Automation, or looking to scale commercial sales & marketing pipelines — let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details & Direct Connect (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 font-mono hover:text-cyan-300 truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    id="contact-copy-email-btn"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 text-slate-400 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Phone / WhatsApp</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 font-mono hover:text-emerald-300">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    id="contact-copy-phone-btn"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-white"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-slate-200 font-mono">
                      Lahore, Pakistan <span className="text-slate-400">(PKT / UTC+5)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  id="contact-linkedin-link"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-sky-500/15 text-slate-200 hover:text-sky-300 border border-white/10 hover:border-sky-500/40 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  id="contact-github-link"
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-purple-500/15 text-slate-200 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                </a>

                <a
                  id="contact-medium-link"
                  href={PERSONAL_INFO.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-emerald-500/15 text-slate-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Medium</span>
                </a>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/10 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Typically responds within 24 hours. Open to full-time engineering roles, AI automation contracts, and marketing consulting.</span>
            </div>

          </div>

          {/* Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-2">
                Send a Message or Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to dispatch an inquiry directly to Syed's inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Opening your mail client with your tailored proposal. Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Your Email *
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-role-type-select" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Discussion Focus / Area of Interest
                  </label>
                  <select
                    id="contact-role-type-select"
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Software Engineering & Cloud">Software Engineering & AWS Cloud Role</option>
                    <option value="React Native Mobile App Development">React Native Mobile App Development</option>
                    <option value="AI Automation & Business Workflows">AI Automation & Business Workflows</option>
                    <option value="Digital Marketing, SEO & Growth Strategy">Digital Marketing, SEO & Growth Strategy</option>
                    <option value="Sales Pipeline & Business Development">Sales Pipeline & Business Development</option>
                    <option value="Full-Time Employment Offer">Full-Time Employment / Apprenticeship Offer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message-input" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Message / Project Brief *
                  </label>
                  <textarea
                    id="contact-message-input"
                    required
                    rows={4}
                    placeholder="Describe your project, timeline, or job scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Proposal to Syed</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
