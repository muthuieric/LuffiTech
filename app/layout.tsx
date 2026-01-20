import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

// 1. Optimize Viewport for Mobile Responsiveness
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5', // Matches your Indigo brand color
};

// 2. Comprehensive SEO Metadata
export const metadata: Metadata = {
  // Replace this with your actual domain when you deploy
  metadataBase: new URL('https://luffitech.com'), 
  
  title: {
    default: 'Luffi Tech | Mobile-First IT Support & Software Solutions',
    template: '%s | Luffi Tech Nairobi'
  },
  
  description: 'Nairobi\'s premier mobile-first tech agency. We provide doorstep computer repairs, custom software development, and expert coding mentorship (CBC & Bootcamp).',
  
  keywords: [
    'IT Support Nairobi', 
    'Computer Repair Services Kenya', 
    'Software Development Company', 
    'Coding Academy Nairobi', 
    'CBC Tech Training', 
    'Web Design Kenya', 
    'M-Pesa Integration', 
    'Luffi Tech', 
    'Mobile Tech Support'
  ],

  authors: [{ name: 'Luffi Tech Team' }],
  creator: 'Luffi Tech',
  
  // Social Media Previews (Open Graph)
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://luffitech.com',
    title: 'Luffi Tech - Tech Support That Comes to You',
    description: 'Expert IT support, software engineering, and digital skills training delivered to your doorstep in Nairobi.',
    siteName: 'Luffi Tech',
    images: [
      {
        url: '/og-image.jpg', // You should add a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: 'Luffi Tech Team at Work',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Luffi Tech | Digital Solutions',
    description: 'Bridging the gap between talent and technology in Kenya.',
    // images: ['/twitter-image.jpg'], 
  },

  // Icons (Favicon)
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}