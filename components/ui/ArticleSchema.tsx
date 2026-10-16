"use client";

import { Metadata } from 'next';

interface ArticleSchemaProps {
  post: {
    slug: string;
    title: string;
    summary: string;
    content: string;
    date: string;
    author: string;
    tags: string[];
    featured: boolean;
    image?: string;
  };
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const baseUrl = 'https://www.luffitech.com';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${baseUrl}/blog/${post.slug}#blogposting`,
    url: `${baseUrl}/blog/${post.slug}`,
    headline: post.title,
    description: post.summary,
    image: post.image
      ? {
          '@type': 'ImageObject',
          url: post.image.startsWith('http')
            ? post.image
            : `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
        }
      : {
          '@type': 'ImageObject',
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Luffi Tech',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.png`,
      },
    },
    inLanguage: 'en-KE',
    isPartOf: {
      '@type': 'Blog',
      name: 'Luffi Tech Blog',
      url: `${baseUrl}/blog`,
    },
    about: {
      '@type': 'Thing',
      name: 'Software development, AI automation, and web services in Kenya',
    },
    keywords: post.tags.join(', '),
    articleSection: 'Technology',
    wordCount: post.content.split(/\s+/).length,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}