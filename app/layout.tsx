import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://luffitech.com'), // Update this when live
  title: {
    default: 'Luffi Tech | Leading Software Engineering & AI Solutions Agency',
    template: '%s | Luffi Tech'
  },
  description: 'Luffi Tech is a premier global tech agency specializing in custom software development, AI automation, and cloud infrastructure.',
  keywords: ['Software Agency', 'AI Automation', 'Web Development', 'Kenya Tech'],
  // ... (keep the rest of your metadata same as before)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Data - Structured Data for Google Rich Results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Luffi Tech',
    'image': 'https://luffitech.com/icon_only2.png',
    'description': 'Global software engineering and AI automation agency.',
    'url': 'https://luffitech.com',
    'telephone': '+254702104690',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'KE',
      'addressLocality': 'Nairobi',
    },
    'priceRange': '$$',
    'openingHours': 'Mo-Fr 08:00-18:00',
    'sameAs': [
      'https://twitter.com/luffitech',
      'https://linkedin.com/company/luffitech'
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
        {/* JSON-LD Script placed here to avoid conflict with Next.js Head management.
           Google reads structured data from the body perfectly fine.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}