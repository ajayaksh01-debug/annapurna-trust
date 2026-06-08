import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hamara Prabhav — Impact Report',
  description: 'Shrimati Annapurna Devi Charitable Trust ka annual impact — 500+ ann daan, 200+ gau seva, 150+ mahilayein, 1000+ pakshi. Real stories, real numbers.',
};

const stories = [
  {
    name: 'Ramkali Devi',
    age: '72 saal',
    location: 'Salasar',
    program: 'Ann Daan',
    emoji: '👵',
    story: '"Main akeli rehti hoon. Bete bahut door hain. Ek din is trust ke volunteers ghar aaye — garam khana lekar. Maine poochha kyun aaye ho? Unhone kaha — \'Maa Ji, yahi seva hai.\' Tab se har maheeney aate hain. Ab mujhe akela nahi lagta."',
    tagClass: 'tag-saffron',
    bg: 'from-amber-50 to-orange-50',
  },
  {
    name: 'Geeta Devi',
    age: '35 saal',
    location: 'Salasar ke paas',
    program: 'Mahila Sashaktikaran',
    emoji: '👩',
    story: '"Pehle ghar par baithe rehti thi — kuch kaam nahi tha, kuch aamdani nahi thi. Workshop ke baad silai seekhi. Ab ghar se kaam karte hue ₹3,000–₹4,000 maheeney ka kama leti hoon. Bacchon ki fees ab main deti hoon."',
    tagClass: '',
    bg: 'from-purple-50 to-violet-50',
  },
  {
    name: 'Mohan Das',
    age: '58 saal',
    location: 'Salasar',
    program: 'Ann Daan',
    emoji: '👨',
    story: '"Kaam nahi tha kuch maheeney. Ghar mein do waqt ki roti bhi mushkil ho gayi thi. Tab trust ke ann daan program se madad mili. Parivar ne khaya. Ab kaam fir se chal pada hai. Bhagwan ki kirpa aur in logon ki seva ka shukriya."',
    tagClass: '',
    bg: 'from-green-50 to-emerald-50',
  },
];

export default function ImpactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #2D7A52 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Asar Jo Dikh Raha Hai</p>
          <h1 className="heading-display text-white mb-4">Hamara Prabhav</h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Sirf sankhyayein nahi — yahan woh real log hain jinki zindagi badli.
            Yahan woh kaam hai jo zameen par hua, camera ke liye nahi.
          </p>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="py-20 bg-seva-green text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label text-saffron-light">2020–2026 Tak Ka Safar</p>
            <h2 className="heading-section text-white">Annual Impact Dashboard</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { n: '500+', l: 'Ann Daan Labhaarthi', i: '🍱', sub: 'Since 2021' },
              { n: '200+', l: 'Gau Mata Seva', i: '🐄', sub: 'Since 2022' },
              { n: '150+', l: 'Mahilayein Sashakt', i: '👩', sub: 'Since 2023' },
              { n: '1,000+', l: 'Pakshi Sanrakshit', i: '🕊', sub: 'Since 2024' },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{s.i}</div>
                <div className="stat-number text-white">{s.n}</div>
                <div className="text-white/90 font-semibold text-sm mt-1">{s.l}</div>
                <div className="text-white/50 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Additional metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: '6+', l: 'Saal Ki Seva', i: '📅' },
              { n: '15+', l: 'Seva Kendras', i: '📍' },
              { n: '50+', l: 'Active Volunteers', i: '🤲' },
              { n: '3', l: 'Events Har Maheeney', i: '📢' },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 rounded-xl p-5 text-center">
                <div className="text-2xl mb-2">{s.i}</div>
                <div className="text-3xl font-black text-gold-light">{s.n}</div>
                <div className="text-white/65 text-xs mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM-WISE IMPACT */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Program-wise Prabhav</p>
            <h2 className="heading-section">Har Program Ka Asar</h2>
            <div className="gold-line" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🍱', title: 'Ann Daan', color: '#E07B2A',
                metrics: [
                  { label: 'Total Beneficiaries', val: '500+' },
                  { label: 'Monthly Events', val: '4–6' },
                  { label: 'Bujurg Gharon Tak', val: '80+' },
                  { label: 'Festivals Covered', val: '12+' },
                ],
                desc: 'Salasar aur aas-paas ke kshetron mein niyamit bhojan vitaran. Har maheene minimum 4 events, festivals par special drives.',
              },
              {
                icon: '🐄', title: 'Gau Seva', color: '#1B5E3B',
                metrics: [
                  { label: 'Gau Matayein Served', val: '200+' },
                  { label: 'Monthly Chaara Distribution', val: 'Regular' },
                  { label: 'Medical Seva', val: 'On Demand' },
                  { label: 'Garmi Season Coverage', val: 'Mar–Jul' },
                ],
                desc: 'Salasar Dham ke aas-paas ki Gau Mataon ko niyamit chaara, paani aur zaroorat par veterinary sahayata.',
              },
              {
                icon: '👩', title: 'Mahila Sashaktikaran', color: '#7C3AED',
                metrics: [
                  { label: 'Mahilayein Trained', val: '150+' },
                  { label: 'Skills Covered', val: '5+' },
                  { label: 'Average Income Boost', val: '₹2,000–₹4,000/month' },
                  { label: 'Ongoing Batches', val: '3' },
                ],
                desc: 'Silai, beauty, digital skills — 5 alag courses. Training ke baad mahilayein ghar se ya shop se kaam karne lagti hain.',
              },
              {
                icon: '🕊', title: 'Pakshi Sanrakshan', color: '#0369A1',
                metrics: [
                  { label: 'Pakshi Labhaanvit', val: '1,000+' },
                  { label: 'Paani Kendra', val: '15+ Locations' },
                  { label: 'Season Coverage', val: 'March – July' },
                  { label: 'Species Protected', val: 'Multiple' },
                ],
                desc: 'Rajasthan ki tapti garmi mein parindeon ke liye paani ke pot. Ek chhota kadam, ek bada badlaav.',
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: p.color }} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${p.color}15` }}>
                      {p.icon}
                    </div>
                    <h3 className="heading-card text-lg">{p.title}</h3>
                  </div>
                  <p className="text-muted text-sm mb-5">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="bg-off-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-0.5">{m.label}</div>
                        <div className="font-bold text-seva-green-dark text-sm">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIARY STORIES */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Asli Awazein</p>
            <h2 className="heading-section">Jo Badlaav Aaya — Unki Zabaan Se</h2>
            <div className="gold-line" />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {stories.map((s) => (
              <div key={s.name} className={`card overflow-hidden`}>
                <div className={`bg-gradient-to-br ${s.bg} p-8 text-center`}>
                  <div className="text-6xl">{s.emoji}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="heading-card">{s.name}</h3>
                      <p className="text-xs text-gray-400">{s.age} · {s.location}</p>
                    </div>
                    <span className={`tag ${s.tagClass}`}>{s.program}</span>
                  </div>
                  <p className="text-body text-sm italic leading-relaxed">{s.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANNUAL REPORTS */}
      <section className="py-16 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="heading-section">Annual Impact Reports</h2>
            <p className="text-muted mt-2">CA-audited reports. Download karein ya online dekhein.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {['2024–25', '2023–24', '2022–23'].map((y) => (
              <div key={y} className="bg-white rounded-xl shadow-card p-6 text-center">
                <div className="text-4xl mb-3">📊</div>
                <div className="font-bold text-seva-green-dark">{y}</div>
                <p className="text-muted text-xs mt-1 mb-4">Annual Impact Report</p>
                <button className="btn-secondary text-xs px-4 py-2 w-full justify-center">
                  PDF Download
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/transparency" className="text-saffron font-semibold text-sm hover:underline">
              Sabhi Financial Documents Dekhein →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
