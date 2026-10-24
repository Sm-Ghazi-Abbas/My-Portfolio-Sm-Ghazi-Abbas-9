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

    const subject = encodeURIComponent(`Inquiry for Syed: ${formData.roleType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Syed,\n\nMy name is ${formData.name} (${formData.email}).\n\nRole / Inquired Service: ${formData.roleType}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            Direct Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Available for Software Engineering, Cloud & Security, AI Automation, or scaling commercial SEO & sales pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 space-y-6 bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Contact Information
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* Email */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
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
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Phone / WhatsApp</div>
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
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-slate-200 font-mono">
                      Lahore, Pakistan <span className="text-slate-500">(PKT / UTC+5)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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
          </div>

          {/* Interactive Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Direct inquiries typically receive a response within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Role / Inquiry Type */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    What are you looking to collaborate on?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Software Engineering & Cloud',
                      'DevLogix / Client Technical SEO',
                      'AI Automation & Workflows',
                      'HR Operations / Recruitment'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, roleType: type })}
                        className={`p-2.5 rounded-xl text-xs font-mono text-left transition-all ${
                          formData.roleType === type
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Project Details or Role Description
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your timeline, stack requirements, or team objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Syed</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Opening your mail client with pre-filled message!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
