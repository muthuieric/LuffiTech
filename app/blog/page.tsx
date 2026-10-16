import Link from 'next/link';
import { getAllBlogPosts, getFeaturedPosts } from '@/lib/blog';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const baseUrl = 'https://www.luffitech.com';

export const metadata = {
  title: 'Blog | Luffi Tech',
  description:
    'Read the latest articles from Luffi Tech on software development, AI automation, M-Pesa integrations, and Kenyan business technology.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Luffi Tech',
    description:
      'Latest articles on software engineering, AI automation, M-Pesa integrations, and technology for Kenyan businesses.',
    url: `${baseUrl}/blog`,
    siteName: 'Luffi Tech',
    type: 'website',
  },
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featured = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {featured.length > 0 && (
        <section className="py-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <Tag size={16} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Featured</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((post) => (
                <article
                  key={post.slug}
                  className="group hover:border-indigo-200/50 dark:hover:border-indigo-900/30 transition-all rounded-2xl border border-slate-200 dark:border-slate-800/50 p-6 bg-white dark:bg-slate-800/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={16} className="text-slate-400" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {post.readTime}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      • {new Date(post.date).toLocaleDateString('en-KE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-2">
                      <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                        Read article
                      </span>
                    </div>
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* All Articles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">All Articles</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Insights on software engineering, AI, and digital business in Kenya.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="hover:border-indigo-200/50 dark:hover:border-indigo-900/30 transition-all rounded-2xl border border-slate-200 dark:border-slate-800/50 p-6 bg-white dark:bg-slate-800/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={16} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      Read article
                    </span>
                  </div>
                </Link>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}