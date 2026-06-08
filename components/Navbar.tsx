'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Karyakram',
    children: [
      { href: '/programs', label: 'Hamare Programs' },
      { href: '/events', label: 'Events' },
    ],
  },
  { href: '/impact', label: 'Prabhav' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/csr', label: 'CSR' },
  { href: '/transparency', label: 'Transparency' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDropdown(false); }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white shadow-sm border-b border-[#E5E0D8]'
          : 'bg-transparent'
      }`}
    >
      {/* Announcement bar */}
      <div className="announcement-bar text-xs">
        🙏&nbsp; Seva Hi Pooja Hai — Salasar, Rajasthan &nbsp;|&nbsp; Sampark: +91 93526 59727 &nbsp;🙏
      </div>

      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-seva-green flex items-center justify-center text-lg shadow-sm">
            🕉
          </div>
          <div>
            <div
              className={`font-bold text-sm leading-tight transition-colors ${
                scrolled || !isHome ? 'text-seva-green-dark' : 'text-white'
              }`}
            >
              Shrimati Annapurna Devi
            </div>
            <div
              className={`text-[0.6875rem] leading-tight font-medium transition-colors ${
                scrolled || !isHome ? 'text-saffron' : 'text-saffron-light'
              }`}
            >
              Charitable Trust · Salasar
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                  className={`nav-link flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled || !isHome ? 'text-gray-700 hover:text-seva-green' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdown && (
                  <div
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-[#E5E0D8] py-1.5 z-50"
                  >
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-seva-green-50 hover:text-seva-green font-medium transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href!}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-saffron font-semibold'
                      : scrolled || !isHome
                      ? 'text-gray-700 hover:text-seva-green'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/donate" className="btn-primary text-sm px-4 py-2 hidden sm:inline-flex">
            🙏 Daan Karen
          </Link>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome ? 'text-seva-green-dark' : 'text-white'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#E5E0D8] shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-bold text-saffron uppercase tracking-widest">
                    {link.label}
                  </div>
                  {link.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-6 py-2.5 text-gray-700 font-medium hover:text-seva-green hover:bg-seva-green-50 rounded-lg transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`block px-3 py-2.5 rounded-lg font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-seva-green-50 text-seva-green font-semibold'
                      : 'text-gray-700 hover:bg-seva-green-50 hover:text-seva-green'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-[#E5E0D8]">
              <Link href="/donate" className="btn-primary w-full justify-center text-sm">
                🙏 Abhi Daan Karen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
