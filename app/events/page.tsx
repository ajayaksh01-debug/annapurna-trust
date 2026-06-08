import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events — Hamare Karyakram',
  description: 'Shrimati Annapurna Devi Charitable Trust ke upcoming aur past events — ann daan, gau seva, mahila workshops aur pakshi sanrakshan karyakram.',
};

const upcoming = [
  {
    date: '15 Jul 2026', day: '15', month: 'Jul', title: 'Varshakal Ann Daan Abhiyan',
    time: '9:00 AM – 1:00 PM', location: 'Salasar, Churu',
    desc: 'Barsaat ke season mein zaruratmand parivaaron ko garam bhojan aur ration packets. 200+ parivaaron ka lakshya.',
    tag: 'Ann Daan', spots: '20+ volunteers needed',
  },
  {
    date: '22 Jul 2026', day: '22', month: 'Jul', title: 'Mahila Digital Literacy Workshop — Batch 4',
    time: '10:00 AM – 4:00 PM', location: 'Community Hall, Salasar',
    desc: 'Mobile banking, online shopping, WhatsApp Business — aur aur digital skills. 30 mahilaon ke liye workshop. Registration required.',
    tag: 'Mahila', spots: '30 seats available',
  },
  {
    date: '5 Aug 2026', day: '5', month: 'Aug', title: 'Independence Day Seva Celebration',
    time: '8:00 AM – 12:00 PM', location: 'Salasar Balaji Dham, Rajasthan',
    desc: 'Azadi Amrit Mahotsav ke uplakshya par ek bada seva karyakram — ann daan, gau seva, pakshi jal seva — ek saath.',
    tag: 'Special Event', spots: 'Open for all',
  },
];

const past = [
  {
    date: 'May 15, 2026', title: 'Ann Daan Abhiyan — May Edition',
    tag: 'Ann Daan', people: '200+ logon ko bhojan',
    desc: 'Garmiyon ki tapti dhoop mein, 200 se zyada zaruratmand parivaaron ko garam bhojan diya gaya. Bujurg nagrikono ke ghar tak delivery.',
    emoji: '🍱', bg: 'from-amber-50 to-orange-50',
  },
  {
    date: 'Apr 10, 2026', title: 'Gau Seva Ratha — Garmi Abhiyan',
    tag: 'Gau Seva', people: '50+ Gau Mataon ko sahara',
    desc: 'Garmiyon mein Salasar ke aas-paas ki Gau Mataon ke liye chaara, paani aur first aid drive.',
    emoji: '🐄', bg: 'from-green-50 to-emerald-50',
  },
  {
    date: 'Mar 28, 2026', title: 'Pakshi Jal Seva Sthapna',
    tag: 'Pakshi', people: '1,000+ parindein labhaanvit',
    desc: '15 kshetron mein paani ke pot aur dana sthaapit kiye. Community participation record par rahi is saal.',
    emoji: '🕊', bg: 'from-sky-50 to-cyan-50',
  },
  {
    date: 'Mar 8, 2026', title: 'Mahila Diwas — Skill Ceremony',
    tag: 'Mahila', people: '40 mahilaon ka samman',
    desc: 'International Mahila Diwas par, pichle batch ki 40 mahilaon ko certificate ceremony. Local media coverage.',
    emoji: '👩', bg: 'from-purple-50 to-violet-50',
  },
  {
    date: 'Jan 14, 2026', title: 'Makar Sankranti Pakshi Seva',
    tag: 'Pakshi', people: '500+ parindein',
    desc: 'Makar Sankranti ke pavitra avsar par parindeon ke liye paani aur til-chaaval ka prasad. Community drive.',
    emoji: '🕊', bg: 'from-sky-50 to-blue-50',
  },
  {
    date: 'Oct 2025', title: 'Navratri Ann Daan Mahotsav',
    tag: 'Ann Daan', people: '300+ logon ko bhojan',
    desc: 'Navratri ke navon din, din mein bhojan vitaran aur Kanya Pujan. Ek bada community event.',
    emoji: '🍱', bg: 'from-amber-50 to-yellow-50',
  },
];

export default function EventsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #1B5E3B 60%, #E07B2A 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Seva Ke Karyakram</p>
          <h1 className="heading-display text-white mb-4">Events & Karyakram</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Har maheene naye events. Aiye, volunteer karein, ya sirf dekh kar samjhein ki
            hum kya karte hain.
          </p>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1.5 bg-saffron rounded-full" />
            <div>
              <p className="section-label">Aane Wale Karyakram</p>
              <h2 className="heading-section">Upcoming Events</h2>
            </div>
          </div>
          <div className="space-y-5">
            {upcoming.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className="grid md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D8]">
                  {/* Date */}
                  <div className="md:col-span-1 p-6 text-center flex md:flex-col items-center justify-center gap-3 bg-seva-green-50">
                    <div className="text-4xl font-black text-seva-green">{e.day}</div>
                    <div className="text-seva-green/70 font-bold text-sm">{e.month} 2026</div>
                  </div>
                  {/* Details */}
                  <div className="md:col-span-4 p-6">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <h3 className="heading-card text-base">{e.title}</h3>
                      <span className="tag">{e.tag}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                      <span>⏰ {e.time}</span>
                      <span>📍 {e.location}</span>
                      <span className="text-saffron font-semibold">🙋 {e.spots}</span>
                    </div>
                    <p className="text-muted text-sm">{e.desc}</p>
                  </div>
                  {/* CTA */}
                  <div className="md:col-span-1 p-6 flex flex-col justify-center items-center gap-3 text-center">
                    <a
                      href="https://wa.me/919352659727?text=Main%20is%20event%20mein%20participate%20karna%20chahta%20hoon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2.5 w-full justify-center"
                    >
                      Join Karen
                    </a>
                    <a
                      href="https://wa.me/919352659727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-seva-green transition-colors"
                    >
                      Aur jaankari →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-saffron-50 border border-saffron-100 rounded-xl p-5 text-center">
            <p className="text-saffron-dark font-semibold">
              📲 Upcoming events ki notification chahiye?{' '}
              <a
                href="https://wa.me/919352659727?text=Mujhe%20events%20ki%20notification%20chahiye"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                WhatsApp par join karein
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-20 bg-cream-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-8 w-1.5 bg-seva-green rounded-full" />
            <div>
              <p className="section-label">Jo Ho Chuka</p>
              <h2 className="heading-section">Past Events</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((e) => (
              <div key={e.title} className="card">
                <div className={`bg-gradient-to-br ${e.bg} p-8 text-center`}>
                  <div className="text-5xl">{e.emoji}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-gray-400">{e.date}</span>
                    <span className="tag text-xs">{e.tag}</span>
                  </div>
                  <h3 className="heading-card text-sm mb-2">{e.title}</h3>
                  <div className="text-saffron text-xs font-bold mb-3">✓ {e.people}</div>
                  <p className="text-muted text-xs leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary">
              Events Gallery Dekhein →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
