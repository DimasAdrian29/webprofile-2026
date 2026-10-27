import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

export default function Experience({ data, lang }) {
  const { experience } = data;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kepemimpinan & Kontribusi' : 'Leadership & Experience'}</span>
          </div>
          <h2 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'id' ? 'Pengalaman & Organisasi' : 'Experience & Leadership'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'id' 
              ? 'Membimbing dan membangun kapabilitas teknis mahasiswa di lingkungan Politeknik Caltex Riau.'
              : 'Leading technical module development and practical instruction for engineering peers.'}
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {experience.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all shadow-lg relative"
            >
              {/* Highlight ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-semibold font-mono">
                  {item.type}
                </span>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-medium text-sm sm:text-base mt-1">
                  {item.organization}
                </p>
              </div>

              {/* Description summary */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Bulleted responsibilities */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>{lang === 'id' ? 'Tanggung Jawab & Pencapaian Utama:' : 'Key Responsibilities & Impact:'}</span>
                </h4>
                
                <div className="grid grid-cols-1 gap-3">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key tags */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  Curriculum Development
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  Cisco Networking
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  Technical Instruction
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  Team Leadership
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
