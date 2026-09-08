import { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveResumeModal({ isOpen, onClose }: InteractiveResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
SYED M GHAZI ABBAS
BSCS Student | Tech & Marketing Enthusiast
Lahore, Pakistan | 0332-4222512 | smghaziabbas88@gmail.com
LinkedIn: https://linkedin.com/in/sm-ghazi-abbas-393216332
GitHub: https://github.com/Sm-Ghazi-Abbas
Medium: https://smghaziabbas.medium.com/

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL & GROWTH PROJECTS
1. DevLogix & Client SEO Optimization Engine - Full-Scale Search Overhaul
   Technical SEO, Search Console, Core Web Vitals, Schema, Keyword Clustering
   • Completed comprehensive technical and on-page SEO optimization for DevLogix company website and commercial client websites.
   • Conducted technical site architecture audits, resolving indexation hurdles, schema markup (JSON-LD), canonical conflicts, and Core Web Vitals.
   • Executed high-volume keyword research and topical authority clusters driving measurable organic impressions and inbound client inquiries.

2. Zero-Trust Serverless Cloud Security - Cloud Computing Research Project
   AWS IAM, KMS, S3, Lambda, CloudTrail
   • Authored a research report applying NIST SP 800-207 Zero-Trust principles to a serverless AWS storage system.
   • Designed the "Zero-Trust File Vault" reference architecture: TLS enforcement, short-lived STS credentials, KMS envelope encryption, and full audit logging.

3. Restaurant Table Reservation App - React Native Mobile Application
   React Native, JSON Server
   • Built a full-stack mobile app with 5 screens and 5 reusable components for browsing, booking, and managing reservations.
   • Integrated a mock REST API with JSON Server, including search/filter, form validation, and empty states — ~1,500+ lines of code.

4. Uni-Pool - Student Carpooling Network
   Figma, Flutter (Planned), Firebase
   • Designed a GPS-based carpooling app concept with smart driver/passenger matching and a female-only 'Pink-Pool' safety feature.
   • Led market research, UI/UX design in Figma, and roadmap planning for MVP development.

5. Escape the Haunted Room - Unity Horror Puzzle Game
   C#, Unity 3D
   • Developed a first-person horror puzzle game in Unity with C# scripting, atmospheric lighting/audio, and environmental storytelling.

6. Python Programming Portfolio - Personal Learning Repository
   Python
   • Maintains a public GitHub repository of Python exercises and mini-projects.

EXPERIENCE
• Digital Marketing & SEO Intern | DevLogix (Aug 2026 - Nov 2026, Lahore)
  - Executed on-page and technical SEO strategies, keyword research, and content optimization to improve organic visibility for company and client campaigns.

• AI Automation Intern | Logitrix Solutions (Aug 2026 - Oct 2026, Lahore)
  - Built and tested AI-powered automation workflows to streamline repetitive business processes using AI and no-code tools.

• AI Marketing Intern | FlyRank AI (Jul 2026 - Sep 2026, Lahore)
  - Supported AI-driven marketing campaigns, content strategy, and market research for client brands.

• Human Resources Management Intern (Remote) | CodeAlpha (1 Month Remote)
  - Coordinated remote candidate screening, resume evaluation, interview scheduling, and intern cohort onboarding.

• Recruitment Intern | Pro Recruit (2024, Lahore)
  - Assisted with candidate sourcing, resume screening, and interview coordination.

PUBLICATIONS & WRITING
• Medium Content Blogger: "The Hidden Cost of Intelligence: Why AI’s Next Crisis Isn’t Chips, It’s Water"
  https://smghaziabbas.medium.com/the-hidden-cost-of-intelligence-why-ais-next-crisis-isn-t-chips-it-s-water-47ba92c07981

CERTIFICATIONS
• Amazon EC2 Observability, Monitoring & Troubleshooting: Amazon Web Services (July 2026)
• Build with Amazon EC2: Amazon Web Services (April 2026)
• AWS CloudWatch: Getting Started: Amazon Web Services (April 2026)

EDUCATION
• Bachelor of Science in Computer Science (BSCS) | UMT (2023 - Present, Lahore)
• Pre-Engineering - Intermediate (FSC) | FCCU (2021 - 2023, Lahore)

SKILLS
• Technical: Python, React Native, JavaScript (ES6+), Git & GitHub, AWS (EC2, CloudWatch), JSON Server / REST API, Figma (UI/UX), Unity Engine (C#)
• Business & Growth: Strategic Planning, AI-Driven Marketing, Brand Development, Data Analysis, HR Management, Technical SEO, Negotiation
• Soft Skills: Problem Solving, Crisis Management, Communication
• Languages: Urdu (Native), English (Fluent)
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-slate-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <h3 className="font-['Space_Grotesk'] font-bold text-white text-base sm:text-lg">
              Official Resume Viewer • Syed M Ghazi Abbas
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-copy-btn"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? 'Copied Full Text!' : 'Copy ATS Text'}</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet (High contrast, clean typography for perfect reading & printing) */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto bg-slate-950 text-slate-100 font-sans text-xs sm:text-sm leading-relaxed space-y-6 select-text print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-700 pb-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              SYED M GHAZI ABBAS
            </h1>
            <div className="text-cyan-400 font-semibold text-sm mt-0.5">
              BSCS Student | Tech & Marketing Enthusiast
            </div>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs text-slate-400 font-mono mt-2.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> Lahore, Pakistan
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" /> 0332-4222512
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-sky-400" /> smghaziabbas88@gmail.com
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 text-xs text-slate-400 font-mono mt-1.5">
              <a 
                href={PERSONAL_INFO.linkedinUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <Linkedin className="w-3 h-3" /> linkedin.com/in/sm-ghazi-abbas-393216332
              </a>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <Github className="w-3 h-3" /> github.com/Sm-Ghazi-Abbas
              </a>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.mediumUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" /> medium.com/@smghaziabbas
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2 font-mono">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-3 font-mono">
              TECHNICAL & GROWTH PROJECTS
            </h2>
            
            <div className="space-y-4">
              {/* DevLogix & Client SEO Project */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    DevLogix & Client SEO Optimization Engine - Full-Scale Search Architecture
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Technical SEO, Search Console, Core Web Vitals, Schema
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Completed comprehensive technical and on-page SEO optimization for DevLogix company website and commercial client websites.</li>
                  <li>Conducted technical site architecture audits, resolving indexation hurdles, schema markup (JSON-LD), canonical conflicts, and Core Web Vitals.</li>
                  <li>Executed high-volume keyword research and topical authority clusters driving measurable organic impressions and inbound client inquiries.</li>
                </ul>
              </div>

              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Zero-Trust Serverless Cloud Security - Cloud Computing Research Project
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    AWS IAM, KMS, S3, Lambda, CloudTrail
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Authored a research report applying NIST SP 800-207 Zero-Trust principles to a serverless AWS storage system.</li>
                  <li>Designed the "Zero-Trust File Vault" reference architecture: TLS enforcement, short-lived STS credentials, KMS envelope encryption, and full audit logging.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Restaurant Table Reservation App - React Native Mobile Application
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    React Native, JSON Server
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Built a full-stack mobile app with 5 screens and 5 reusable components for browsing, booking, and managing reservations.</li>
                  <li>Integrated a mock REST API with JSON Server, including search/filter, form validation, and empty states — ~1,500+ lines of code.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Uni-Pool - Student Carpooling Network
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Figma, Flutter (Planned), Firebase
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Designed a GPS-based carpooling app concept with smart driver/passenger matching and a female-only 'Pink-Pool' safety feature.</li>
                  <li>Led market research, UI/UX design in Figma, and roadmap planning for MVP development.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Escape the Haunted Room - Unity Horror Puzzle Game
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    C#, Unity 3D
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Developed a first-person horror puzzle game in Unity with C# scripting, atmospheric lighting/audio, and environmental storytelling.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Python Programming Portfolio - Personal Learning Repository
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Python
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Maintains a public GitHub repository of Python exercises and mini-projects.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-3 font-mono">
              EXPERIENCE
            </h2>
            
            <div className="space-y-3.5">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Digital Marketing & SEO Intern <span className="text-slate-400 font-normal">| DevLogix</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Aug 2026 - Nov 2026, Lahore
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Executing on-page and technical SEO strategies, keyword research, and content optimization to improve organic visibility for client campaigns.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    AI Automation Intern <span className="text-slate-400 font-normal">| Logitrix Solutions</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Aug 2026 - Oct 2026, Lahore
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Built and tested AI-powered automation workflows to streamline repetitive business processes using AI and no-code tools.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    AI Marketing Intern <span className="text-slate-400 font-normal">| FlyRank AI</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Jul 2026 - Sep 2026, Lahore
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Support AI-driven marketing campaigns, content strategy, and market research for client brands.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Human Resources Management Intern (Remote) <span className="text-slate-400 font-normal">| CodeAlpha</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    1 Month (Remote)
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Completed a 1-month remote internship in Human Resources Management at CodeAlpha, managing candidate sourcing and talent communication pipelines.</li>
                  <li>Screened technical and creative resumes, evaluated candidate submissions, and scheduled structured interview rounds across remote cohorts.</li>
                  <li>Coordinated virtual onboarding sessions, tracked cohort milestones, and facilitated team communication and interpersonal crisis resolution.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-bold text-white text-sm">
                    Recruitment Intern <span className="text-slate-400 font-normal">| Pro Recruit</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    2024, Lahore
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-slate-300 text-xs">
                  <li>Assisted with candidate sourcing, resume screening, and interview coordination.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Publications & Thought Leadership */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-slate-800 pb-1 mb-2 font-mono">
              PUBLICATIONS & ESSAYS (MEDIUM BLOGGER)
            </h2>
            <div className="text-xs text-slate-300 space-y-2">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-white">
                    "The Hidden Cost of Intelligence: Why AI’s Next Crisis Isn’t Chips, It’s Water"
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">Medium • 5 min read</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">
                  Critical engineering essay exploring AI data center thermodynamics, evaporative cooling water consumption, and compute infrastructure bottlenecks.
                </p>
                <a
                  href={PERSONAL_INFO.featuredArticleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline text-[11px] font-mono inline-block mt-0.5"
                >
                  Read on Medium →
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2 font-mono">
              CERTIFICATIONS
            </h2>
            <ul className="space-y-1 text-xs text-slate-300">
              <li><strong className="text-white">Amazon EC2 Observability, Monitoring & Troubleshooting:</strong> Amazon Web Services (July 2026)</li>
              <li><strong className="text-white">Build with Amazon EC2:</strong> Amazon Web Services (April 2026)</li>
              <li><strong className="text-white">AWS CloudWatch: Getting Started:</strong> Amazon Web Services (April 2026)</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2 font-mono">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <div><strong className="text-white">Bachelor of Science in Computer Science (BSCS)</strong> | UMT</div>
                <div className="font-mono text-slate-400">2023 - Present, Lahore</div>
              </div>
              <div className="flex justify-between">
                <div><strong className="text-white">Pre-Engineering - Intermediate (FSC)</strong> | FCCU</div>
                <div className="font-mono text-slate-400">2021 - 2023, Lahore</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-slate-800 pb-1 mb-2 font-mono">
              SKILLS
            </h2>
            <div className="space-y-1 text-xs text-slate-300">
              <div><strong className="text-white">Technical:</strong> Python, React Native, JavaScript (ES6+), Git & GitHub, AWS (EC2, CloudWatch), JSON Server / REST API, Figma (UI/UX), Unity Engine (C#)</div>
              <div><strong className="text-white">Business:</strong> Strategic Planning, AI-Driven Marketing, Brand Development, Data Analysis, Negotiation</div>
              <div><strong className="text-white">Soft Skills:</strong> Problem Solving, Crisis Management, Communication</div>
              <div><strong className="text-white">Languages:</strong> Urdu (Native), English (Fluent)</div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-900 border-t border-white/10 text-center text-xs text-slate-400">
          Click "Print / Save PDF" to generate an official print copy, or "Copy ATS Text" to paste directly into job portals.
        </div>
      </div>
    </div>
  );
}
