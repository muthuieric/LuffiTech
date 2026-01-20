"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "I was struggling with network issues at my home office. The Luffi Tech team came over within hours, fixed the wiring, and set up a robust Wi-Fi mesh system. Highly professional!",
      author: "Michael K.",
      role: "Business Consultant",
      category: "IT Support"
    },
    {
      text: "My 10-year-old daughter loves the Saturday coding sessions. The tutor is patient and comes right to our living room. She's already built her first game in Scratch.",
      author: "Wanjiku M.",
      role: "Parent",
      category: "CBC Tech Academy"
    },
    {
      text: "The web dev mentorship was a game-changer. Unlike college theory, we built real e-commerce apps. I got my first freelance gig just two months after finishing.",
      author: "Brian O.",
      role: "Junior Developer",
      category: "Bootcamp Student"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Trusted by Families & Businesses</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Don't just take our word for it.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative border border-slate-200 dark:border-slate-700 flex flex-col"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-700 group-hover:text-indigo-50 dark:group-hover:text-indigo-900/20 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 relative z-10 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{review.author}</div>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                    {review.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;