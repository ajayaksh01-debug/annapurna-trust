'use client';
import { useState } from 'react';
import type { Metadata } from 'next';

const focusAreas = [
  { icon: '🍱', title: 'Nutrition & Food Security', programs: 'Ann Daan, Community Bhandara', sdg: 'SDG 2: Zero Hunger' },
  { icon: '🐄', title: 'Animal Welfare', programs: 'Gau Seva, Wildlife Protection', sdg: 'SDG 15: Life on Land' },
  { icon: '👩', title: 'Women Empowerment', programs: 'Skill Training, Financial Literacy', sdg: 'SDG 5: Gender Equality' },
  { icon: '🌿', title: 'Environment', programs: 'Pakshi Sanrakshan, Tree Plantation', sdg: 'SDG 13: Climate Action' },
];

const models = [
  {
    icon: '💰',
    title: 'Program Sponsorship',
    desc: 'Ek specific program sponsor karein — Ann Daan, Gau Seva, ya Mahila Workshop. Apna naam ya company ka naam program mein hoga.',
    amount: '₹50,000 se shuru',
  },
  {
    icon: '🤝',
    title: 'Event Partnership',
    desc: 'Ek major seva event ka CSR partner banen. Media coverage, certificates, aur employee engagement ke saath.',
    amount: '₹1,00,000 se shuru',
  },
  {
    icon: '📅',
    title: 'Annual Grant',
    desc: 'Ek poore saal ke liye trust ka CSR partner banen. Quarterly impact reports aur annual recognition.',
    amount: '₹5,00,000 se shuru',
  },
  {
    icon: '👥',
    title: 'Employee Volunteering',
    desc: 'Apne employees ko field seva ka anubhav dilwayein. Team building aur social responsibility ek saath.',
    amount: 'No minimum',
  },
];

export default function CSRPage() {
  const [form, setForm] = useState({ company: '', contact: '', phone: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 50%, #A57818 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm">
            <span>🏢</span> <span className="text-white/90 font-medium">Corporate Social Responsibility</span>
          </div>
          <h1 className="heading-display text-white mb-4">
            CSR Partnership —{' '}
            <span className="text-gold-light">Milke Badlaav Layein</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed mb-6">
            Aapki company ki CSR funds Rajasthan ke zaruratmand logon tak pahunchaayein.
            Hum 12A, 80G aur CSR-1 registered hain — poori compliance ke saath.
          </p>
          <div className="flex flex-wrap gap-3">
            {['12A Certified', '80G Approved', 'CSR-1 Filed', 'CA Audited Accounts'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Kyun Humse Partnership</p>
              <h2 className="heading-section mb-2">
                Aapki CSR Funds —{' '}
                <span className="text-saffron">Poori Zimmedari Ke Saath</span>
              </h2>
              <div className="gold-line-left" />
              <p className="text-body mb-5">
                CSR funds release karna sirf ek legal requirement nahi — yeh ek mauka hai
                apni company ke naam se kisi ki zindagi badlane ka. Hum ensure karte hain
                ki har rupaya maximum impact kare.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '✅', title: 'Poori Legal Compliance', desc: '12A, 80G, CSR-1, DARPAN — sab ready hain.' },
                  { icon: '📊', title: 'Quarterly Impact Reports', desc: 'Har teen maheene mein detailed report — photos, numbers, stories.' },
                  { icon: '🔍', title: 'CA Audited Accounts', desc: 'Independent auditor se verified annual accounts.' },
                  { icon: '🏆', title: 'Public Recognition', desc: 'Website, press releases, events mein aapki company ka naam.' },
                  { icon: '👥', title: 'Employee Engagement', desc: 'Aapke employees field volunteering mein participate kar sakte hain.' },
                ].map((b) => (
                  <div key={b.title} className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">{b.icon}</span>
                    <div>
                      <p className="font-bold text-seva-green-dark text-sm">{b.title}</p>
                      <p className="text-muted text-sm">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {/* Stats for CSR */}
              <div className="bg-seva-green rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4 text-lg">Hamare Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '500+', l: 'Ann Daan Beneficiaries' },
                    { n: '200+', l: 'Gau Mata Served' },
                    { n: '150+', l: 'Mahilayein Sashakt' },
                    { n: '6+', l: 'Saal Ki Seva' },
                  ].map((s) => (
                    <div key={s.l} className="text-center bg-white/10 rounded-xl p-3">
                      <div className="text-2xl font-black text-gold-light">{s.n}</div>
                      <div className="text-white/70 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-saffron">
                <h3 className="heading-card mb-2">Compliance Status</h3>
                <div className="space-y-2">
                  {[
                    { doc: '12A Certificate', status: '✅ Valid' },
                    { doc: '80G Certificate', status: '✅ Approved' },
                    { doc: 'CSR-1 on MCA', status: '✅ Filed' },
                    { doc: 'DARPAN Registration', status: '✅ Registered' },
                    { doc: 'CA Audit 2024-25', status: '✅ Completed' },
                  ].map((c) => (
                    <div key={c.doc} className="flex justify-between text-sm">
                      <span className="text-body">{c.doc}</span>
                      <span className="font-semibold text-seva-green">{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR FOCUS AREAS */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">CSR Ke Liye Suitable Programs</p>
            <h2 className="heading-section">Focus Areas</h2>
            <div className="gold-line" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((f) => (
              <div key={f.title} className="card p-6 text-center">
                <div className="w-16 h-16 bg-seva-green-50 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                  {f.icon}
                </div>
                <h3 className="heading-card mb-1">{f.title}</h3>
                <p className="text-muted text-xs mb-3">{f.programs}</p>
                <span className="tag-gold tag text-[0.625rem]">{f.sdg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Kaise Karein Partnership</p>
            <h2 className="heading-section">Partnership Models</h2>
            <div className="gold-line" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {models.map((m) => (
              <div key={m.title} className="card p-7">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-seva-green-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    {m.icon}
                  </div>
                  <div>
                    <h3 className="heading-card mb-1">{m.title}</h3>
                    <div className="tag tag-saffron mb-3 text-xs">{m.amount}</div>
                  </div>
                </div>
                <p className="text-muted text-sm mt-3">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR CONTACT FORM */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">CSR Discussion Shuru Karen</p>
            <h2 className="heading-section">Partnership Ke Liye Sampark Karen</h2>
            <div className="gold-line" />
            <p className="text-muted">24 ghante mein hamari CSR team jawab degi.</p>
          </div>
          {submitted ? (
            <div className="bg-seva-green rounded-2xl p-12 text-center text-white">
              <div className="text-6xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold mb-2">Dhanyawad!</h3>
              <p className="text-white/80">Hamari CSR team 24 ghante mein sampark karegi.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-white rounded-2xl shadow-xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Company / Organization Ka Naam *</label>
                  <input required className="form-input" placeholder="XYZ Pvt. Ltd." value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                </div>
                <div>
                  <label className="form-label">Contact Person Ka Naam *</label>
                  <input required className="form-input" placeholder="CSR Manager ka naam" value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input required type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
                <div>
                  <label className="form-label">Official Email *</label>
                  <input required type="email" className="form-input" placeholder="csr@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="form-label">Approximate CSR Budget</label>
                <select className="form-input" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                  <option value="">-- Select Range --</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹5,00,000</option>
                  <option>₹5,00,000 – ₹10,00,000</option>
                  <option>₹10,00,000+</option>
                </select>
              </div>
              <div>
                <label className="form-label">Aap Kya Achieve Karna Chahte Hain?</label>
                <textarea rows={4} className="form-input resize-none" placeholder="CSR goals, preferred programs, employee volunteering interest..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                CSR Discussion Shuru Karen →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
