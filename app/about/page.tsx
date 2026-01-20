"use client";

import React from 'react';
import Link from 'next/link';
import { Target, Lightbulb, Users, Laptop, MapPin, Rocket, Heart, Shield, Clock, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

// 1. Stat Card with Hover Lift Animation
const StatCard = ({ label, value, suffix = "" }: { label: string, value: string, suffix?: string }) => (
  <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center border border-slate-100 dark:border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
      {value}{suffix}
    </div>
    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
      {label}
    </div>
  </div>
);

// 2. Value Card with Icon Background Styles
const ValueCard = ({ icon: Icon, title, description }: any) => (
  <div className="flex gap-4 items-start group">
    <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Rocket size={16} />
              <span>Our Story & Vision</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8">
              Empowering Africa Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Accessible Technology</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
               <strong>Luffi Tech</strong> isn't just a tech company; we are a movement to demystify technology. 
               We believe that world-class IT support, software engineering, and digital education should be accessible to everyone—right at their doorstep.
            </p>
        </div>

        {/* Operational Model Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
             <div className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Clock className="text-indigo-600" /> Service Beyond Boundaries
                </h3>
                <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    In a fast-paced digital world, being tethered to a single physical location slows you down. 
                    We have adopted a <strong>dynamic, mobile-first operational model</strong> that prioritizes speed and convenience for our clients.
                  </p>
                  <p>
                    <strong>We bring the expertise to you.</strong> Instead of you wasting time commuting to a shop, our decentralized team of experts is always on the move, ready to deploy.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"/> Doorstep IT Support & Repairs.
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"/> Virtual Consultations & Remote Troubleshooting.
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"/> Lower costs passed directly to you as savings.
                    </li>
                  </ul>
                </div>
             </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">What Drives Us</h3>
            <div className="grid sm:grid-cols-1 gap-8">
              <ValueCard 
                icon={Target}
                title="Practicality Over Theory"
                description="Whether we are building a website for a client or teaching a student, we focus on what works in the real world. No fluff, just results."
              />
              <ValueCard 
                icon={Laptop}
                title="Digital Inclusion"
                description="From teaching 7-year-olds to code, to helping businesses digitize their records, we ensure no one is left behind in the digital revolution."
              />
              <ValueCard 
                icon={Heart}
                title="Customer-Centricity"
                description="We treat every project as if it were our own. Our 'One-on-One' approach ensures we understand your specific needs before we write a single line of code."
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="5" suffix="+" label="Years of Innovation" />
            <StatCard value="200" suffix="+" label="Students Mentored" />
            <StatCard value="50" suffix="+" label="Enterprise Projects" />
            <StatCard value="100" suffix="%" label="Client Satisfaction" />
          </div>
        </div>

        {/* The Team / Expertise */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
             <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Expertise</h3>
             <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
               Our team consists of full-stack engineers, data scientists, and creative designers who have worked with top tech firms. 
               We bring enterprise-level quality to local businesses.
             </p>
             <div className="grid grid-cols-2 gap-4">
                {['React & Next.js', 'Python & AI', 'Data Science', 'Cloud Infrastructure', 'Mobile App Development', 'UI/UX Design'].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 shadow-sm transition-colors cursor-default">
                    <Shield size={14} className="text-green-500" /> {skill}
                  </div>
                ))}
             </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group">
             {/* Glowing Effect behind the card */}
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10 group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-500" />
             
             <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center hover:shadow-xl transition-shadow duration-300">
                <Users size={48} className="text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Join the Academy</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                  Want to learn from the experts who build these systems? 
                  Our Academy connects you directly with our engineering team for mentorship.
                </p>
                
                <Link href="/academy">
                  <Button variant="outline" icon={ArrowRight}>
                    View Programs
                  </Button>
                </Link>
             </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-indigo-900 rounded-3xl p-12 relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Future?</h2>
              <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                Whether you are a business looking to scale or a student looking to learn, <strong>Luffi Tech</strong> is your partner in growth.
              </p>
              
              <Link href="/contact">
                <Button 
                  className="!bg-white !text-indigo-900 hover:!bg-slate-100 border-transparent shadow-lg group-hover:scale-105 transition-transform duration-200"
                >
                  Start a Conversation
                </Button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}