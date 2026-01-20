"use client";

import React from 'react';
import { Laptop, MapPin } from 'lucide-react';
import Academy from '../../components/sections/Academy';

export default function AcademyPage() {
  return (
    <div className="pt-20">
      <Academy />
      
      {/* Flexible Learning Options Section */}
      <div className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">How We Teach</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We offer two flexible learning modes designed to fit your schedule and learning style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Online Option */}
            <div className="p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Laptop size={140} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-white mb-4 flex items-center gap-2">
                <Laptop className="text-indigo-600" /> Remote Learning
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                Ideal for busy students or professionals. Join live mentorship sessions via Google Meet or Zoom. 
                We provide screen recordings of every session, digital resources, and code reviews online.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/>Learn from the comfort of your home</li>
                 <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/>Flexible evening & weekend slots</li>
                 <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/>Budget-friendly option</li>
              </ul>
            </div>

            {/* Physical Option */}
            <div className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/50 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin size={140} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-orange-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="text-orange-600" /> Private One-on-One
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                Premium personalized training where we come to you. Perfect for beginners who need hands-on guidance 
                or parents who want a tutor for their kids at home.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/>We come to your location</li>
                 <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/>100% focused attention</li>
                 <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/>Hands-on hardware & typing help</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}