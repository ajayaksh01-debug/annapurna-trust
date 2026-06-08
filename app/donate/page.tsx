'use client';
import { useState } from 'react';
import Link from 'next/link';

const presets = [
  { amount: 500, label: '₹500', impact: 'Ek parivaar ka ek din ka bhojan', icon: '🍱' },
  { amount: 1000, label: '₹1,000', impact: 'Ek Gau Mata ka ek maheene ka chaara', icon: '🐄' },
  { amount: 2500, label: '₹2,500', impact: '5 mahilaon ki skill workshop', icon: '👩' },
  { amount: 5000, label: '₹5,000', impact: 'Ek maheeney ka pakshi jal seva kendra', icon: '🕊' },
  { amount: 10000, label: '₹10,000', impact: 'Ek poora program event sponsor karo', icon: '🌟' },
  { amount: 0, label: 'Apni Rashi', impact: 'Aap jo chahein woh daan karein', icon: '🙏' },
];

const faqs = [
  {
    q: '80G tax benefit kaise milega?',
    a: 'Daan karne ke 3 working days mein hum aapko 80G receipt email aur WhatsApp par bhejenge. Is receipt se aap apne income tax mein 50% deduction claim kar sakte hain.',
  },
  {
    q: 'Kya mera paise sahi jagah use hoga?',
    a: 'Haan, bilkul. Hamare paas CA-audited accounts hain. Har rupaye ka hisaab hamare annual report mein hota hai jo transparency page par available hai.',
  },
  {
    q: 'UPI se kaise daan karein?',
    a: 'Neeche diye gaye UPI ID ya QR code se seedha payment karein. Payment ke baad receipt ke liye WhatsApp par screenshot bhejein.',
  },
  {
    q: 'Kya foreign donation possible hai?',
    a: 'Abhi hum FCRA application process mein hain. Filhaal, sirf Indian donations accept karte hain. FCRA milne ke baad update karenge.',
  },
  {
    q: 'Monthly donation kaise setup karein?',
    a: 'Hamari "Seva Sathi" monthly program mein join karein. WhatsApp par sampark karein aur hum standing instruction setup mein madad karenge.',
  },
];

export default function DonatePage() {
  const [selected, setSelected] = useState<number | null>(500);
  const [custom, setCustom] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const displayAmount = selected === 0 ? (custom ? `₹${custom}` : '₹?') : `₹${selected?.toLocaleString('en-IN')}`;

  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #B85E18 0%, #E07B2A 60%, #1B5E3B 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-white/80 mb-4">Seva Mein Sahyog</p>
          <h1 className="heading-display text-white mb-4">
            Aapka Daan —{' '}
            <span className="text-gold-light">Kisi Ki Zindagi</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed mb-6">
            ₹500 se shuru kijiye. 80G tax benefit ke saath. Har rupaya kisi ke kaam aata hai.
          </p>
          <div className="flex flex-wrap gap-3">
            {['80G Approved', '12A Certified', 'CA Audited', 'Transparent'].map((t) => (
              <div key={t} className="flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold">
                <svg className="w-3.5 h-3.5 text-gold-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN DONATE SECTION */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* AMOUNT SELECTOR */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-section mb-2">Kitna Daan Karna Chahte Hain?</h2>
                <p className="text-muted">Ek amount chunein ya apni marzi se likhein.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {presets.map((p) => (
                  <button
                    key={p.amount}
                    onClick={() => { setSelected(p.amount); if (p.amount !== 0) setCustom(''); }}
                    className={`donation-card text-left transition-all ${selected === p.amount ? 'border-seva-green bg-seva-green-50' : ''}`}
                  >
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <div className={`donation-amount ${selected === p.amount ? 'text-seva-green' : ''}`}>{p.label}</div>
                    <div className="donation-impact">{p.impact}</div>
                  </button>
                ))}
              </div>

              {selected === 0 && (
                <div>
                  <label className="form-label">Apni Rashi Likhein (₹)</label>
                  <input
                    type="number"
                    className="form-input text-lg font-bold"
                    placeholder="Jaise: 3000"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    min="1"
                  />
                </div>
              )}

              {/* Selected amount display */}
              {(selected !== null && selected !== 0) || (selected === 0 && custom) ? (
                <div className="bg-seva-green rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Aapka Daan</p>
                      <p className="text-4xl font-black">{displayAmount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/70 text-xs">80G Tax Benefit</p>
                      <p className="text-gold-light font-bold text-xl">
                        ≈ {selected === 0 && custom
                          ? `₹${Math.round(parseInt(custom) * 0.5).toLocaleString('en-IN')}`
                          : `₹${Math.round((selected || 0) * 0.5).toLocaleString('en-IN')}`} bachat
                      </p>
                      <p className="text-white/50 text-xs">50% tax mein</p>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* UPI SECTION */}
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h3 className="heading-card mb-6 flex items-center gap-2">
                  <span className="text-2xl">📱</span> UPI se Daan Karen
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  {/* QR Code placeholder */}
                  <div className="text-center">
                    <div
                      className="w-48 h-48 mx-auto rounded-xl border-2 border-dashed border-seva-green-100 flex flex-col items-center justify-center bg-seva-green-50"
                    >
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-xs text-seva-green/70 font-medium">UPI QR Code</p>
                      <p className="text-[0.625rem] text-gray-400 mt-1">[Actual QR Code yahan]</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Camera se scan karein</p>
                  </div>
                  {/* UPI details */}
                  <div className="space-y-4">
                    <div>
                      <p className="form-label">UPI ID</p>
                      <div className="form-input bg-seva-green-50 font-mono font-bold text-seva-green-dark flex items-center justify-between">
                        <span>annapurnadevi@upi</span>
                        <button className="text-saffron text-xs font-bold hover:underline ml-2">Copy</button>
                      </div>
                    </div>
                    <div>
                      <p className="form-label">Account Name</p>
                      <div className="form-input bg-gray-50 font-medium text-sm">
                        Shrimati Annapurna Devi Charitable Trust
                      </div>
                    </div>
                    <div className="bg-saffron-50 border border-saffron-100 rounded-lg p-3">
                      <p className="text-saffron-dark text-xs font-semibold">
                        ✓ Payment ke baad screenshot WhatsApp par bhejein:<br />
                        <span className="text-seva-green">+91 93526 59727</span><br />
                        80G receipt milegi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Apps */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[#E5E0D8]">
                  <p className="text-xs text-gray-500 w-full mb-1">In apps se koi bhi use karein:</p>
                  {['GPay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'].map((app) => (
                    <span key={app} className="tag text-xs">{app}</span>
                  ))}
                </div>
              </div>

              {/* BANK TRANSFER */}
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h3 className="heading-card mb-6 flex items-center gap-2">
                  <span className="text-2xl">🏦</span> Bank Transfer se Daan Karen
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Account Name', val: 'Shrimati Annapurna Devi Charitable Trust' },
                    { label: 'Bank Name', val: 'State Bank of India / [Bank Name]' },
                    { label: 'Account Number', val: 'XXXXXXXXXXXX' },
                    { label: 'IFSC Code', val: 'SBIN0XXXXXX' },
                    { label: 'Account Type', val: 'Current Account' },
                    { label: 'Branch', val: 'Salasar, Churu, Rajasthan' },
                  ].map((d) => (
                    <div key={d.label} className="p-3 bg-off-white rounded-lg">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-0.5">{d.label}</p>
                      <p className="font-semibold text-seva-green-dark text-sm">{d.val}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-seva-green-50 border border-seva-green-100 rounded-lg p-3">
                  <p className="text-seva-green-dark text-xs font-medium">
                    Transfer ke baad apna naam, contact number aur daan ki rashi hamein
                    WhatsApp ya email par bhejein — 80G receipt milegi.
                  </p>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* Why donate box */}
              <div className="bg-seva-green-dark rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">🙏 Kyun Karein Daan?</h3>
                <ul className="space-y-3">
                  {[
                    '500+ parivaaron ko bhojan milta hai',
                    '200+ Gau Mataon ko sahara',
                    '150+ mahilayein sashakt',
                    '80G ke saath tax bachao',
                    'Poora hisaab, poori transparency',
                  ].map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-white/80">
                      <svg className="w-4 h-4 text-gold-light flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Seva Sathi */}
              <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-saffron">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="heading-card mb-2">Seva Sathi Banen</h3>
                <p className="text-muted text-sm mb-4">
                  Har maheeney ₹500 se donate karein. Monthly receipt aur impact update
                  milega WhatsApp par.
                </p>
                <a
                  href="https://wa.me/919352659727?text=Main%20Seva%20Sathi%20banna%20chahta%20hoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full justify-center"
                >
                  Monthly Program Join Karen
                </a>
              </div>

              {/* 80G info */}
              <div className="bg-cream-section rounded-2xl p-6 border border-gold/30">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="heading-card mb-2">80G Tax Benefit</h3>
                <p className="text-muted text-sm mb-3">
                  Aapka daan Section 80G ke antargat 50% tax deduction ke liye eligible hai.
                </p>
                <div className="space-y-2">
                  {[
                    { q: 'Daan', val: '₹10,000' },
                    { q: '80G Deduction (50%)', val: '₹5,000' },
                    { q: '30% tax bracket mein bachat', val: '₹1,500' },
                  ].map((r) => (
                    <div key={r.q} className="flex justify-between text-sm">
                      <span className="text-gray-500">{r.q}</span>
                      <span className="font-bold text-seva-green-dark">{r.val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  * Tax calculation approximate hai. Apne CA se confirm karein.
                </p>
              </div>

              {/* Contact for donation help */}
              <div className="bg-white rounded-2xl shadow-card p-5 text-center">
                <p className="text-sm font-bold text-seva-green-dark mb-2">
                  Koi sawal? Hum yahan hain.
                </p>
                <a
                  href="https://wa.me/919352659727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
                >
                  💬 WhatsApp: +91 93526 59727
                </a>
                <a
                  href="mailto:annapurnadevicharitabletrust15@gmail.com"
                  className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-seva-green mt-2"
                >
                  📧 Email Karein
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Sawal Jawab</p>
            <h2 className="heading-section">Daan Ke Baare Mein Pooche Jaane Wale Sawal</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-seva-green-dark text-sm">{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-saffron flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted text-sm">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
