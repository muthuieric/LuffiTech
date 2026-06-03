import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';
import ChatWidget from '@/components/ChatWidget';
import { Analytics } from "@vercel/analytics/next";
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
const businessPhone = '+254 702 104 690';
const businessPhoneSchema = '+254702104690';
const businessAddress = 'Nairobi, Kenya';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-KE': '/',
      en: '/',
    },
  },
  title: {
    default: 'Luffi Tech | Software & AI Agency in Kenya',
    template: '%s | Luffi Tech'
  },
  description: 'Luffi Tech builds custom software, AI automation, websites, M-Pesa integrations, cloud systems and coding academy programs in Kenya.',
  applicationName: 'Luffi Tech',
  authors: [{ name: 'Luffi Tech', url: baseUrl }],
  creator: 'Luffi Tech',
  publisher: 'Luffi Tech',
  category: 'Technology services',
  keywords: [
    'Luffi Tech',
    'software development Kenya',
    'AI automation Kenya',
    'custom software development',
    'web development Nairobi',
    'M-Pesa integration',
    'cloud infrastructure',
    'coding academy Kenya',
    'business automation',
    'Next.js Django development',
  ],
  openGraph: {
    title: 'Luffi Tech | Software & AI Agency in Kenya',
    description: 'Custom software, AI automation, web platforms, M-Pesa integrations, cloud infrastructure and digital skills training from Nairobi, Kenya.',
    url: baseUrl,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luffi Tech software engineering and AI automation agency in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luffi Tech | Software & AI Agency in Kenya',
    description: 'Custom software, AI automation, web platforms, M-Pesa integrations and coding academy programs in Kenya.',
    creator: '@luffitech',
    images: ['/og-image.png'],
  },
  appleWebApp: {
    title: 'Luffi Tech',
    statusBarStyle: 'black-translucent',
    startupImage: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  verification: {
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
  other: {
    'geo.region': 'KE-30',
    'geo.placename': 'Nairobi, Kenya',
    'geo.position': '-1.286389;36.817223',
    ICBM: '-1.286389, 36.817223',
    'contact:phone_number': businessPhone,
    'business:contact_data:locality': 'Nairobi',
    'business:contact_data:country_name': 'Kenya',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${baseUrl}/#organization`,
    name: 'Luffi Tech',
    legalName: 'Luffi Tech',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    image: `${baseUrl}/og-image.png`,
    description: 'Luffi Tech is a software engineering and AI automation agency in Nairobi, Kenya, building custom web platforms, business systems, M-Pesa integrations, cloud infrastructure, automation workflows and coding academy programs.',
    telephone: businessPhoneSchema,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.286389,
      longitude: 36.817223,
    },
    areaServed: [
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'AdministrativeArea', name: 'Nairobi County' },
      { '@type': 'City', name: 'Nairobi' },
      { '@type': 'Place', name: 'East Africa' },
      { '@type': 'Place', name: 'Global clients' },
    ],
    knowsAbout: [
      'Custom software development',
      'AI automation',
      'Web development',
      'M-Pesa integration',
      'Cloud infrastructure',
      'Business intelligence',
      'Data analytics',
      'UI/UX design',
      'IT support',
      'Coding academy programs',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom software development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI automation and AI agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'M-Pesa and payment gateway integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud infrastructure and DevOps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Luffi Tech coding academy' } },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    },
    sameAs: [
      'https://x.com/luffitech',
      'https://www.linkedin.com/company/luffi-tech',
      'https://facebook.com/luffitech',
      'https://instagram.com/luffitech',
      'https://www.tiktok.com/@luffi.tech'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Luffi Tech',
    description: 'Software development, AI automation, web development, M-Pesa integrations, cloud systems and coding academy programs in Kenya.',
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: 'en-KE',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/services?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en-KE" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <address className="sr-only">
          Luffi Tech is a software engineering and AI automation agency based in {businessAddress}. Call {businessPhone} for custom software development, AI automation, websites, M-Pesa integrations, cloud systems, business automation, data analytics, UI/UX design, IT support and coding academy programs in Kenya.
        </address>
        <ClientLayout>
          {children}
          <Analytics />
          <ChatWidget />
        </ClientLayout>
        <GoogleAnalytics gaId="G-1PV5DEFSJJ" />
      </body>
    </html>
  );
}
