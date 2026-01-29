"use client";

import React, { memo } from 'react';
import { Quote, Star, BadgeCheck } from 'lucide-react';

// --- Static Data (Moved outside to prevent re-creation) ---

const REVIEWS = [
  {
    text: "The M-Pesa integration Luffi Tech built for our restaurant is flawless. We process payments 3x faster now, and the automated receipts have saved us hours of reconciliation work.",
    author: "Sarah K.",
    role: "Restaurant Owner",
    category: "M-Pesa Integration",
    initial: "S",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    text: "They didn't just build a website; they built a scalable business platform. The UI is world-class, and the custom inventory system works perfectly across all our branches.",
    author: "David O.",
    role: "Startup Founder",
    category: "Web Application",
    initial: "D",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    text: "My 10-year-old daughter loves the Saturday coding sessions. The tutor is patient and comes right to our living room. She's already built her first game in Scratch.",
    author: "Wanjiku M.",
    role: "Parent",
    category: "CBC Tech Academy",
    initial: "W",
    gradient: "from-pink-500 to-rose-600"
  }
];

// --- Memoized Sub-Component ---

const ReviewCard = memo(({ review }: { review: typeof REVIEWS[0] }) => (
  <figure className="group relative flex flex-col h-full bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 transform-gpu">
    
    {/* Top Row: Stars & Quote Icon */}
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} fill="currentColor" className="stroke-none" />
        ))}
      </div>
      <Quote 
        size={32} 
        className="text-indigo-100 dark:text-slate-800 group-hover:text-indigo-500/20 transition-colors duration-500" 
        fill="currentColor" 
      />
    </div>
    
    {/* Review Text */}
    <blockquote className="flex-grow mb-8 relative z-10">
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
        "{review.text}"
      </p>
    </blockquote>
    
    {/* Author Info */}
    <figcaption className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
      {/* Avatar Placeholder */}
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
        {review.initial}
      </div>
      
      {/* Author Details */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="font-bold text-slate-900 dark:text-white truncate">
            {review.author}
          </h4>
          <BadgeCheck size={14} className="text-blue-500 shrink-0" fill="currentColor" color="white" />
        </div>
        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5 truncate">
          {review.role}
        </div>
        <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-full inline-block">
          {review.category}
        </div>
      </div>
    </figcaption>
  </figure>
));
ReviewCard.displayName = "ReviewCard";

// --- Main Component ---

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Dynamic Background Glow (GPU Optimized) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] transform-gpu translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] transform-gpu -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800">
            <Star size={12} fill="currentColor" /> Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by Business Owners & Families
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            See how we help businesses scale and students grow through technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);