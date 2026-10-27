import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('profile_lang') || 'id';
  });

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default dark
  });

  // Handle Dark / Light Mode updates
  useEffect(() => {
    const root = document.documentElement;
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      if (metaColorScheme) metaColorScheme.content = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      if (metaColorScheme) metaColorScheme.content = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Handle Language persistence
  useEffect(() => {
    localStorage.setItem('profile_lang', lang);
  }, [lang]);

  const currentData = profileData[lang];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        isDark={isDark} 
        setIsDark={setIsDark} 
        profile={currentData.personal} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero data={currentData} lang={lang} isDark={isDark} />
        <About data={currentData} lang={lang} isDark={isDark} />
        <Certifications data={currentData} lang={lang} isDark={isDark} />
        <Experience data={currentData} lang={lang} isDark={isDark} />
        <Skills data={currentData} lang={lang} isDark={isDark} />
        <Education data={currentData} lang={lang} isDark={isDark} />
        <Contact data={currentData} lang={lang} isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer data={currentData} lang={lang} isDark={isDark} />
    </div>
  );
}
