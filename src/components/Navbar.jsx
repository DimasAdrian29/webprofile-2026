import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Globe, 
  Linkedin, 
  ExternalLink 
} from 'lucide-react';

export default function Navbar({ lang, setLang, isDark, setIsDark, profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'id' ? 'Tentang' : 'About' },
    { href: '#experience', label: lang === 'id' ? 'Pengalaman' : 'Experience' },
    { href: '#certifications', label: lang === 'id' ? 'Sertifikasi' : 'Certifications' },
    { href: '#skills', label: lang === 'id' ? 'Keahlian' : 'Skills' },
    { href: '#education', label: lang === 'id' ? 'Pendidikan' : 'Education' },
    { href: '#contact', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-sky-950/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-[2px] shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center transition-colors">
                <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-lg tracking-tight">DA</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                Dimas Adrian
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline-block font-mono">
                Network & Software Eng.
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-sky-400 dark:hover:bg-slate-800/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-800 hover:border-sky-500/50 bg-slate-100/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all cursor-pointer"
              title="Ganti Bahasa / Switch Language"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-300 dark:border-slate-800 hover:border-sky-500/50 bg-slate-100/80 dark:bg-slate-900/60 transition-all cursor-pointer"
              title={isDark ? "Ganti ke Mode Terang (Light Mode)" : "Ganti ke Mode Gelap (Dark Mode)"}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* LinkedIn Quick Link */}
            <a
              href="https://www.linkedin.com/in/dimas-adrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white shadow-sm shadow-sky-600/30 transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 transition-colors"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/dimas-adrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Kunjungi Profil LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
