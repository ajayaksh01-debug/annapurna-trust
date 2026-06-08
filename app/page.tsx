import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shrimati Annapurna Devi Charitable Trust | NGO in Salasar, Rajasthan',
  description:
    'Seva Hi Pooja Hai — Ann Daan, Gau Seva, Mahila Sashaktikaran aur Pakshi Sanrakshan ke liye samarpit sanstha. Salasar, Rajasthan. 80G Approved.',
};

const stats = [
  { number: '500+', label: 'Ann Daan Labhaarthi', icon: '🍱', desc: 'Logon ko bhojan mila' },
  { number: '200+', label: 'Gau Mata Seva', icon: '🐄', desc: 'Gayon ko sahara' },
  { number: '150+', label: 'Mahilayein Sashakt', icon: '👩', desc: 'Mahilaon ko naya honsla' },
  { number: '1,000+', label: 'Pakshi Sanrakshit', icon: '🕊', desc: 'Parindein pyaas se bache' },
];

const programs = [
  {
    id: 'ann-daan',
    icon: '🍱',
    color: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    title: 'Ann Daan',
    subtitle: 'Bhooke Pet — Hamari Zimmedari',
    desc: 'Rajasthan ki tapti dhoop mein, jab temperature 45 degree cross karta hai, tab bhi hamare volunteers niklete hain — garam khana lekar, pyaas bujhane ke liye. 500 se zyada logon tak pahunch chuke hain.',
    impact: '₹500 mein ek parivaar ka din ka bhojan',
    href: '/programs#ann-daan',
  },
  {
    id: 'gau-seva',
    icon: '🐄',
    color: 'bg-green-50',
    iconBg: 'bg-green-100',
    title: 'Gau Seva',
    subtitle: 'Gau Mata Ki Sewa — Hamara Dharm',
    desc: 'Salasar Dham ki pavitra dharti par, jo Gau Matayein sadkon par bhatakti hain, unhe niyamit chaara, paani aur medical sahayata dena hamari zimmedari hai.',
    impact: '₹1,000 mein ek gaay ka ek maheene ka chaara',
    href: '/programs#gau-seva',
  },
  {
    id: 'mahila',
    icon: '👩',
    color: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    title: 'Mahila Sashaktikaran',
    subtitle: 'Ek Aurat Badhe, Poora Ghar Badhe',
    desc: 'Skill training, awareness workshops aur sahayata ke zariye, hum Rajasthan ki mahilaon ko aatmnirbhar banana chahte hain. Kyunki jab ek maa aage badhti hai, poora parivaar badh jaata hai.',
    impact: '₹2,500 mein 5 mahilaon ki skill workshop',
    href: '/programs#mahila',
  },
  {
    id: 'pakshi',
    icon: '🕊',
    color: 'bg-sky-50',
    iconBg: 'bg-sky-100',
    title: 'Pakshi Sanrakshan',
    subtitle: 'Rajasthan Ki Garmi Mein Koi Parinda Pyaasa Na Rahe',
    desc: 'Maarchs se July tak, jab garmi apne charam par hoti hai, hamare seva kendron par paani ke pot aur daane rakhwaate hain. Choti si koshish, badi seva.',
    impact: '₹500 mein ek maheeney ka pakshi jal seva',
    href: '/programs#pakshi',
  },
];

const donationTiers = [
  { amount: '₹500', impact: 'Ek parivaar ka din ka bhojan', icon: '🍱' },
  { amount: '₹1,000', impact: 'Gau Mata ka ek maheene ka chaara', icon: '🐄' },
  { amount: '₹2,500', impact: '5 mahilaon ki skill workshop', icon: '👩' },
  { amount: '₹5,000', impact: 'Ek month ka pakshi jal seva kendra', icon: '🕊' },
];

const events = [
  {
    date: '15',
    month: 'May 2026',
    title: 'Ann Daan Abhiyan — Salasar',
    desc: '200 se zyada zaruratmand parivaaron ko garam bhojan diya gaya. Bujurg nagrikono ke ghar tak khana pahunchaya.',
    tag: 'Ann Daan',
    tagClass: 'tag-saffron',
  },
  {
    date: '10',
    month: 'Apr 2026',
    title: 'Gau Seva Ratha — Garmiyon mein',
    desc: 'Bheeshan garmi mein 50 se zyada Gau Mataon ko chaara, paani aur first aid diya gaya. Salasar ke aas-paas ke kshetra mein.',
    tag: 'Gau Seva',
    tagClass: '',
  },
  {
    date: '28',
    month: 'Mar 2026',
    title: 'Pakshi Jal Seva Sthapna',
    desc: 'Salasar aur aas-paas ke 15 kshetron mein paani ke pot aur anna sthaapit kiye gaye. 1,000+ parindein labhaanvit hue.',
    tag: 'Pakshi Seva',
    tagClass: 'tag-gold',
  },
];

const trustSignals = [
  { icon: '🏛️', label: 'Trust Registered', sub: 'Rajasthan Registered' },
  { icon: '✅', label: '80G Approved', sub: 'Tax Deduction Available' },
  { icon: '📋', label: '12A Certified', sub: 'Tax Exempt Status' },
  { icon: '🇮🇳', label: 'DARPAN Registered', sub: 'NGO Darpan Portal' },
  { icon: '💰', label: 'CSR-1 Filed', sub: 'Corporate Donations' },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 50%, #8B4A0A 100%)',
          }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="text-gold text-base">🙏</span>
              <span className="text-white/90 text-sm font-medium">
                Salasar, Rajasthan · Seva Hi Pooja Hai
              </span>
            </div>

            {/* Main heading */}
            <h1 className="heading-display text-white mb-6">
              Salasar ki Dharti par,{' '}
              <span className="text-saffron-light">Seva ki</span>{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #E5B84C, #F09B4A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Raah par
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl">
              Ek maa ki pavitra yaad aur unke seva-sanskaron se prerit hokar, yeh trust
              Rajasthan ke zaruratmand logon, Gau Mataon, mahilaon aur parindoon ki seva
              mein samarpit hai.
            </p>
            <div className="quote-block border-saffron mb-10" style={{ borderLeftColor: '#E5B84C' }}>
              <span className="text-white/75 italic">
                "Jab ek parivaar ne ek maa ki yaad ko seva mein badla — tab is trust ka janam
                hua."
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="btn-primary text-base px-8 py-4">
                🙏 Abhi Daan Karen
              </Link>
              <Link href="/about" className="btn-outline-white text-base px-8 py-4">
                Hamare Baare Mein Janein →
              </Link>
            </div>

            {/* Quick trust line */}
            <div className="flex flex-wrap gap-4 mt-10">
              {['80G Approved', '12A Certified', 'DARPAN Registered', 'CSR-1 Filed'].map(
                (t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 text-white/70 text-sm"
                  >
                    <svg className="w-4 h-4 text-gold-light" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── TRUST SIGNALS BAR ── */}
      <section className="bg-white border-b border-[#E5E0D8] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {trustSignals.map((t) => (
              <div key={t.label} className="trust-badge">
                <span className="text-base">{t.icon}</span>
                <div>
                  <div className="text-xs font-bold text-seva-green-dark">{t.label}</div>
                  <div className="text-[0.6875rem] text-seva-green/70">{t.sub}</div>
                </div>
              </div>
            ))}
            <Link
              href="/transparency"
              className="text-saffron text-xs font-semibold hover:underline"
            >
              Sabhi documents dekhen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-seva-green py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label text-saffron-light">Hamara Prabhav</p>
            <h2 className="heading-section text-white">
              Sirf Sankhyayein Nahi — Zindagiyan Hain Yeh
            </h2>
            <p className="text-white/70 mt-3 text-base max-w-xl mx-auto">
              Har ek ank ke peeche ek real insaan hai, ek real kahani hai, ek real badlaav hai.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-white/10 rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-8 text-center bg-white/5 hover:bg-white/10 transition-colors ${
                  i !== stats.length - 1 ? 'md:border-r border-white/10' : ''
                }`}
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="stat-number text-white">{s.number}</div>
                <div className="text-white/90 font-semibold text-sm mt-1">{s.label}</div>
                <div className="text-white/55 text-xs mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/impact" className="btn-outline-white text-sm px-6 py-2.5">
              Poora Prabhav Dekhein →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="section-label">Hamari Kahani</p>
              <h2 className="heading-section mb-2">
                Ek Maa Ki Yaad,<br />
                <span className="text-saffron">Ek Sankalp Ki Neev</span>
              </h2>
              <div className="gold-line-left" />
              <p className="text-body mb-5">
                Swargiya Shrimati Annapurna Devi Ji ne apni poori zindagi doosron ki seva mein
                guzaari. Gaon ka koi bhooka ho, koi bemaari se pareshaan ho, koi gau mata
                sadak par bhatakti ho — ve hamesha wahan pahunch jaati thin.
              </p>
              <p className="text-body mb-8">
                Unke jaane ke baad, unke parivaar ne socha — ek yaadgaar banane se zyada, unka
                kaam aage badhana hoga. Isi soch se, Salasar, Rajasthan ki dharti par, is trust
                ka janam hua.{' '}
                <strong className="text-seva-green-dark">
                  Aaj hum unhi ke naam par, unhi ki raah par chal rahe hain.
                </strong>
              </p>
              <div className="quote-block mb-8">
                "Seva mein koi bada ya chhota nahi hota. Jo dard door kare, wohi seva hai."
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary text-sm">
                  Poori Kahani Padhein →
                </Link>
                <Link href="/volunteer" className="text-seva-green font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Seva Mein Juden <span>→</span>
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C5E6D3 0%, #1B5E3B 50%, #E07B2A 100%)',
                  height: '420px',
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white/80 p-8 text-center">
                  <div className="text-6xl mb-4">🕉</div>
                  <p className="font-semibold text-lg">Sanstha Ka Photo</p>
                  <p className="text-sm text-white/60 mt-2">
                    [Real photo of seva activities — Salasar]
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-xl border border-[#E5E0D8]">
                <div className="text-2xl font-black text-seva-green">2020</div>
                <div className="text-xs text-gray-500 font-medium">Se Seva Mein</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-saffron text-white rounded-xl p-3 shadow-lg">
                <div className="text-sm font-bold">Salasar Dham</div>
                <div className="text-xs text-white/80">Rajasthan 🙏</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-20 md:py-28 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label">Hamare Karyakram</p>
            <h2 className="heading-section">
              Char Raahein Seva Ki
            </h2>
            <div className="gold-line" />
            <p className="text-muted max-w-xl mx-auto">
              Har program ek zaruratmand ki awaz hai — hum use sunते hain, aur kaam karte hain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div key={p.id} className="card group">
                <div className={`${p.color} p-6 pb-4`}>
                  <div
                    className={`${p.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm`}
                  >
                    {p.icon}
                  </div>
                  <h3 className="heading-card">{p.title}</h3>
                  <p className="text-saffron text-xs font-semibold mt-0.5">{p.subtitle}</p>
                </div>
                <div className="p-6 pt-4">
                  <p className="text-muted text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="bg-seva-green-50 rounded-lg p-3 mb-4">
                    <p className="text-seva-green-dark text-xs font-semibold">{p.impact}</p>
                  </div>
                  <Link
                    href={p.href}
                    className="text-saffron font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Aur jaanein <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs" className="btn-secondary">
              Sabhi Programs Dekhein →
            </Link>
          </div>
        </div>
      </section>

      {/* ── DONATION IMPACT TIERS ── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Daan Karen</p>
              <h2 className="heading-section mb-2">
                Aapka Daan —{' '}
                <span className="text-saffron">Kisi Ki Zindagi</span>
              </h2>
              <div className="gold-line-left" />
              <p className="text-body mb-4">
                Hum jaante hain ki aapka paisa mehnat se kamaya hua hai. Isliye hum yeh
                zaroor bataate hain ki aapka ek-ek rupaya kahan jaata hai.
              </p>
              <p className="text-body mb-8">
                80G ke antargat, aapka daan tax-exempt hota hai. Daan karne ke 3 din mein
                aapko receipt milegi.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['80G Tax Benefit', '3-Din Mein Receipt', 'Transparent Use'].map((b) => (
                  <div key={b} className="trust-badge text-xs">
                    <svg className="w-3.5 h-3.5 text-seva-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </div>
                ))}
              </div>
              <Link href="/donate" className="btn-primary">
                🙏 Abhi Daan Karen
              </Link>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {donationTiers.map((d) => (
                  <div
                    key={d.amount}
                    className="donation-card hover:border-seva-green hover:bg-seva-green-50"
                  >
                    <div className="text-3xl mb-2">{d.icon}</div>
                    <div className="donation-amount">{d.amount}</div>
                    <div className="donation-impact">{d.impact}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-seva-green rounded-xl text-center">
                <p className="text-white text-sm font-medium">
                  Ya apni marzi se koi bhi rashi daan karein
                </p>
                <Link href="/donate" className="mt-2 btn-white text-sm px-5 py-2 inline-flex">
                  Custom Amount →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ── */}
      <section className="py-20 md:py-24 bg-seva-green-dark text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            {/* Founder photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #2D7A52 0%, #E07B2A 100%)',
                  }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/70 text-sm text-center p-6">
                    <div className="text-5xl mb-2">👩</div>
                    <p className="text-xs">Sunita Swami Ji ka photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  Sansthaapaak
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <p className="section-label text-saffron-light">Sansthaapaak Ka Sandesh</p>
              <h2 className="heading-section text-white mb-6">
                Sunita Swami —{' '}
                <span className="text-gold-light">Seva Ki Raahgeer</span>
              </h2>
              <div className="quote-block text-white/75 mb-6" style={{ borderLeftColor: '#C9962A' }}>
                "Annapurna Devi Ji ne mujhe yeh sikhaya ki seva karne ke liye koi badi jagah
                ya badi rashi ki zaroorat nahi hoti. Ek pyaali paani bhi seva hai, ek muskaan
                bhi madad hai. Hum usi soch ke saath aaj bhi kaam karte hain."
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Sunita Swami ek samarpит social worker hain jo Salasar, Rajasthan se seva ka
                kaam chalati hain. National level archery athlete rahi hain — unhe pata hai ki
                nishana lene ke liye dhairya aur sankalp chahiye. Usi sankalp ke saath ve is
                trust ko aage le ja rahi hain.
              </p>
              <Link href="/about#founder" className="btn-outline-white text-sm px-6 py-2.5">
                Poora Parichay Padhein →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIARY STORY ── */}
      <section className="py-20 md:py-28 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Asli Kahaniyan</p>
            <h2 className="heading-section">Jinki Zindagi Badli — Unki Awaz</h2>
            <div className="gold-line" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Photo */}
                <div
                  className="md:col-span-2 min-h-56"
                  style={{
                    background: 'linear-gradient(135deg, #C5E6D3, #9DD1B4)',
                  }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-seva-green/70">
                    <div className="text-5xl">👵</div>
                    <p className="text-xs mt-2 text-center font-medium">
                      Labhaarthi ka photo<br />[Rajasthan]
                    </p>
                  </div>
                </div>
                {/* Story */}
                <div className="md:col-span-3 p-8">
                  <div className="tag tag-saffron mb-3">Ann Daan</div>
                  <h3 className="text-xl font-bold text-seva-green-dark mb-1">Ramkali Devi</h3>
                  <p className="text-saffron text-xs font-semibold mb-4">
                    Bujurg mahila, Salasar, Rajasthan
                  </p>
                  <p className="text-body text-sm mb-4">
                    "Main akeli rehti hoon. Bete bahut door hain. Ek din is trust ke volunteers
                    ghar aaye — garam khana lekar. Maine poochha kyun aaye ho? Unhone kaha —
                    'Maa Ji, yahi seva hai.' Tab se har maheeney aate hain. Ab mujhe akela
                    nahi lagta."
                  </p>
                  <div className="text-xs text-gray-400 italic">
                    — Ramkali Devi, Ann Daan labhaarthi, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/impact" className="btn-secondary">
              Aur Kahaniyan Padhein →
            </Link>
          </div>
        </div>
      </section>

      {/* ── LATEST EVENTS ── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label">Hamare Karyakram</p>
              <h2 className="heading-section">Haal Ki Seva Gatividhiyan</h2>
            </div>
            <Link href="/events" className="text-saffron font-semibold text-sm hover:underline">
              Sabhi Events Dekhen →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e.title} className="card">
                {/* Color bar */}
                <div className="h-1.5 bg-gradient-to-r from-seva-green to-saffron" />
                <div className="p-6">
                  {/* Date + tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-center bg-seva-green-50 rounded-xl p-3 min-w-[4rem]">
                      <div className="text-2xl font-black text-seva-green">{e.date}</div>
                      <div className="text-seva-green/70 text-[0.625rem] font-semibold uppercase">
                        {e.month}
                      </div>
                    </div>
                    <span className={`tag ${e.tagClass}`}>{e.tag}</span>
                  </div>
                  <h3 className="heading-card mb-2">{e.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{e.desc}</p>
                  <Link
                    href="/events"
                    className="text-saffron font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Poora padhen <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label">Hamari Tasveeren</p>
            <h2 className="heading-section">Seva Ki Jhalkiyan</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { emoji: '🍱', label: 'Ann Daan Abhiyan', sub: 'Salasar, May 2026', bg: 'from-amber-100 to-amber-200' },
              { emoji: '🐄', label: 'Gau Seva Ratha', sub: 'Garmiyon mein, Apr 2026', bg: 'from-green-100 to-green-200' },
              { emoji: '👩', label: 'Mahila Workshop', sub: 'Skill Training, Mar 2026', bg: 'from-purple-100 to-purple-200' },
              { emoji: '🕊', label: 'Pakshi Jal Seva', sub: 'Salasar, Mar 2026', bg: 'from-sky-100 to-sky-200' },
              { emoji: '🤲', label: 'Community Seva', sub: 'Samajik Karyakram', bg: 'from-rose-100 to-rose-200' },
              { emoji: '🌾', label: 'Ration Vitran', sub: 'Zaruratmand Parivar', bg: 'from-yellow-100 to-yellow-200' },
            ].map((img) => (
              <div
                key={img.label}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${img.bg}`}
                style={{ height: '200px' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">{img.emoji}</div>
                  <p className="text-seva-green-dark text-xs font-semibold">[Photo: {img.label}]</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-seva-green-dark/0 group-hover:bg-seva-green-dark/60 transition-all flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="text-white font-bold text-sm">{img.label}</p>
                    <p className="text-white/70 text-xs">{img.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="btn-secondary">
              Poori Gallery Dekhein →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER CTA ── */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="section-label">Volunteer Banen</p>
                <h2 className="heading-section mb-4">
                  Sirf Paise Nahi —{' '}
                  <span className="text-saffron">Apna Waqt Bhi Daan Karen</span>
                </h2>
                <p className="text-body mb-6">
                  Volunteer hona kisi bhi daan se bada hai. Aap field mein kaam kar sakte hain,
                  ya ghar se digital seva kar sakte hain. Aapka ek ghanta kisi ki zindagi
                  badal sakta hai.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: '🌾', role: 'Field Volunteer', desc: 'Ann Daan, Events' },
                    { icon: '💻', role: 'Digital Volunteer', desc: 'Social Media, Content' },
                    { icon: '⚖️', role: 'Professional', desc: 'CA, Lawyer, Doctor' },
                    { icon: '🎓', role: 'Student', desc: 'NSS, NCC, College' },
                  ].map((r) => (
                    <div key={r.role} className="flex gap-2.5 items-start">
                      <span className="text-xl">{r.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-seva-green-dark">{r.role}</div>
                        <div className="text-xs text-gray-500">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/volunteer" className="btn-primary">
                  Volunteer Ke Liye Apply Karen →
                </Link>
              </div>
              <div className="text-center">
                <div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #E8F5EE, #C5E6D3)',
                    height: '280px',
                  }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-seva-green/70">
                    <div className="text-6xl mb-3">🤲</div>
                    <p className="font-semibold text-lg text-seva-green-dark">Volunteer Photo</p>
                    <p className="text-sm text-seva-green/60 mt-1">[Seva ke paas ki tasveer]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL DONATION CTA ── */}
      <section className="bg-green-section text-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="text-5xl mb-6">🙏</div>
          <h2 className="heading-section text-white mb-4">
            Aaj Hi Seva Mein Hissa Lein
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Aapka chota sa daan kisi zaruratmand ke liye bahut bada hota hai. ₹500 se shuru
            kijiye. 80G tax benefit ke saath.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/donate" className="btn-white text-base px-10 py-4">
              🙏 Abhi Daan Karen
            </Link>
            <Link href="/contact" className="btn-outline-white text-base px-8 py-4">
              Hamse Baat Karen
            </Link>
          </div>
          <p className="text-white/50 text-sm">
            ✓ 80G Approved · ✓ 12A Certified · ✓ Har rupaya kaam aata hai
          </p>
        </div>
      </section>
    </div>
  );
}
