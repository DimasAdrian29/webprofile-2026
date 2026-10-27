import React, { useState } from 'react';
import { 
  Cpu, 
  Server, 
  Code, 
  Terminal, 
  Users, 
  Search, 
  CheckCircle,
  Layers
} from 'lucide-react';

export default function Skills({ data, lang }) {
  const { categories } = data.skills;
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Code':
        return <Code className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  // Filter skills
  const allSkills = categories.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryName: cat.name, categoryIcon: cat.icon }))
  );

  const displayedSkills = allSkills.filter(skill => {
    const matchesTab = activeTab === 'all' || skill.categoryName.toLowerCase().includes(activeTab.toLowerCase());
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         skill.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <section id="skills" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Keahlian & Teknologi' : 'Skills & Tech Stack'}</span>
          </div>
          <h2 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
            {lang === 'id' ? 'Kompetensi & Ekosistem Alat' : 'Core Competencies & Tools'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'id' 
              ? 'Kombinasi keahlian teknis jaringan komputer tingkat lanjut, rekayasa perangkat lunak, dan kepemimpinan.'
              : 'A versatile blend of network infrastructure engineering, modern web stack, and technical mentorship.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800'
              }`}
            >
              {lang === 'id' ? 'Semua' : 'All'}
            </button>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === cat.name
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari keahlian (Cisco, React, Git...)' : 'Search skills...'}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-sky-500 placeholder-slate-400 dark:placeholder-slate-500 transition-colors shadow-sm dark:shadow-none"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {displayedSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-xl p-5 border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {skill.name}
                  </h3>
                  <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full shrink-0 ${
                    skill.level === 'Advanced' || skill.level === 'Expert'
                      ? 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/30'
                      : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skill.categoryName}</span>
                <CheckCircle className="w-3.5 h-3.5 text-sky-500/70" />
              </div>
            </div>
          ))}
        </div>

        {displayedSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            {lang === 'id' ? 'Tidak ada keahlian yang cocok dengan pencarian.' : 'No skills found matching your search.'}
          </div>
        )}

        {/* Connected Apps / Tools Spotlight Strip */}
        <div className="mt-14 max-w-5xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{lang === 'id' ? 'Aplikasi & Alat Kerja Terhubung (Connected Tools)' : 'Connected Apps & Tools'}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                IntelliJ IDEA · Git & GitHub · Gamma · Replit Agent · MikroTik Winbox · Cisco Packet Tracer
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
                IntelliJ IDEA
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
                Winbox
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
                Packet Tracer
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
                Git / GitHub
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
