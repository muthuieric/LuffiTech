import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "I was struggling with network issues at my home office. The eDS team came over within hours, fixed the wiring, and set up a robust Wi-Fi mesh system. Highly professional!",
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
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Trusted by Families & Businesses</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Don't just take our word for it.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow relative border border-slate-100 dark:border-slate-700 flex flex-col">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10 italic leading-relaxed flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{review.author}</div>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{review.category}</div>
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