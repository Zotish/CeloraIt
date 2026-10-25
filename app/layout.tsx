import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#090d10',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'CeloraIT — Software, SaaS, ERP, AI, Cloud & Mobile Apps',
  description:
    'CeloraIT is a modern Bangladesh-based software company building scalable digital products, SaaS platforms, ERP systems, AI-enabled automation, mobile apps, and cloud solutions.',
  keywords: [
    'CeloraIT',
    'software company Bangladesh',
    'SaaS development',
    'ERP solutions',
    'AI automation',
    'Mobile App development',
    'Flutter',
    'Next.js',
    'Custom Blockchain',
    'tech team for startups',
  ],
  authors: [{ name: 'CeloraIT' }],
  metadataBase: new URL('https://www.celorait.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.celorait.com/',
    title: 'CeloraIT — Next-Gen Software, SaaS & AI Engineering',
    description:
      'Building scalable digital products, SaaS platforms, ERP systems, and AI-enabled automation for startups and growing businesses.',
    siteName: 'CeloraIT',
    images: [
      {
        url: '/assets/logo.svg',
        width: 320,
        height: 80,
        alt: 'CeloraIT Logo',
      },
    ],
  },
  icons: {
    icon: '/assets/logo.svg',
    shortcut: '/assets/logo.svg',
    apple: '/assets/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
