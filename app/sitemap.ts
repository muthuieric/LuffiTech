import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. FIXED: Added 'www' to match your primary domain
  const baseUrl = 'https://www.luffitech.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1, // Homepage
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Core Business
    },
    {
      url: `${baseUrl}/academy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Core Business
    },
    {
      // 2. ADDED: Your Process page was missing
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6, // Least important for ranking, humans find it easily
    },
  ];
}