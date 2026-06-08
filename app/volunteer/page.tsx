'use client';
import { useState } from 'react';

const roles = [
  {
    icon: '🌾',
    title: 'Field Volunteer',
    desc: 'Seedha zameen par kaam. Ann Daan mein bhojan vitran, Gau Seva mein chaara, events mein support.',
    commitment: 'Hafte mein 2-4 ghante',
    suitable: 'Jo physical seva karna chahte hain',
    badge: '',
  },
  {
    icon: '💻',
    title: 'Digital Volunteer',
    desc: 'Ghar se kaam. Social media posts, content likhna, WhatsApp broadcast manage karna, fundraising campaigns.',
    commitment: 'Maheeney mein 8-10 ghante',
    suitable: 'Social media ya writing mein interest',
    badge: 'Ghar Se',
  },
  {
    icon: '⚖️',
    title: 'Professional Volunteer',
    desc: 'Aapki expertise hamare kaam aaye. CA for audit, lawyers for legal advice, doctors for medical camps.',
    commitment: 'Zaroorat ke hisaab se',
    suitable: 'CA, Advocate, Doctor, Engineer',
    badge: 'Expert',
  },
  {
    icon: '🎓',
    title: 'Student Volunteer',
    desc: 'NSS, NCC, ya college students — seva certificate milega. Ek experience jo zindagi bhar yaad rahega.',
    commitment: 'Events pe as needed',
    suitable: 'College students, NSS/NCC members',
    badge: 'Certificate',
  },
  {
    icon: '📸',
    title: 'Media Volunteer',
    desc: 'Photography, video, editing. Hamari seva ki kahaniyan log tak pahunchaao.',
    commitment: 'Events ke time pe',
    suitable: 'Photographer, Videographer',
    badge: '',
  },
  {
    icon: '🏫',
    title: 'Trainer / Teacher',
    desc: 'Mahila sashaktikaran workshops ke liye trainers — silai, beauty, digital literacy, kuch bhi.',
    commitment: 'Workshop schedule ke hisaab se',
    suitable: 'Koi bhi skill rakhne wale',
    badge: 'Training',
  },
];

const faqs = [
  { q: 'Volunteer banne ke liye koi fees hai?', a: 'Bilkul nahi. Volunteer banana free hai aur hamesha rahega. Aap seva dete hain — hum aapka swagat karte hain.' },
  { q: 'Minimum age kya hai?', a: '16 saal se upar koi bhi volunteer ban sakta hai. 16-18 saal ke students ko parents ki permission letter chahiye.' },
  { q: 'Kya certificate milega?', a: 'Haan! Har event ke baad participation certificate milega. Annual "Seva Ratna" award un volunteers ko jo saal bhar active rahe.' },
  { q: 'Kya bahar se bhi log volunteer kar sakte hain?', a: 'Bilkul. Digital volunteering ke liye aap kisi bhi jagah se kaam kar sakte hain. Field volunteering ke liye Salasar/Rajasthan mein hona helpful hai.' },
  { q: 'Training milegi kya?', a: 'Haan, sab new volunteers ko orientation session hoga — kya karna hai, kaise karna hai, safety guidelines, sab samjhaya jayega.' },
];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', role: '', skills: '', why: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #2D7A52 60%, #C9962A 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Seva Mein Juden</p>
          <h1 className="heading-display text-white mb-4">
            Sirf Paise Nahi —{' '}
            <span className="text-gold-light">Apna Waqt Bhi Daan Karen</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Volunteer hona kisi bhi daan se bada hai. Aapka ek ghanta, kisi ki
            poori zindagi badal sakta hai.
          </p>
        </div>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label">Kyun Zaruri Hai</p>
              <h2 className="heading-section mb-2">
                Volunteer Seva Sirf Sewa Nahi —{' '}
                <span className="text-saffron">Ek Rishta Hai</span>
              </h2>
              <div className="gold-line-left" />
              <p className="text-body mb-5">
                Jab aap kisi bhooke insaan ko apne haath se khana dete hain, jab aap ek
                Gau Mata ko paani pilate hain, jab ek aurat aapki workshop ke baad pehli
                baar apne hath se kuch banati hai — yeh ek alag hi ahsaas hota hai.
              </p>
              <p className="text-body mb-8">
                Volunteer banana sirf trust ki madad nahi hai. Yeh apni zindagi mein ek
                naya matlab dhundhna hai. Hazaron volunteers ne kaha hai ki seva karne ke
                baad unki apni zindagi ka nazariya badal gaya.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏅', text: 'Seva Certificate milega' },
                  { icon: '🤝', text: 'Community ka hissa banoge' },
                  { icon: '💡', text: 'Nayi skills seekhoge' },
                  { icon: '❤️', text: 'Dil ko sukoon milega' },
                ].map((b) => (
                  <div key={b.text} className="flex gap-2 items-center">
                    <span className="text-xl">{b.icon}</span>
                    <span className="text-sm text-body font-medium">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ background: 'linear-gradient(135deg, #E8F5EE, #C5E6D3)', height: '380px' }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 text-seva-green/70">
                <div className="text-7xl mb-4">🤲</div>
                <p className="font-bold text-lg text-seva-green-dark">Volunteer Photo</p>
                <p className="text-sm mt-1">[Real volunteer ki tasveer yahan]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER ROLES */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Kaise Juden</p>
            <h2 className="heading-section">Volunteer Ke Liye 6 Raahein</h2>
            <div className="gold-line" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-seva-green-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                    {r.icon}
                  </div>
                  {r.badge && <span className="tag text-xs">{r.badge}</span>}
                </div>
                <h3 className="heading-card mb-1">{r.title}</h3>
                <p className="text-muted text-sm mb-4">{r.desc}</p>
                <div className="space-y-2 pt-3 border-t border-[#E5E0D8]">
                  <div className="flex gap-2 text-xs">
                    <span className="text-saffron font-bold">⏱</span>
                    <span className="text-gray-500">{r.commitment}</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-seva-green font-bold">✓</span>
                    <span className="text-gray-500">{r.suitable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="py-20 bg-off-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Abhi Register Karen</p>
            <h2 className="heading-section">Volunteer Application Form</h2>
            <div className="gold-line" />
            <p className="text-muted">Form bharen — 24 ghante mein hamari team sampark karegi.</p>
          </div>

          {submitted ? (
            <div className="bg-seva-green rounded-2xl p-12 text-center text-white shadow-xl">
              <div className="text-6xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold mb-2">Dhanyawad, {form.name || 'Volunteer Ji'}!</h3>
              <p className="text-white/80 text-lg">
                Aapka form mil gaya hai. Hamari team 24 ghante mein WhatsApp ya phone par
                sampark karegi.
              </p>
              <p className="text-gold-light text-sm mt-4 italic">
                "Aapne seva ka pehla kadam le liya — yeh sab se mushkil hota hai."
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Aapka Poora Naam *</label>
                  <input required className="form-input" placeholder="Jaise: Ramesh Kumar" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input required type="tel" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Email (Optional)</label>
                  <input type="email" className="form-input" placeholder="aapka@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
                <div>
                  <label className="form-label">Aap Kahan Se Hain? *</label>
                  <input required className="form-input" placeholder="Jaise: Salasar, Churu, Jaipur..." value={form.city} onChange={e => setForm({...form, city: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="form-label">Kaunsa Role Chahte Hain? *</label>
                <select required className="form-input" value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
                  <option value="">-- Chunein --</option>
                  {roles.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                  <option value="Koi bhi">Koi bhi role — trust par chhod deta hoon</option>
                </select>
              </div>
              <div>
                <label className="form-label">Aapki Skills / Expertise</label>
                <input className="form-input" placeholder="Jaise: cooking, photography, CA, teaching..." value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} />
              </div>
              <div>
                <label className="form-label">Kyun Banana Chahte Hain Volunteer?</label>
                <textarea rows={3} className="form-input resize-none" placeholder="Thodi si apni baat bataein..." value={form.why} onChange={e => setForm({...form, why: e.target.value})} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                🙏 Application Bhejein
              </button>
              <p className="text-xs text-center text-gray-400">
                Aapki details safe hain. Sirf trust ki team dekhegi.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream-section">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="heading-section text-center mb-10">Volunteer FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-seva-green-dark text-sm">{f.q}</span>
                  <svg className={`w-5 h-5 text-saffron ml-4 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && <div className="px-5 pb-5"><p className="text-muted text-sm">{f.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
