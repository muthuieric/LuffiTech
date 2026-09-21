import type { Metadata } from 'next';
import React from 'react';

const baseUrl = 'https://www.luffitech.com';

export const metadata: Metadata = {
  title: 'About Us | Luffi Tech Engineering Agency Nairobi',
  description: 'Learn about Luffi Tech, a Nairobi-based engineering studio and digital agency founded on technical rigor, practical delivery, and direct senior architect access for businesses across Kenya.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Luffi Tech Nairobi',
    description: 'Technical rigor, practical software delivery, and direct senior architect access in Nairobi, Kenya.',
    url: `${baseUrl}/about`,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Luffi Tech engineering studio in Nairobi, Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Luffi Tech Nairobi',
    description: 'Practical software engineering, AI automation, and tech academy in Nairobi, Kenya.',
    creator: '@luffitech',
    images: ['/og-image.png'],
  },
  other: {
    'geo.region': 'KE-30',
    'geo.placename': 'Nairobi, Kenya',
    'geo.position': '-1.286389;36.817223',
    ICBM: '-1.286389, 36.817223',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${baseUrl}/about#webpage`,
  url: `${baseUrl}/about`,
  name: 'About Luffi Tech',
  description: 'About Luffi Tech engineering agency, philosophy, team, and client commitments in Nairobi, Kenya.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Luffi Tech',
    url: baseUrl,
    foundingLocation: {
      '@type': 'City',
      name: 'Nairobi',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      addressCountry: 'KE',
    },
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}

