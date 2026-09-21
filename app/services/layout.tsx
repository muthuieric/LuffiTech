import type { Metadata } from 'next';
import React from 'react';

const baseUrl = 'https://www.luffitech.com';

export const metadata: Metadata = {
  title: 'Software Development & AI Automation Services | Luffi Tech Nairobi',
  description: 'Enterprise web applications, native mobile apps, USSD systems, M-Pesa Daraja payment integrations, AI workflow automation, cloud infrastructure, and MIS/ERP solutions from Nairobi, Kenya.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Software Development & AI Automation Services | Luffi Tech',
    description: 'Comprehensive software engineering services: Web platforms, Mobile & USSD, M-Pesa APIs, AI automation, and Cloud DevOps in Kenya.',
    url: `${baseUrl}/services`,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luffi Tech software engineering and AI automation services catalog',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Directory | Luffi Tech Nairobi',
    description: 'Custom web development, mobile solutions, M-Pesa APIs, and AI automation in Kenya.',
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

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseUrl}/services#service`,
  name: 'Software Engineering and Digital Transformation Services',
  provider: {
    '@type': 'Organization',
    name: 'Luffi Tech',
    url: baseUrl,
  },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'City', name: 'Nairobi' },
    { '@type': 'Place', name: 'East Africa' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Luffi Tech Engineering Solutions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development & Ecosystems',
          description: 'High-performance web platforms with React, Next.js, Django, FastAPI, and PostgreSQL.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Solutions & USSD',
          description: 'Native iOS, Android, Flutter apps, and Africa\'s Talking USSD gateways.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'M-Pesa & Payment Integrations',
          description: 'Daraja 2.0 API automated C2B, B2C, STK push, and instant payment reconciliation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI & Workflow Automation',
          description: 'Custom AI agents, LLM RAG enterprise retrieval, and internal process automation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Infrastructure & DevOps',
          description: 'AWS, Azure, GCP architecture, Docker, Kubernetes, and automated CI/CD pipelines.',
        },
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  );
}

