import type { Metadata } from 'next';
import React from 'react';

const baseUrl = 'https://www.luffitech.com';

export const metadata: Metadata = {
  title: 'Projects & Digital Workshop | Luffi Tech Nairobi',
  description: 'Explore production web platforms and software built by Luffi Tech in Nairobi, Kenya. Featured systems include Karibu VMS, Luxe Consult, Amaya\'s Kitchen, Pink Tower, F-Shujaa, F & P Logistics, and Tushop.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects & Digital Workshop | Luffi Tech',
    description: 'Explore production web platforms and software engineered by Luffi Tech in Nairobi, Kenya.',
    url: `${baseUrl}/projects`,
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luffi Tech software engineering portfolio and production systems',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Digital Workshop | Luffi Tech',
    description: 'Explore production web platforms and software engineered by Luffi Tech in Nairobi, Kenya.',
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

const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Luffi Tech Featured Projects & Deployed Systems',
  description: 'Production software applications and web platforms engineered by Luffi Tech in Nairobi, Kenya.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Karibu VMS',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Web',
        url: 'https://www.karibuvms.com',
        description: 'Visitor management and facility security platform with instant QR verification and automated host notifications.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'WebSite',
        name: 'Luxe Consult',
        url: 'https://www.luxe-consult.com',
        description: 'High-performance luxury real estate portal for premium properties.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'WebSite',
        name: "Amaya's Kitchen",
        url: 'https://amayas-kitchen-qazm.vercel.app/',
        description: 'Culinary and hospitality web experience with mobile-first menu architecture.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'WebSite',
        name: 'Pink Tower',
        url: 'https://pink-tower-nine.vercel.app/',
        description: 'Minimalist interactive web environment with 60 FPS scroll dynamics and ergonomic tactile touch controls.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'SoftwareApplication',
        name: 'F-Shujaa',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        url: 'https://fshujaa.vercel.app',
        description: 'Accessible community e-learning platform optimized for low-bandwidth 2G/3G networks.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'SoftwareApplication',
        name: 'F & P Logistics',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://f-and-p-admin-gnr7.vercel.app',
        description: 'Fleet dispatch dashboard and mobile operations system with real-time routing and automated local payments.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'SoftwareApplication',
        name: 'Tushop',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://tushop-psi.vercel.app',
        description: 'Smart warehouse floor inventory and order fulfillment management platform.',
        author: {
          '@type': 'Organization',
          name: 'Luffi Tech',
          url: baseUrl,
        },
      },
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      {children}
    </>
  );
}

