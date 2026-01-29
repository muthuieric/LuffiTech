import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://luffitech.com';

  return {
    rules: {
      userAgent: '*', // Apply to all bots (Google, Bing, etc.)
      allow: '/',     // Allow everything
      disallow: [     // Except these private paths
        '/admin/',
        '/dashboard/', 
        '/api/'       
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}