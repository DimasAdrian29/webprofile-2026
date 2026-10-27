import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Mail
} from 'lucide-react';

export default function Footer({ data, lang }) {
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/80 dark:bg-slate-950 py-12 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Left Brand */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[6px] flex items-center justify-center transition-colors">
                  <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-sm">DA</span>
                </div>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">Dimas Adrian</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md">
              Student at Politeknik Caltex Riau (Informatics Engineering) | Cisco CCNA & MikroTik MTCNA | Network & Software Engineer
            </p>
          </div>

          {/* Socials & Back to top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-center md:justify-end gap-3">
            <a
              href="https://www.linkedin.com/in/dimas-adrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-600 text-slate-700 dark:text-slate-300 hover:text-white border border-slate-300 dark:border-slate-800 transition-all shadow-sm dark:shadow-none"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-sky-600 text-slate-700 dark:text-slate-300 hover:text-white border border-slate-300 dark:border-slate-800 transition-all shadow-sm dark:shadow-none"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 text-xs font-mono transition-colors shadow-sm dark:shadow-none cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright & tech details */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Dimas Adrian. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <span>React + Vite + Tailwind CSS</span>
            <span>•</span>
            <span className="text-sky-600 dark:text-sky-400">Pekanbaru, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
