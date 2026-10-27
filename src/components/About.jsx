import React, { useState } from 'react';
import { 
  Network, 
  Code, 
  Users, 
  Terminal, 
  Check, 
  Copy, 
  Sparkles,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

export default function About({ data, lang }) {
  const { about, personal } = data;
  const [copied, setCopied] = useState(false);

  const terminalCode = `dimas@pcr-lab:~$ whoami
Dimas Adrian (He/Him)
Role: Network Engineer & Software Engineer
Campus: Politeknik Caltex Riau (Informatics Eng, 2023-2027)
Role: Head of Development Team Division @ UKM CISCO PCR
Licenses: Cisco CCNA (Feb 2025), MikroTik MTCNA (Jul 2025)
Status: Open to Work & Internships`;

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Profil & Dedikasi' : 'Background & Dedication'}</span>
          </div>
          <h2 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'id' 
              ? 'Menghubungkan rekayasa infrastruktur jaringan dengan pengembangan perangkat lunak modern.'
              : 'Bridging network infrastructure engineering with modern software development.'}
          </p>
        </div>

        {/* Grid: Story & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <p className="first-letter:text-4xl first-letter:font-extrabold first-letter:text-sky-600 dark:first-letter:text-sky-400 first-letter:float-left first-letter:mr-2">
                {about.p1}
              </p>
              <p>
                {about.p2}
              </p>
              <p className="text-slate-900 dark:text-slate-200 font-medium">
                {about.p3}
              </p>
            </div>
          </div>

          {/* Interactive Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Terminal top bar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-slate-400 text-xs ml-2 flex items-center gap-1 font-sans">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    bash - dimas@pcr-lab
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
                  title="Salin ke clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-5 text-slate-300 space-y-3 bg-slate-950">
                <div>
                  <span className="text-emerald-400 font-bold">dimas@pcr-lab</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-500">$ </span>
                  <span className="text-slate-100 font-semibold">whoami</span>
                  <p className="text-sky-300 pl-4 mt-0.5">Dimas Adrian (He/Him)</p>
                </div>

                <div>
                  <span className="text-emerald-400 font-bold">dimas@pcr-lab</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-500">$ </span>
                  <span className="text-slate-100 font-semibold">cat campus_role.txt</span>
                  <p className="text-slate-400 pl-4 mt-0.5">
                    🏛️ Politeknik Caltex Riau (Informatics Eng, 2023-2027)<br/>
                    👥 Head of Development Team Division @ UKM CISCO PCR
                  </p>
                </div>

                <div>
                  <span className="text-emerald-400 font-bold">dimas@pcr-lab</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-500">$ </span>
                  <span className="text-slate-100 font-semibold">check_certs --verified</span>
                  <div className="pl-4 mt-0.5 space-y-0.5 text-emerald-400">
                    <p>✔ Cisco CCNA (Routing & Switching) [VALID Feb 2025]</p>
                    <p>✔ MikroTik MTCNA ID: 2507NA1354 [VALID Jul 2025-2028]</p>
                  </div>
                </div>

                <div>
                  <span className="text-emerald-400 font-bold">dimas@pcr-lab</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-500">$ </span>
                  <span className="text-slate-100 font-semibold">ping -c 2 future-opportunity</span>
                  <p className="text-slate-400 pl-4 mt-0.5">
                    2 packets transmitted, 2 received, 0% packet loss! 🚀
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-slate-500 text-xs">
                  <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse"></span>
                  <span>ready for new technical challenges</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-sky-500/40 transition-all">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-sky-600 dark:text-sky-400 font-mono">
                <span>Pillar 0{idx + 1}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
