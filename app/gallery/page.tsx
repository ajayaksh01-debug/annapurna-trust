'use client';
import { useState } from 'react';

const categories = ['Sabhi', 'Ann Daan', 'Gau Seva', 'Mahila Sashaktikaran', 'Pakshi Seva', 'Community Events', 'Team'];

const items = [
  { cat: 'Ann Daan', emoji: '🍱', title: 'Ann Daan Abhiyan — May 2026', caption: '200+ zaruratmand parivaaron ko garam bhojan diya gaya', date: 'May 15, 2026', bg: 'from-amber-100 to-orange-100' },
  { cat: 'Gau Seva', emoji: '🐄', title: 'Gau Seva Ratha — April 2026', caption: 'Garmiyon mein 50+ Gau Mataon ko chaara aur paani', date: 'Apr 10, 2026', bg: 'from-green-100 to-emerald-100' },
  { cat: 'Pakshi Seva', emoji: '🕊', title: 'Pakshi Jal Seva — March 2026', caption: '15 kshetron mein paani ke pot sthaapit kiye', date: 'Mar 28, 2026', bg: 'from-sky-100 to-cyan-100' },
  { cat: 'Mahila Sashaktikaran', emoji: '👩', title: 'Mahila Workshop — Batch 3', caption: '30 mahilaon ko silai aur beauty training', date: 'Mar 2026', bg: 'from-purple-100 to-violet-100' },
  { cat: 'Community Events', emoji: '🤝', title: 'Mahila Diwas Celebration 2026', caption: 'Certificate ceremony — 40 mahilaon ka samman', date: 'Mar 8, 2026', bg: 'from-rose-100 to-pink-100' },
  { cat: 'Ann Daan', emoji: '🌾', title: 'Ration Vitran — Jan 2026', caption: 'Makar Sankranti ke uplakshya par ration drive', date: 'Jan 2026', bg: 'from-yellow-100 to-amber-100' },
  { cat: 'Pakshi Seva', emoji: '🌿', title: 'Makar Sankranti Pakshi Seva', caption: 'Parindeon ke liye til-chaaval ka prasad', date: 'Jan 14, 2026', bg: 'from-teal-100 to-cyan-100' },
  { cat: 'Ann Daan', emoji: '🍛', title: 'Navratri Bhandara 2025', caption: 'Nav dinon tak bhojan vitaran — 300+ logon ko', date: 'Oct 2025', bg: 'from-orange-100 to-amber-100' },
  { cat: 'Gau Seva', emoji: '🐮', title: 'Gaushala Visit — Volunteers', caption: 'Volunteer team ki niyamit gaushala seva', date: 'Sep 2025', bg: 'from-lime-100 to-green-100' },
  { cat: 'Mahila Sashaktikaran', emoji: '✂️', title: 'Silai Training — Batch 2', caption: 'Advanced silai course — 25 mahilayein', date: 'Aug 2025', bg: 'from-fuchsia-100 to-purple-100' },
  { cat: 'Team', emoji: '🤲', title: 'Volunteer Orientation Day', caption: 'Nayi volunteer team ka swagat aur training', date: 'Jul 2025', bg: 'from-seva-green-100 to-emerald-100' },
  { cat: 'Community Events', emoji: '🎗', title: 'Independence Day Seva 2025', caption: 'Multi-program seva drive — ann daan, gau, pakshi', date: 'Aug 15, 2025', bg: 'from-indigo-100 to-blue-100' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('Sabhi');
  const [selected, setSelected] = useState<typeof items[0] | null>(null);

  const filtered = active === 'Sabhi' ? items : items.filter(i => i.cat === active);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative pt-48 pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0F3D25 0%, #2D7A52 60%, #C9962A 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-saffron-light mb-4">Seva Ki Tasveeren</p>
          <h1 className="heading-display text-white mb-4">Hamari Gallery</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Kaam ka sbootwith photographs — har tasveer ek kahani hai, ek seva ka sawaal.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-off-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === c
                    ? 'bg-seva-green text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-[#E5E0D8] hover:border-seva-green hover:text-seva-green'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                style={{ height: '220px' }}
                onClick={() => setSelected(item)}
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.bg} relative flex flex-col items-center justify-center`}>
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </div>
                  <p className="text-xs font-medium text-gray-500 mt-2 text-center px-3">[Photo: {item.title}]</p>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-seva-green-dark/0 group-hover:bg-seva-green-dark/70 transition-all flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <div>
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-white/70 text-xs mt-0.5">{item.caption}</p>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 tag text-[0.6875rem]">{item.cat}</div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted">
              Is category mein abhi photos nahi hain.
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selected.bg} h-56 flex items-center justify-center`}>
              <div className="text-8xl">{selected.emoji}</div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <span className="tag">{selected.cat}</span>
                <span className="text-xs text-gray-400">{selected.date}</span>
              </div>
              <h3 className="heading-card mb-2">{selected.title}</h3>
              <p className="text-muted text-sm">{selected.caption}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-5 btn-secondary text-sm w-full justify-center"
              >
                Bandh Karen ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPLOAD CTA */}
      <section className="py-16 bg-cream-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="heading-section mb-3">Aapke Paas Hamare Events Ki Photos Hain?</h2>
          <p className="text-muted mb-6">
            Kisi event mein the? Photos share karein — gallery mein add karenge, naam ke
            saath acknowledgement denge.
          </p>
          <a
            href="https://wa.me/919352659727?text=Main%20kuch%20seva%20ki%20photos%20share%20karna%20chahta%20hoon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📲 WhatsApp par Photos Bhejein
          </a>
        </div>
      </section>
    </div>
  );
}
