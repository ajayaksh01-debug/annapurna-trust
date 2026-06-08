import Link from 'next/link';

const programs = [
  { href: '/programs#ann-daan', label: 'Ann Daan' },
  { href: '/programs#gau-seva', label: 'Gau Seva' },
  { href: '/programs#mahila', label: 'Mahila Sashaktikaran' },
  { href: '/programs#pakshi', label: 'Pakshi Sanrakshan' },
];

const quickLinks = [
  { href: '/about', label: 'Hamare Baare Mein' },
  { href: '/impact', label: 'Hamara Prabhav' },
  { href: '/events', label: 'Karyakram' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/volunteer', label: 'Volunteer Banen' },
  { href: '/donate', label: 'Daan Karen' },
  { href: '/csr', label: 'CSR Partnership' },
  { href: '/transparency', label: 'Paaraddarshita' },
];

export default function Footer() {
  return (
    <footer className="bg-seva-green-dark text-white">
      {/* CTA Banner */}
      <div className="bg-saffron">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-white font-bold text-lg">Aaj Hi Seva Ka Hissa Banen</p>
            <p className="text-white/85 text-sm mt-0.5">
              Aapka ek kadam kisi ki zindagi badal sakta hai.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/donate" className="btn-white text-sm px-5 py-2.5">
              🙏 Daan Karen
            </Link>
            <Link href="/volunteer" className="btn-outline-white text-sm px-5 py-2.5">
              Volunteer Banen
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center text-xl shadow">
              🕉
            </div>
            <div>
              <div className="font-bold text-sm leading-tight text-white">Shrimati Annapurna Devi</div>
              <div className="text-gold-light text-xs leading-tight">Charitable Trust</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Manav seva, gau seva, ann daan aur mahila sashaktikaran ke liye samarpit — Salasar, Rajasthan.
          </p>
          <div className="mb-5">
            <div className="text-gold font-bold text-lg italic mb-1">"Seva Hi Pooja Hai"</div>
            <div className="text-white/50 text-xs">— Hamara Jeevan Mantra</div>
          </div>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: 'f', color: '#1877F2', label: 'Facebook' },
              { icon: '▶', color: '#FF0000', label: 'YouTube' },
              { icon: '📷', color: '#E1306C', label: 'Instagram' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm text-white hover:bg-white/20 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-gold mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-saffron group-hover:scale-150 transition-transform" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-gold mb-4">Hamare Karyakram</h3>
          <ul className="space-y-2.5">
            {programs.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-saffron group-hover:scale-150 transition-transform" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="font-bold text-sm uppercase tracking-widest text-gold mb-3">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: 'Trust Registration', val: 'Rajasthan Registered' },
                { label: '80G Certificate', val: 'Approved' },
                { label: '12A Status', val: 'Certified' },
                { label: 'DARPAN ID', val: 'Registered' },
              ].map((d) => (
                <li key={d.label} className="text-xs text-white/60">
                  <span className="text-white/85 font-medium">{d.label}:</span> {d.val}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-widest text-gold mb-4">Sampark Karen</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-saffron text-lg flex-shrink-0">📍</span>
              <div>
                <div className="text-white text-sm font-medium">Hamara Pata</div>
                <div className="text-white/65 text-sm leading-relaxed">
                  Salasar, Churu District,<br />Rajasthan — 331 506
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-saffron text-lg flex-shrink-0">📞</span>
              <div>
                <div className="text-white text-sm font-medium">Phone / WhatsApp</div>
                <a href="tel:+919352659727" className="text-white/65 text-sm hover:text-saffron-light transition-colors">
                  +91 93526 59727
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-saffron text-lg flex-shrink-0">📧</span>
              <div>
                <div className="text-white text-sm font-medium">Email</div>
                <a
                  href="mailto:annapurnadevicharitabletrust15@gmail.com"
                  className="text-white/65 text-xs hover:text-saffron-light transition-colors break-all"
                >
                  annapurnadevicharitabletrust15<br />@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-saffron text-lg flex-shrink-0">🕐</span>
              <div>
                <div className="text-white text-sm font-medium">Office Timings</div>
                <div className="text-white/65 text-sm">
                  Mon–Sat: 9:00 AM – 6:00 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp quick button */}
          <a
            href="https://wa.me/919352659727?text=Namaste!%20Main%20Shrimati%20Annapurna%20Devi%20Charitable%20Trust%20ke%20baare%20mein%20jaanna%20chahta%20hoon."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-lg px-4 py-3 transition-colors"
          >
            <span className="text-xl">💬</span>
            <div>
              <div className="text-white text-xs font-bold">WhatsApp par likhein</div>
              <div className="text-white/55 text-[0.6875rem]">Turant jawab milega</div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/50 text-xs">
            © 2026 Shrimati Annapurna Devi Charitable Trust. Salasar, Rajasthan.
          </p>
          <p className="text-gold/70 text-xs italic">
            🙏 Seva Hi Pooja Hai · Salasar, Rajasthan
          </p>
          <div className="flex gap-4">
            <Link href="/transparency" className="text-white/45 hover:text-white/80 text-xs transition-colors">
              Paaraddarshita
            </Link>
            <Link href="/contact" className="text-white/45 hover:text-white/80 text-xs transition-colors">
              Sampark
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
