import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            Verified Cloud Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-['Space_Grotesk'] tracking-tight text-white">
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
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <span>Issued: {cert.issueDate}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{cert.credentialTopic}</span>
                </div>

                {/* Skills verified */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-mono text-slate-400">Core AWS Competencies:</div>
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
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{cert.codeOrType}</span>
                <span className="text-cyan-400">Credential Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
