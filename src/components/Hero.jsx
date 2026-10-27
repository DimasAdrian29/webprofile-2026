import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Network, 
  Cpu, 
  CheckCircle2
} from 'lucide-react';

export default function Hero({ data, lang }) {
  const { personal } = data;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden network-grid-bg">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium animate-pulse shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
              <span>{personal.status}</span>
            </div>

            {/* Main Title & Pronoun */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <h1 className="font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {personal.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs">
                  {personal.pronouns}
                </span>
              </div>
              
              <p className="text-lg sm:text-xl font-medium text-sky-600 dark:text-sky-400 font-mono">
                Network Engineer & Software Engineer
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personal.tagline}
            </p>

            {/* Meta Info Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{personal.university}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Cisco CCNA & MikroTik MTCNA</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{lang === 'id' ? 'Lihat Sertifikasi' : 'View Certifications'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700/80 hover:border-sky-500 font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-sm dark:shadow-none"
              >
                <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dimas-adrian/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/90 dark:bg-slate-900/50 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 border border-slate-300 dark:border-slate-800 hover:border-sky-500/50 text-sm font-medium transition-all shadow-sm dark:shadow-none"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Tech Card / Profile Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Card Container */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none"></div>

                {/* Header Avatar Simulation */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-sky-500/30 p-1">
                      <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex flex-col items-center justify-center transition-colors">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-sky-400 dark:to-cyan-200 font-mono">
                          DA
                        </span>
                      </div>
                    </div>
                    {/* Verified badge */}
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-950" title="Verified Profile">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Dimas Adrian</h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-mono">@dimas-adrian</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Politeknik Caltex Riau</p>
                  </div>
                </div>

                {/* Mini Badges / Fast Facts */}
                <div className="py-5 space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 transition-colors">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">UKM CISCO PCR</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Head of Development Team Division (2024–2025)</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 transition-colors">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">Dual Certified Associate</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Cisco CCNA (Feb 2025) & MikroTik MTCNA (Jul 2025)</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 transition-colors">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">Informatics Engineering</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Applied Bachelor (D4) · Expected Aug 2027</p>
                    </div>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    PCR Student
                  </span>
                  <a 
                    href="https://www.linkedin.com/in/dimas-adrian/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 flex items-center gap-1 font-sans underline"
                  >
                    linkedin.com/in/dimas-adrian
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-sm dark:shadow-none transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 font-mono">2</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{lang === 'id' ? 'Sertifikasi Global (CCNA & MTCNA)' : 'Global Certs (CCNA & MTCNA)'}</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-sm dark:shadow-none transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">UKM CISCO</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{lang === 'id' ? 'Ketua Divisi Litbang / Modul' : 'Head of Dev Division'}</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-sm dark:shadow-none transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">D4 PCR</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{lang === 'id' ? 'Teknik Informatika (2023-2027)' : 'Informatics Engineering'}</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-sm dark:shadow-none transition-colors">
            <span className="block text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">100%</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{lang === 'id' ? 'Dedikasi Teknologi' : 'Engineering Focus'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
