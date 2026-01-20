"use client";

import React from 'react';
import { Laptop, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Academy from '../../components/sections/Academy';
import Button from '../../components/ui/Button'; // Assuming you have this from previous steps

export default function AcademyPage() {
  
  const handleWhatsAppInquiry = (mode: string) => {
    const message = encodeURIComponent(`Hello Luffi Tech, I am interested in the ${mode} learning option.`);
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* 1. Main Academy Listings */}
      <Academy />
      
      {/* 2. Flexible Learning Options Section */}
      <div className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">How We Teach</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We offer two flexible learning modes designed to fit your schedule and learning style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Online Option Card */}
            <div className="group p-8 rounded-3xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
              {/* Background Icon Decoration */}
              <div className="absolute -top-6 -right-6 opacity-[0.05] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500">
                <Laptop size={200} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Laptop size={28} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Remote Learning
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed h-24">
                  Ideal for busy students or professionals. Join live mentorship sessions via Google Meet. 
                  Includes screen recordings of every session, digital resources, and online code reviews.
                </p>

                <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-indigo-500"/>
                     Learn from the comfort of your home
                   </li>
                   <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-indigo-500"/>
                     Flexible evening & weekend slots
                   </li>
                   <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-indigo-500"/>
                     Budget-friendly option
                   </li>
                </ul>

                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white"
                  onClick={() => handleWhatsAppInquiry('Remote Learning')}
                  icon={ArrowRight}
                >
                  Book Online Session
                </Button>
              </div>
            </div>

            {/* Physical Option Card */}
            <div className="group p-8 rounded-3xl bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-6 -right-6 opacity-[0.05] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500">
                <MapPin size={200} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Private One-on-One
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed h-24">
                  Premium personalized training where we come to you. Perfect for beginners who need hands-on guidance, 
                  or parents who want a dedicated tutor for their kids at home.
                </p>

                <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-orange-500"/>
                     We come to your location
                   </li>
                   <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-orange-500"/>
                     100% focused attention
                   </li>
                   <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-orange-500"/>
                     Hands-on hardware & typing help
                   </li>
                </ul>

                <Button 
                   className="w-full bg-orange-600 hover:bg-orange-700 border-orange-600 text-white"
                   onClick={() => handleWhatsAppInquiry('One-on-One')}
                   icon={ArrowRight}
                >
                  Request Home Tutor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Final Call to Action Strip
      <div className="bg-slate-900 dark:bg-indigo-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure which path to take?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Talk to one of our lead instructors. We'll assess your current skills and career goals to recommend the perfect roadmap for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
            >
              <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
            </Button>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}