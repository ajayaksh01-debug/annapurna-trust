import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hamare Baare Mein — Trust Ki Kahani',
  description:
    'Swargiya Shrimati Annapurna Devi Ji ki yaad mein sthaapit yeh trust Salasar, Rajasthan se ann daan, gau seva aur mahila sashaktikaran ka kaam karta hai.',
};

const values = [
  { icon: '🤲', title: 'Nishwarth Seva', desc: 'Bina kisi swaartham ke, sirf dil se seva karna — yahi hamara aadhar hai.' },
  { icon: '🙏', title: 'Shraddha', desc: 'Har insaan mein, har prani mein Ishwar ka vaas maankar seva karna.' },
  { icon: '🔍', title: 'Paaraddarshita', desc: 'Har rupaye ka hisaab. Koi chhupa nahi, koi ankaahi nahi.' },
  { icon: '🌱', title: 'Samaveshi', desc: 'Jaat, dharm, chhote-bade ka koi bhed nahi — seva sabke liye hai.' },
  { icon: '💪', title: 'Zimmedari', desc: 'Jo kahen wohi karein. Vaade nibhana hamari pahchan hai.' },
  { icon: '❤️', title: 'Karuna', desc: 'Doosre ke dard ko apna dard maankar kaam karna — yahi hamari taaqat hai.' },
];

const timeline = [
  {
    year: '2020',
    title: 'Trust ki Sthapna',
    desc: 'Swargiya Shrimati Annapurna Devi Ji ki pavitra smriti mein, Salasar, Rajasthan mein trust ka formal registration hua.',
  },
  {
    year: '2021',
    title: 'Pehla Ann Daan Abhiyan',
    desc: 'COVID ke kathin samay mein, 100+ zaruratmand parivaaron ko ghar-ghar bhojan pahunchaya gaya. Yahi se hamara mission shuru hua.',
  },
  {
    year: '2022',
    title: 'Gau Seva Shuru',
    desc: 'Salasar ke aas-paas ki awara Gau Mataon ke liye niyamit chaara, paani aur medical seva program shuru hua.',
  },
  {
    year: '2023',
    title: 'Mahila Sashaktikaran Program',
    desc: '50+ mahilaon ko skill training di gayi. Silai, beauty therapy aur small business workshops. Pehla batch.',
  },
  {
    year: '2024',
    title: 'Pakshi Sanrakshan Mission',
    desc: 'Garmiyon mein Rajasthan ke 15 kshetron mein paani ke pot aur anna sthaapit kiye. 1,000+ parindein labhaanvit.',
  },
  {
    year: '2025–26',
    title: 'Vistar aur Mazbuti',
    desc: 'DARPAN registration, 80G aur 12A certificates. CSR partnerships ki shuruat. Digital presence build-up.',
  },
];

const trustees = [
  {
    name: 'Sunita Swami',
    role: 'Sansthaapaak & Trustee',
    bio: 'National level archery athlete, social worker, aur motivational speaker. Seva unka pehla dharma hai.',
    emoji: '👩',
  },
  {
    name: 'Trustee 2 ka Naam',
    role: 'Trustee',
    bio: 'Trust ke governance aur accounts mein yogdan dete hain. Community ke saath gehri jad.',
    emoji: '👨',
  },
  {
    name: 'Trustee 3 ka Naam',
    role: 'Trustee',
    bio: 'Mahila sashaktikaran programs ki disha mein maargdarshan karte hain.',
    emoji: '👩',
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 70%, #B85E18 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Hamara Parichay</p>
          <h1 className="heading-display text-white mb-4">
            Ek Maa Ki Yaad —<br />
            <span className="text-gold-light">Ek Sankalp Ki Neev</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Swargiya Shrimati Annapurna Devi Ji ne apni poori zindagi seva mein di. Hum unki
            virasat ko aage le ja rahe hain — Salasar, Rajasthan ki dharti se.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-off-white"
          style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* ANNAPURNA DEVI JI KI KAHANI */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label">Woh Maa Jisne Sikhaya</p>
              <h2 className="heading-section mb-2">
                Swargiya Shrimati<br />
                <span className="text-saffron">Annapurna Devi Ji</span>
              </h2>
              <div className="gold-line-left" />
              <p className="text-body mb-5">
                Unka naam hi unka parichay tha — Annapurna. Ann ki devi. Jis ghar bhi jaate,
                koi bhooka nahi jaata tha. Gaon mein koi bemaari se pareshaan ho, koi madhyaah
                mein bhooka soye — ve hamesha wahan pahuch jaati thin.
              </p>
              <p className="text-body mb-5">
                Ve sirf apne parivaar ki maa nahi thi — ve us poore mohalle ki, us gaon ki,
                un sabki maa thi jo unhein zarooratmand lagte the. Unka seva-bhaav kisi dharm
                ya sampraday ka mohtaj nahi tha. Manav seva hi unka dharm tha.
              </p>
              <div className="quote-block mb-8">
                "Ek bhi insaan bhooka na rahe, ek bhi prani pyaasa na mare — yahi meri pooja hai."
                <br />
                <span className="text-sm font-semibold text-saffron mt-2 block">
                  — Swargiya Shrimati Annapurna Devi Ji
                </span>
              </div>
              <p className="text-body">
                Unke jaane ke baad, unka parivaar ek dard aur ek zimmedari dono lekar baith
                gaya. Dard tha unka bichadna. Zimmedari thi unka kaam aage badhana.{' '}
                <strong className="text-seva-green-dark">
                  Aur isi zimmedari se is trust ka janam hua.
                </strong>
              </p>
            </div>
            <div>
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ background: 'linear-gradient(135deg, #FDE0C0, #C9962A)', height: '380px' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white/80 text-center p-8">
                  <div className="text-7xl mb-4">🙏</div>
                  <p className="font-bold text-xl">Swargiya Annapurna Devi Ji</p>
                  <p className="text-sm text-white/60 mt-2">[Smriti Chitram — Yahan Rakhen]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Hamara Lakshya</p>
            <h2 className="heading-section">Mission aur Vision</h2>
            <div className="gold-line" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-seva-green">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-seva-green-50 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <p className="text-xs font-bold text-saffron uppercase tracking-widest">Hamara</p>
                  <h3 className="text-xl font-bold text-seva-green-dark">Mission</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: '🍱', text: 'Zaruratmand logon, bujurgon aur bachchon ko niyamit bhojan aur ration pahunchana.' },
                  { icon: '🐄', text: 'Gau Mata aur janwaron ko sahara dena — chaara, paani, aur medical seva.' },
                  { icon: '👩', text: 'Mahilaon ko skill training aur sahayata se aatmnirbhar banana.' },
                  { icon: '🕊', text: 'Pakshiyon aur paryavaran ki raksha karna — ek zimmedaar samaj ki tarah.' },
                ].map((m) => (
                  <li key={m.text} className="flex gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{m.icon}</span>
                    <p className="text-body text-sm">{m.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-seva-green-dark rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                  🌟
                </div>
                <div>
                  <p className="text-xs font-bold text-saffron-light uppercase tracking-widest">Hamara</p>
                  <h3 className="text-xl font-bold text-white">Vision</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Salasar Dham ki pavitra dharti se — jahan Balaji Maharaj ki seva hoti hai,
                jahan lakhs yatri shraddha se aate hain — hum chahte hain ki seva ki yeh
                bhavna ek poore kshetra ka charitra ban jaaye.
              </p>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                Ek Rajasthan jahan koi bhooka na soye. Koi maa laachaar na ho. Koi Gau Mata
                sadak par na bhatke. Koi parinda garmi mein pyaasa na mare.
              </p>
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <p className="text-gold-light font-bold text-lg italic">
                  "Seva Hi Pooja Hai"
                </p>
                <p className="text-white/50 text-sm mt-1">— Hamara Jeevan Mantra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Jo Hamein Chalata Hai</p>
            <h2 className="heading-section">Hamare Mool Siddhant</h2>
            <div className="gold-line" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 flex gap-4">
                <div className="w-12 h-12 bg-seva-green-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="heading-card mb-1">{v.title}</h3>
                  <p className="text-muted text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Hamara Safar</p>
            <h2 className="heading-section">Sthapna Se Aaj Tak</h2>
            <div className="gold-line" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-seva-green-100 space-y-10">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative">
                  <div className="timeline-dot absolute -left-[2.125rem]" />
                  <div className="bg-white rounded-xl p-6 shadow-card">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag">{t.year}</span>
                      <h3 className="heading-card">{t.title}</h3>
                    </div>
                    <p className="text-muted text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM & TRUSTEES */}
      <section id="founder" className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Jo Chalate Hain Yeh Sanstha</p>
            <h2 className="heading-section">Hamare Trustees</h2>
            <div className="gold-line" />
            <p className="text-muted max-w-lg mx-auto">
              Yeh sanstha sirf ek insaan ki nahi — ek poori team ki zimmedari par chalti hai.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustees.map((t) => (
              <div key={t.name} className="card text-center p-8">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-5xl border-4 border-seva-green-100 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #C5E6D3, #9DD1B4)' }}
                >
                  {t.emoji}
                </div>
                <h3 className="heading-card mb-0.5">{t.name}</h3>
                <p className="text-saffron text-xs font-bold uppercase tracking-wide mb-3">{t.role}</p>
                <p className="text-muted text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL REGISTRATION */}
      <section className="py-16 bg-seva-green-dark text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <p className="section-label text-saffron-light">Kanuni Maanyata</p>
            <h2 className="heading-section text-white">Trust Ki Kanooni Manyata</h2>
            <p className="text-white/65 mt-2 text-sm">
              Hum poori tarah se registered, compliant aur transparent hain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Trust Registration', val: 'Rajasthan Registered', doc: 'Registration Certificate Available' },
              { label: 'PAN Number', val: 'XXXXX1234X', doc: 'PAN Certificate Available' },
              { label: '80G Certificate', val: 'Approved', doc: 'Tax Exemption for Donors' },
              { label: '12A Certificate', val: 'Certified', doc: 'Income Tax Exempt Status' },
              { label: 'CSR-1 Filing', val: 'Filed with MCA', doc: 'Corporate Donations Eligible' },
              { label: 'DARPAN ID', val: 'RJ/2020/XXXXX', doc: 'NGO Darpan Portal' },
            ].map((d) => (
              <div key={d.label} className="bg-white/10 border border-white/15 rounded-xl p-5">
                <div className="text-gold-light font-bold text-sm mb-0.5">{d.label}</div>
                <div className="text-white font-black text-lg mb-1">{d.val}</div>
                <div className="text-white/55 text-xs">{d.doc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/transparency" className="btn-outline-white text-sm px-6 py-2.5">
              Sabhi Documents Dekhein →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
