import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export default function Education({ data, lang }) {
  const { education } = data;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Latar Belakang Akademik' : 'Academic Foundation'}</span>
          </div>
          <h2 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'id' ? 'Riwayat Pendidikan' : 'Education History'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'id' 
              ? 'Pendidikan formal dan aktivitas akademik penunjang keahlian rekayasa informatika.'
              : 'Formal studies and collegiate activities reinforcing technical excellence.'}
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all relative overflow-hidden"
            >
              {/* Corner badge for PCR */}
              {idx === 0 && (
                <div className="absolute top-0 right-0">
                  <span className="inline-block bg-sky-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-xl font-mono">
                    Current Study
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sky-600 dark:text-sky-400 font-medium text-sm sm:text-base">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {edu.details}
              </p>

              {/* Activities if available */}
              {edu.activities && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 mb-4">
                  <span className="text-xs uppercase font-mono tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                    {lang === 'id' ? 'Aktivitas & Organisasi Kemahasiswaan:' : 'Activities & Societies:'}
                  </span>
                  <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {edu.activities}
                  </p>
                </div>
              )}

              {/* Highlights bullets if available */}
              {edu.highlights && (
                <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
