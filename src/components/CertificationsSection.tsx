import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Cpu } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Cloud Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
            AWS Cloud Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Rigorous cloud infrastructure credentials issued by Amazon Web Services, validating compute provisioning, observability, and real-time telemetry troubleshooting.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <span>Issued: {cert.issueDate}</span>
                  <span>•</span>
                  <span>{cert.credentialTopic}</span>
                </div>

                {/* Skills verified */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Core AWS Competencies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{cert.codeOrType}</span>
                <span className="text-amber-400 group-hover:underline">Credential ID Valid</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
