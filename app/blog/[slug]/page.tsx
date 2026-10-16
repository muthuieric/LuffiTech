import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogMetadata } from '@/lib/blog';
import ArticleSchema from '@/components/ui/ArticleSchema';
import Image from 'next/image';
import { Clock } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: 'Article Not Found | Luffi Tech' };
  return getBlogMetadata(params.slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <ArticleSchema post={post} />

      {/* Header */}
      <header className="py-12 lg:py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 mb-6">
            <a
              href="/blog"
              className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Blog
            </a>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {post.tags[0]}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex items-center gap-3 mb-4 lg:mb-0">
              <Clock size={16} className="text-slate-400" />
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {post.readTime}
              </span>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                •{' '}
                {new Date(post.date).toLocaleDateString('en-KE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6 lg:mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 lg:mb-0 lg:w-2/3">
              {post.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Render content sections by splitting on <h2> headings */}
          {post.content.split(/(<h2[^>]*>.*?<\/h2>)/).filter(Boolean).map((section, idx) => {
            if (section.startsWith('<h2')) {
              const match = section.match(/<h2[^>]*>(.*?)<\/h2>/);
              const heading = match ? match[1] : '';
              return (
                <section key={idx} className="mt-12 first:mt-0">
                  <h2
                    id={heading.toLowerCase().replace(/\s+/g, '-')}
                    className="text-2xl font-bold text-slate-900 dark:text-white mb-4"
                    dangerouslySetInnerHTML={{ __html: section }}
                  />
                </section>
              );
            }
            return (
              <section key={idx} className="mt-8 first:mt-0">
                <div dangerouslySetInnerHTML={{ __html: section }} />
              </section>
            );
          })}
        </div>

        {/* Author & CTA */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/30 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <Image src="/icon.png" alt="Luffi Tech" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{post.author}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Nairobi, Kenya
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Need help with {post.tags[0]} for your business? Our team in Nairobi can help you implement,
            deploy, and support production-ready solutions.
          </p>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href={`https://wa.me/254702104690?text=Hi Luffi Tech, I read your article on ${post.title} and would like to discuss a project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}