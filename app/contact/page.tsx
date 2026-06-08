'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Hamare Saath Juden</p>
          <h1 className="heading-display text-white mb-4">Sampark Karen</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Koi sawal ho, daan karna ho, volunteer banana ho — ya sirf haal-chaal poochna
            ho — hum yahan hain. 🙏
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-label">Hamara Pata</p>
                <h2 className="heading-section mb-6">Hum Yahan Hain</h2>
              </div>
              {[
                {
                  icon: '📍',
                  title: 'Hamara Pata',
                  lines: ['Shrimati Annapurna Devi Charitable Trust', 'Salasar, Churu District,', 'Rajasthan — 331 506, India'],
                  link: null,
                },
                {
                  icon: '📞',
                  title: 'Phone / WhatsApp',
                  lines: ['+91 93526 59727'],
                  link: 'tel:+919352659727',
                },
                {
                  icon: '📧',
                  title: 'Email',
                  lines: ['annapurnadevicharitabletrust15@gmail.com'],
                  link: 'mailto:annapurnadevicharitabletrust15@gmail.com',
                },
                {
                  icon: '🕐',
                  title: 'Office Timings',
                  lines: ['Monday – Saturday: 9:00 AM – 6:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
                  link: null,
                },
              ].map((c) => (
                <div key={c.title} className="bg-white rounded-xl shadow-card p-5 flex gap-4">
                  <div className="w-10 h-10 bg-seva-green-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-saffron uppercase tracking-widest mb-1">{c.title}</p>
                    {c.lines.map((line) =>
                      c.link ? (
                        <a key={line} href={c.link} className="block text-sm text-seva-green-dark font-medium hover:text-saffron transition-colors">{line}</a>
                      ) : (
                        <p key={line} className="text-sm text-body">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919352659727?text=Namaste!%20Main%20aapsi%20sanstha%20ke%20baare%20mein%20jaanna%20chahta%20hoon."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-xl p-4 hover:bg-[#1fba5a] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div>
                  <p className="font-bold">WhatsApp par Seedha Likhein</p>
                  <p className="text-white/80 text-xs">Jaldi jawab milega — usually 1 ghante mein</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🙏</div>
                    <h3 className="text-2xl font-bold text-seva-green-dark mb-2">
                      Dhanyawad, {form.name}!
                    </h3>
                    <p className="text-muted">
                      Aapka sandesh hamein mil gaya. Hum 24 ghante mein jawab denge.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="heading-card text-lg mb-6">Sandesh Bhejein</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Aapka Naam *</label>
                          <input required className="form-input" placeholder="Poora naam" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                        </div>
                        <div>
                          <label className="form-label">Phone / WhatsApp *</label>
                          <input required type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Email (Optional)</label>
                          <input type="email" className="form-input" placeholder="aapka@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                        </div>
                        <div>
                          <label className="form-label">Vishay (Subject)</label>
                          <select className="form-input" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}>
                            <option value="">-- Chunein --</option>
                            <option>Daan karna chahta/chahti hoon</option>
                            <option>Volunteer banana chahta/chahti hoon</option>
                            <option>CSR Partnership ke baare mein</option>
                            <option>80G / Legal documents chahiye</option>
                            <option>General Sawal</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Aapka Sandesh *</label>
                        <textarea required rows={5} className="form-input resize-none" placeholder="Apni baat yahan likhein..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                        🙏 Sandesh Bhejein
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-seva-green-50 rounded-2xl overflow-hidden border-2 border-dashed border-seva-green-100" style={{ height: '250px' }}>
                <div className="w-full h-full flex flex-col items-center justify-center text-seva-green/70 gap-3">
                  <div className="text-4xl">🗺️</div>
                  <div className="text-center">
                    <p className="font-bold text-seva-green-dark">Google Maps</p>
                    <p className="text-sm text-seva-green/60">Salasar, Churu, Rajasthan</p>
                    <a
                      href="https://maps.google.com/?q=Salasar+Rajasthan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 btn-secondary text-xs px-4 py-2 inline-flex"
                    >
                      Google Maps par Dekhen →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
