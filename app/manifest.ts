import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luffi Tech | Elite Tech Solutions',
    short_name: 'Luffi Tech',
    description: 'Nairobi\'s premier software engineering and AI automation agency.',
    start_url: '/',
    display: 'standalone', // This is the magic word! It hides the browser search bar.
    background_color: '#0f172a', // Matches your dark slate theme
    theme_color: '#4f46e5', // Matches your indigo brand color
    orientation: 'portrait',
    icons: [
      {
        src: '/icon.png', // Assuming you still have icon.png in your public/ or app/ folder
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}