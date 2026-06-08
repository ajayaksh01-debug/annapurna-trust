import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Shrimati Annapurna Devi Charitable Trust | NGO in Salasar, Rajasthan',
    template: '%s | Annapurna Devi Trust',
  },
  description:
    'Shrimati Annapurna Devi Charitable Trust ek samajik sanstha hai — ann daan, gau seva, mahila sashaktikaran aur pakshi sanrakshan ke liye samarpit. Salasar, Rajasthan.',
  keywords: [
    'NGO Salasar',
    'charitable trust Rajasthan',
    'ann daan Salasar',
    'gau seva Rajasthan',
    'mahila sashaktikaran NGO',
    'Annapurna Devi Trust',
    'donate NGO Rajasthan',
    '80G NGO Rajasthan',
  ],
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    siteName: 'Shrimati Annapurna Devi Charitable Trust',
    title: 'Shrimati Annapurna Devi Charitable Trust | Salasar, Rajasthan',
    description:
      'Seva Hi Pooja Hai — Ann Daan, Gau Seva, Mahila Sashaktikaran ke liye samarpit sanstha. Salasar, Rajasthan.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
