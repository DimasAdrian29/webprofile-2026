import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  Award, 
  Copy, 
  Check, 
  Lock,
  Layers,
  Network
} from 'lucide-react';

export default function Certifications({ data, lang }) {
  const { certifications } = data;
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/40 transition-colors">
      {/* Glow accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kredensial Resmi' : 'Verified Credentials'}</span>
          </div>
          <h2 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'id' ? 'Lisensi & Sertifikasi' : 'Licenses & Certifications'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'id' 
              ? 'Standar kompetensi industri jaringan komputer berskala internasional yang telah terverifikasi.'
              : 'Officially verified industry standard credentials in networking and systems.'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.filter(c => c.featured).map((cert, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-slate-200 dark:border-slate-800/90 hover:border-sky-500/50 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                cert.title.includes('Cisco') 
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-400' 
                  : 'bg-gradient-to-r from-rose-500 to-amber-500'
              }`} />

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                      cert.title.includes('Cisco')
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                    }`}>
                      {cert.title.includes('Cisco') ? <Network className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <CheckCircle className="w-3 h-3" />
                        {cert.status}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Issuer Mark */}
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    {cert.title.includes('Cisco') ? 'CISCO' : 'MIKROTIK'}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-3">
                  {cert.title}
                </h3>

                {/* Date & Validity */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 dark:text-slate-400 mb-5 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{lang === 'id' ? 'Diterbitkan:' : 'Issued:'} {cert.issueDate}</span>
                  </div>
                  {cert.validUntil && (
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Lock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      <span>{cert.validUntil}</span>
                    </div>
                  )}
                </div>

                {/* Credential ID if present */}
                {cert.credentialId && (
                  <div className="mb-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-mono">Credential ID</span>
                      <span className="font-mono text-sky-700 dark:text-sky-300 truncate max-w-[240px] sm:max-w-[320px]">
                        {cert.credentialId}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyId(cert.credentialId)}
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-700/60 transition-colors shrink-0 ml-2"
                      title="Salin ID Kredensial"
                    >
                      {copiedId === cert.credentialId ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}

                {/* Skills tags */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    {lang === 'id' ? 'Kompetensi Teruji:' : 'Tested Competencies:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Verification Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'id' ? 'Verifikasi Resmi Online' : 'Official Online Verification'}
                </span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600/90 hover:bg-sky-500 text-white font-medium text-xs transition-colors shadow-sm"
                >
                  <span>{lang === 'id' ? 'Lihat Kredensial' : 'Verify Credential'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Secondary Certifications Banner */}
        <div className="mt-8 p-6 rounded-2xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                CCNA: Switching, Routing, and Wireless Essentials
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Cisco Networking Academy · VLANs, Inter-VLAN, STP, EtherChannel & WLAN Configuration
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/dimas-adrian/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-medium shrink-0 transition-colors shadow-sm dark:shadow-none"
          >
            <span>{lang === 'id' ? 'Lihat Semua di LinkedIn' : 'View on LinkedIn'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
