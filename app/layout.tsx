import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';
import ChatWidget from '@/components/ChatWidget';
import { Analytics } from "@vercel/analytics/next";

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

// 1. DEFINE YOUR BASE URL
const baseUrl = 'https://www.luffitech.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // 2. CANONICAL URL (Prevents duplicate content issues)
  alternates: {
    canonical: '/',
  },

  title: {
    default: 'Luffi Tech | Leading Software Engineering & AI Solutions Agency',
    template: '%s | Luffi Tech Kenya'
  },
  description: 'Luffi Tech is a premier global tech agency specializing in custom software development, AI automation, and cloud infrastructure.',
  keywords: ['Software Agency', 'AI Automation', 'Web Development', 'Kenya Tech', 'M-Pesa Integration', 'Coding Academy'],
  
  // 3. SOCIAL MEDIA PREVIEWS (WhatsApp, LinkedIn, etc.)
  openGraph: {
    title: 'Luffi Tech | Elite Tech Solutions.',
    description: 'Building world-class software and training the next generation in Nairobi.',
    url: baseUrl,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png', // Ensure you have this image in your public folder!
        width: 1200,
        height: 630,
        alt: 'Luffi Tech Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 4. TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Luffi Tech',
    description: 'Elite Tech Solutions. Human Prices.',
    creator: '@luffitech',
    images: ['/og-image.png'],
  },

  // 5. ICONS
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  // 6. VERIFICATION (Backup if DNS fails)
  verification: {
    google: 'PASTE_YOUR_GOOGLE_CODE_HERE', 
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
  // 7. STRUCTURED DATA (Updated with your EXACT Social Links)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Luffi Tech',
    'image': `${baseUrl}/icon_only2.png`,
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
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '18:00'
    },
    // This connects your site to your social profiles in Google Knowledge Graph
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
      </body>
    </html>
  );
}