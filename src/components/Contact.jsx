import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function Contact({ data, lang }) {
  const { contact } = data;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission and construct mailto link
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject || 'Inquiry from Profile Web')}&body=${encodeURIComponent(`Halo Dimas,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100/60 dark:bg-slate-900/40 transition-colors">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Terhubung Langsung' : 'Get in Touch'}</span>
          </div>
          <h2 className="font-extrabold text-slate-900 dark:text-white tracking-tight">
            {contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/80 transition-colors shadow-sm dark:shadow-none cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">{lang === 'id' ? 'Tersalin' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{lang === 'id' ? 'Salin Email' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs uppercase font-mono text-slate-500 dark:text-slate-400 block">Email Address</span>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 font-medium text-base sm:text-lg transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-sky-600/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                >
                  <span>{lang === 'id' ? 'Buka Profil' : 'Open'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <span className="text-xs uppercase font-mono text-slate-500 dark:text-slate-400 block">LinkedIn Profile</span>
                <span className="text-slate-900 dark:text-white font-medium text-base sm:text-lg">
                  linkedin.com/in/dimas-adrian
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'id' ? '6+ Koneksi Terverifikasi · Politeknik Caltex Riau' : '6+ Verified Connections · Politeknik Caltex Riau'}
                </p>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-slate-500 dark:text-slate-400 block">Location</span>
                  <span className="text-slate-900 dark:text-white font-medium text-base">
                    {contact.location}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Waktu Respon Cepat (GMT+7 WIB)' : 'Fast Response Time (GMT+7)'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (No Database Required) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {lang === 'id' ? 'Kirim Pesan Cepat' : 'Quick Direct Message'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {lang === 'id' 
                  ? 'Kirimkan pesan langsung ke email saya tanpa memerlukan database.'
                  : 'Send an instant message directly to my email (no database needed).'}
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {lang === 'id' ? 'Pesan Siap Dikirim!' : 'Message Ready to Send!'}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {lang === 'id' 
                      ? 'Aplikasi email Anda akan otomatis terbuka dengan draf pesan ini.'
                      : 'Your email client will open automatically with your pre-filled message.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                        {lang === 'id' ? 'Nama Anda' : 'Your Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors shadow-sm dark:shadow-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                        {lang === 'id' ? 'Email Anda' : 'Your Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors shadow-sm dark:shadow-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                      {lang === 'id' ? 'Subjek / Topik' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={lang === 'id' ? 'e.g. Peluang Magang / Kolaborasi Proyek' : 'e.g. Internship Opportunity / Project'}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors shadow-sm dark:shadow-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 dark:text-slate-400 mb-1.5">
                      {lang === 'id' ? 'Pesan Anda' : 'Message'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'id' ? 'Tuliskan pesan Anda di sini...' : 'Write your message here...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none shadow-sm dark:shadow-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{contact.ctaText}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
