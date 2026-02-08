import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 1. FIXED: Added 'www' to match your primary domain and sitemap
  const baseUrl = 'https://www.luffitech.com';

  return {
    rules: {
      userAgent: '*', // Apply to all bots (Google, Bing, GPT, etc.)
      allow: '/',     // Allow crawling of all public pages
      disallow: [     // Block these private/backend paths
        '/admin/',
        '/dashboard/', 
        '/api/',      // Good idea: Save crawl budget by blocking API routes
        '/_next/',    // Optional: Block internal Next.js build files
        '/private/',  
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`, // This helps bots find the map instantly
  };
}