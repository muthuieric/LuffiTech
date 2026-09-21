import type { Metadata } from 'next';
import React from 'react';

const baseUrl = 'https://www.luffitech.com';

export const metadata: Metadata = {
  title: 'Contact Engineering Desk & Inquiries | Luffi Tech Nairobi',
  description: 'Reach Luffi Tech in Nairobi, Kenya. Call +254 702 104 690 (24hrs call direct), chat on WhatsApp, or send an inquiry for custom software, AI automation, M-Pesa integrations, and coding academy programs.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Engineering Desk | Luffi Tech Nairobi',
    description: 'Direct phone line (24hrs call), WhatsApp desk, and engineering inquiries in Nairobi, Kenya.',
    url: `${baseUrl}/contact`,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Luffi Tech software engineering desk in Nairobi, Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Engineering Desk | Luffi Tech Nairobi',
    description: 'Reach Luffi Tech in Nairobi, Kenya. Call +254 702 104 690 (24hrs call) or message on WhatsApp.',
    creator: '@luffitech',
    images: ['/og-image.png'],
  },
  other: {
    'geo.region': 'KE-30',
    'geo.placename': 'Nairobi, Kenya',
    'geo.position': '-1.286389;36.817223',
    ICBM: '-1.286389, 36.817223',
    'contact:phone_number': '+254 702 104 690',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${baseUrl}/contact#webpage`,
  url: `${baseUrl}/contact`,
  name: 'Contact Luffi Tech Engineering Team',
  description: 'Contact channels for custom software development, AI automation, web applications, and tech academy in Nairobi, Kenya.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Luffi Tech',
    telephone: '+254702104690',
    email: 'contact.luffitech@gmail.com',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}

