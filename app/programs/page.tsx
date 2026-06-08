import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hamare Programs — Ann Daan, Gau Seva, Mahila, Pakshi',
  description:
    'Shrimati Annapurna Devi Trust ke char programs: Ann Daan, Gau Seva, Mahila Sashaktikaran, aur Pakshi Sanrakshan. Salasar, Rajasthan.',
};

const programs = [
  {
    id: 'ann-daan',
    icon: '🍱',
    color: '#FEF3E8',
    accentColor: '#E07B2A',
    title: 'Ann Daan',
    tagline: 'Bhooke Pet — Hamari Zimmedari',
    quote: '"Jab koi bhooka ho aur hum kuch kar sakte hain — tab na karna paap hai."',
    description: [
      'Rajasthan ki tapti garmi mein, jab paarada 45 degree cross karta hai, tab bhi hamare seva volunteers gharon se nikalte hain — haath mein garam bhojan lekar, dil mein seva ki bhavna lekar.',
      'Hamara Ann Daan program sirf bhojan dene tak seemit nahi hai. Yeh ek rishta hai. Hum zaruratmand parivaaron ko jaante hain, unke bachchon ko pahchante hain, aur har maheeney unke saath rehte hain.',
      'Bujurg jo akele rehte hain, wo parivar jo ek waqt ki roti ke liye sangharsh karte hain, wo bacche jo school jaane se pehle kuch nahi khaate — yeh sab hamare Ann Daan ke labhaarthi hain.',
    ],
    objectives: [
      'Zaruratmand parivaaron ko niyamit garam bhojan pahunchana',
      'Bujurg nagrikono ke ghar tak ration delivery',
      'Special events par mass bhandara ka aayojan',
      'Festival seasons mein bhojan vitaran drive',
      'Medical zaroorat mein nutrition support',
    ],
    impact: {
      number: '500+',
      label: 'Logon ko bhojan mila',
      sub: 'Aur yeh sankhya badhti ja rahi hai',
    },
    donateImpact: [
      { amount: '₹500', impact: 'Ek parivaar ka ek din ka bhojan' },
      { amount: '₹2,000', impact: 'Ek akele bujurg ko ek maheene ki madad' },
      { amount: '₹5,000', impact: 'Ek full bhandara event ka kharcha' },
    ],
    bg: 'from-amber-50 to-orange-50',
  },
  {
    id: 'gau-seva',
    icon: '🐄',
    color: '#E8F5EE',
    accentColor: '#1B5E3B',
    title: 'Gau Seva',
    tagline: 'Gau Mata Ki Seva — Hamara Dharm',
    quote: '"Gau Mata ki puja ghar mein karte hain — per unka dard sadak par koi nahi dekhta. Hum dekhte hain."',
    description: [
      'Salasar Dham — ek pavitra kshetra jahan lakhs bhakt Balaji Maharaj ke darshan ko aate hain. Lekin is pavitra dharti par bhi, kai Gau Matayein sadkon par bhatakti hain — bhooki, pyaasi, bemaari se takraati.',
      'Hamari Gau Seva team har din, khaaskar garmiyon mein, in Gau Mataon ke paas pahuchti hai. Chaara, saaf paani, aur zaroorat padne par pashuchikitsa sahayata.',
      'Yeh sirf seva nahi — yeh shraddha hai. Kyunki jinhe hum Gau Mata kahte hain, unhe sirf pooja mein nahi, zindagi mein bhi izzat milni chahiye.',
    ],
    objectives: [
      '200+ Gau Mataon ko niyamit chaara aur paani',
      'Garmiyon mein emergency cattle rescue',
      'Pashu chikitsa seva aur ilaaj',
      'Local cowshed / gaushala se sampark aur samanjasya',
      'Wounded animals ke liye first aid aur rehabilitation',
    ],
    impact: {
      number: '200+',
      label: 'Gau Mataon ko sahara',
      sub: 'Salasar aur aas-paas ke kshetra mein',
    },
    donateImpact: [
      { amount: '₹500', impact: 'Ek gaay ka ek hafte ka chaara aur paani' },
      { amount: '₹1,000', impact: 'Ek Gau Mata ka ek maheene ka poshan' },
      { amount: '₹3,000', impact: 'Ek Gau Mata ka teeke ka kharcha' },
    ],
    bg: 'from-green-50 to-emerald-50',
  },
  {
    id: 'mahila',
    icon: '👩',
    color: '#F5F0FF',
    accentColor: '#7C3AED',
    title: 'Mahila Sashaktikaran',
    tagline: 'Ek Aurat Aage Badhe, Poora Ghar Aage Badhega',
    quote: '"Jab ek maa apni taaqat samajhti hai, tab poora ghar ki disha badal jaati hai."',
    description: [
      'Rajasthan ki mahilayon ke baare mein duniya bahut kuch maanti hai — lekin hum jaante hain ki in mahilaon mein kitni shakti hai. Bas thoda sa hath chahiye. Ek skill chahiye. Ek mauka chahiye.',
      'Hamara Mahila Sashaktikaran program sirf training nahi hai. Yeh ek community hai. Jahan mahilayein ek doosre se seekhti hain, ek doosre ko support karti hain, aur mil kar aage badhti hain.',
      'Silai se lekar digital skills tak, beauty therapy se lekar small business management tak — hum woh skills dete hain jo market mein kaam aaye, ghar mein rozgar laye.',
    ],
    objectives: [
      'Vocational training: silai, embroidery, beauty therapy',
      'Financial literacy aur small business workshops',
      'Digital skills — mobile banking, online business',
      'Health aur hygiene awareness programs',
      'Legal rights aur government schemes ki jaankari',
      'Mahila community group build karna',
    ],
    impact: {
      number: '150+',
      label: 'Mahilayein sashakt',
      sub: 'Aur roz badhti ja rahi hai yeh sankhya',
    },
    donateImpact: [
      { amount: '₹1,000', impact: 'Ek mahila ki ek skill workshop' },
      { amount: '₹2,500', impact: '5 mahilaon ki group training' },
      { amount: '₹10,000', impact: 'Ek poora month ka program sponsor' },
    ],
    bg: 'from-purple-50 to-violet-50',
  },
  {
    id: 'pakshi',
    icon: '🕊',
    color: '#E0F7FF',
    accentColor: '#0369A1',
    title: 'Pakshi Sanrakshan',
    tagline: 'Rajasthan Ki Garmi Mein Koi Parinda Pyaasa Na Rahe',
    quote: '"Jo prani awaaz nahi kar sakta, uski seva karna sabse badi pooja hai."'  ,
    description: [
      'Rajasthan ki garmi duniya bhahar mein mashhoor hai. Temperature 48 degree tak pahunchta hai. Iss garmi mein insaan AC dhundta hai — lekin parindey? Unke liye sirf hamare pyaale hain.',
      'March se July tak, jab garmi apne charam par hoti hai, hamare volunteers Salasar aur aas-paas ke 15+ kshetron mein paani ke pot aur anna (dana) sthapit karte hain.',
      'Yeh kaam chhota lagta hai — lekin ek parinde ke liye, ek dabb paani poori zindagi bacha sakta hai. 1,000 se zyada parindein har saal labhaanvit hote hain.',
    ],
    objectives: [
      'Garmi ke season mein 15+ kshetron mein paani ke pot',
      'Anna (dana) ke sthaapit kendra',
      'Injured birds ke liye rescue aur care',
      'Seasonal drives — Makar Sankranti, Holi, Baisakhi',
      'Community awareness — paadosiyon ko participate karna',
    ],
    impact: {
      number: '1,000+',
      label: 'Pakshi sanrakshit',
      sub: 'Har garmi ke season mein',
    },
    donateImpact: [
      { amount: '₹200', impact: 'Ek location par ek season ke paani ke pot' },
      { amount: '₹500', impact: 'Ek maheeney ka ek kendra maintain karna' },
      { amount: '₹2,000', impact: 'Ek poore area ka season coverage' },
    ],
    bg: 'from-sky-50 to-cyan-50',
  },
];

export default function ProgramsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 60%, #E07B2A 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Seva Ki Char Raahein</p>
          <h1 className="heading-display text-white mb-4">Hamare Karyakram</h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Har program ek zaruratmand ki awaz hai. Hum use sunते hain aur zameen par utarkar
            kaam karte hain — bina kisi swaartham ke.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-8">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                <span>{p.icon}</span> {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      {programs.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-off-white' : 'bg-cream-section'}`}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-14 items-start ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md"
                    style={{ background: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h2 className="heading-section" style={{ color: p.accentColor }}>
                      {p.title}
                    </h2>
                    <p className="text-saffron text-sm font-semibold">{p.tagline}</p>
                  </div>
                </div>
                <div className="gold-line-left" />
                <div className="quote-block mb-6 text-sm">{p.quote}</div>
                {p.description.map((d, di) => (
                  <p key={di} className="text-body mb-4">{d}</p>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-6">
                {/* Photo */}
                <div
                  className={`rounded-2xl overflow-hidden bg-gradient-to-br ${p.bg} shadow-lg`}
                  style={{ height: '220px' }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 opacity-60">
                    <div className="text-6xl">{p.icon}</div>
                    <p className="text-sm mt-2 font-medium">[Program Photo — {p.title}]</p>
                  </div>
                </div>

                {/* Objectives */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="heading-card mb-4 flex items-center gap-2">
                    <span className="text-saffron">◆</span> Kya Karte Hain Hum
                  </h3>
                  <ul className="space-y-2.5">
                    {p.objectives.map((o) => (
                      <li key={o} className="flex gap-2.5 text-sm text-body">
                        <svg className="w-4 h-4 text-seva-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-seva-green rounded-2xl p-6 text-white text-center">
                  <div className="stat-number text-white">{p.impact.number}</div>
                  <div className="font-bold mt-1">{p.impact.label}</div>
                  <div className="text-white/60 text-sm mt-0.5">{p.impact.sub}</div>
                </div>

                {/* Donation tiers */}
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="heading-card mb-4">Daan Ka Asar</h3>
                  <div className="space-y-3">
                    {p.donateImpact.map((d) => (
                      <div
                        key={d.amount}
                        className="flex items-center gap-3 p-3 rounded-lg bg-seva-green-50 border border-seva-green-100"
                      >
                        <span className="text-seva-green font-black text-lg min-w-[5rem]">{d.amount}</span>
                        <span className="text-body text-sm">{d.impact}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/donate" className="btn-primary w-full justify-center mt-5 text-sm">
                    Is Program Ke Liye Daan Karen →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-green-section text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="heading-section text-white mb-4">
            Kisi Ek Program Ka Hissa Banen
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
            Daan se, volunteer se, ya sirf ek share se — aap badlaav la sakte hain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="btn-white">🙏 Abhi Daan Karen</Link>
            <Link href="/volunteer" className="btn-outline-white">Volunteer Banen →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
