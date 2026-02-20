import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';
import ChatWidget from '@/components/ChatWidget';
import { Analytics } from "@vercel/analytics/next";
// 1. FIXED: Added the missing import
import { GoogleAnalytics } from '@next/third-parties/google';

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

const baseUrl = 'https://www.luffitech.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Luffi Tech | Leading Software Engineering & AI Solutions Agency',
    template: '%s | Luffi Tech Kenya'
  },
  description: 'Luffi Tech is a premier global tech agency specializing in custom software development, AI automation, and cloud infrastructure.',
  keywords: ['Software Agency', 'AI Automation', 'Web Development', 'Kenya Tech', 'M-Pesa Integration', 'Coding Academy'],
  
  openGraph: {
    title: 'Luffi Tech | Elite Tech Solutions.',
    description: 'Building world-class software and training the next generation in Nairobi.',
    url: baseUrl,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luffi Tech Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luffi Tech',
    description: 'Elite Tech Solutions. Human Prices.',
    creator: '@luffitech',
    images: ['/og-image.png'],
  },

  // ADD THIS FOR iPHONES:
  appleWebApp: {
    title: 'Luffi Tech',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/icon.png',
    ],
  },
  // Note: Since you have icon.png in the app folder, you can actually delete this entire icons block
  // But keeping it is fine too.
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  verification: {
    // ⚠️ DON'T FORGET: Replace this placeholder with your actual code if you have it!
    google: 'G-1PV5DEFSJJ', 
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Luffi Tech',
    'image': `${baseUrl}/icon.png`, // Updated to match your new icon
    'description': 'Global software engineering and AI automation agency.',
    'url': baseUrl,
    'telephone': '+254702104690',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'KE',
      'addressLocality': 'Nairobi',
    },
    'priceRange': '$$',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'],
      'opens': '08:00',
      'closes': '22:00'
    },
    'sameAs': [
      'https://x.com/luffitech',
      'https://www.linkedin.com/company/luffi-tech',
      'https://facebook.com/luffitech',
      'https://instagram.com/luffitech',
      'https://www.tiktok.com/@luffi.tech'
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ClientLayout>
          {children}
          <Analytics />
          <ChatWidget />  
        </ClientLayout>

        {/* 2. FIXED: Placed the tag correctly at the bottom */}
        <GoogleAnalytics gaId="G-1PV5DEFSJJ" />
      </body>
    </html>
  );
}