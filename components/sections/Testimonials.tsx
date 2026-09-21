"use client";

import React, { memo } from 'react';
import { Quote, Star, BadgeCheck, MapPin } from 'lucide-react';

// --- Authentic Client Review Data (Clean, Authentic, No Stock Photos) ---

const REVIEWS = [
  {
    text: "Before Luffi Tech, our weekend rushes were chaotic with manual M-Pesa payment confirmations. They built an automated Daraja integration that confirms transactions instantly and saved our operations over 12 hours every week. Honest, responsive, and easy to communicate with.",
    author: "Sarah K.",
    role: "Restaurant Owner & General Manager",
    location: "Westlands, Nairobi",
    category: "M-Pesa Automation",
    initial: "SK",
    badgeBg: "bg-indigo-600 text-white"
  },
  {
    text: "Finding an engineering team that speaks plain business logic without pushing bloated corporate scopes is rare. Luffi Tech built our cloud platform with excellent speed and uptime, and they remain our trusted development partners whenever we roll out new modules.",
    author: "David O.",
    role: "Startup Founder & CEO",
    location: "Nairobi, Kenya",
    category: "Web Application & Cloud",
    initial: "DO",
    badgeBg: "bg-purple-600 text-white"
  },
  {
    text: "My 10-year-old daughter was spending passive screen time on tablets until we enrolled her in Luffi Academy. Her tutor comes right to our living room on Saturdays with a clear curriculum. She has already coded three interactive games in Scratch and Python.",
    author: "Wanjiku M.",
    role: "Parent & Educator",
    location: "Kilimani, Nairobi",
    category: "Tech Mentorship",
    initial: "WM",
    badgeBg: "bg-slate-800 text-white dark:bg-slate-700"
  }
];

// --- Memoized Review Card with Dignified Monogram Badges ---

const ReviewCard = memo(({ review }: { review: typeof REVIEWS[0] }) => (
  <figure className="group relative flex flex-col h-full bg-white dark:bg-slate-900 p-8 sm:p-9 rounded-[2.2rem] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-500 transform-gpu">
    
    {/* Top Row: Rating & Quote Accent */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} fill="currentColor" className="stroke-none" />
        ))}
      </div>
      <Quote 
        size={28} 
        className="text-indigo-200 dark:text-slate-800 group-hover:text-indigo-500/30 transition-colors duration-500" 
        fill="currentColor" 
      />
    </div>
    
    {/* Review Text */}
    <blockquote className="flex-grow mb-8 relative z-10">
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base">
        &ldquo;{review.text}&rdquo;
      </p>
    </blockquote>
    
    {/* Author Information */}
    <figcaption className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
      {/* Refined Monogram Badge */}
      <div className={`w-12 h-12 rounded-2xl ${review.badgeBg} flex items-center justify-center font-bold text-sm tracking-wider shadow-sm shrink-0`}>
        {review.initial}
      </div>
      
      {/* Author Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="font-bold text-slate-900 dark:text-white text-base truncate">
            {review.author}
          </h4>
          <BadgeCheck size={16} className="text-indigo-600 shrink-0" fill="currentColor" color="white" />
        </div>
        
        <div className="text-xs font-medium text-slate-600 dark:text-slate-400 truncate mb-1">
          {review.role}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin size={11} className="text-slate-400" /> {review.location}
          </span>
          <span>•</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {review.category}
          </span>
        </div>
      </div>
    </figcaption>
  </figure>
));
ReviewCard.displayName = "ReviewCard";

// --- Main Component ---

const Testimonials = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#F8FAFC] dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] transform-gpu translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] transform-gpu -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Trusted by Founders, Business Owners & Families
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Real feedback from clients who partner with Luffi Tech for custom software development, integrations, and training.
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