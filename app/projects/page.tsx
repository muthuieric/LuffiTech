"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

// --- Projects Data with Real Screenshots ---

interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  url: string;
  displayUrl: string;
  image: string;
  color: string;
  headline: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "karibu-vms",
    title: "Karibu VMS",
    tag: "Visitor Management & Facility Security",
    url: "https://www.karibuvms.com",
    displayUrl: "karibuvms.com",
    image: "/projects/karibuvms.webp",
    color: "from-blue-600 to-indigo-600",
    headline: "First impressions matter.",
  },
  {
    id: "luxe-consult",
    title: "Luxe Consult",
    tag: "Premium Real Estate Portal",
    url: "https://www.luxe-consult.com",
    displayUrl: "luxe-consult.com",
    image: "/projects/luxe-consult.webp",
    color: "from-amber-400 to-orange-500",
    headline: "Exceptional properties demand an exceptional digital showcase.",
  },
  {
    id: "amayas-kitchen",
    title: "Amaya's Kitchen",
    tag: "Culinary & Hospitality Web Experience",
    url: "https://amayas-kitchen-qazm.vercel.app/",
    displayUrl: "amayas-kitchen.vercel.app",
    image: "/projects/amayas-kitchen.webp",
    color: "from-orange-500 to-rose-600",
    headline: "We eat with our eyes first!",
  },
  {
    id: "pink-tower",
    title: "Pink Tower",
    tag: "Minimalist Interactive Web Environment",
    url: "https://pink-tower-nine.vercel.app/",
    displayUrl: "pink-tower.vercel.app",
    image: "/projects/pink-tower.webp",
    color: "from-amber-400 to-orange-500",

    headline: "A masterclass in clean, user-centered design.",
  },
  {
    id: "f-shujaa",
    title: "F-Shujaa",
    tag: "Accessible Community EdTech",
    url: "https://fshujaa.vercel.app",
    displayUrl: "fshujaa.vercel.app",
    image: "/projects/fshujaa.webp",
    color: "from-orange-500 to-rose-600",
    headline: "Education should have no boundaries.",
  },
  {
    id: "f-and-p-logistics",
    title: "F & P Logistics",
    tag: "Fleet Dispatch & Mobile Operations",
    url: "https://f-and-p-admin-gnr7.vercel.app",
    displayUrl: "f-and-p-logistics.vercel.app",
    image: "/projects/f-and-p-logistics.webp",
    color: "from-blue-600 to-indigo-700",
    headline: "Logistics is all about perfect timing, so we built a system that doesn't miss a beat.",
  },
  {
    id: "tushop",
    title: "Tushop",
    tag: "Warehouse Floor & Smart Inventory",
    url: "https://tushop-psi.vercel.app",
    displayUrl: "tushop.vercel.app",
    image: "/projects/tushop.webp",
    color: "from-emerald-600 to-teal-600",
    headline: "Bringing absolute clarity to the warehouse floor.",
  }
];

// --- Project Card Component with Real Screenshot ---

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  return (
    <article className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-7 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full overflow-hidden transform-gpu">
      
      {/* Top Corner Ambient Accent Blob */}
      <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${project.color} opacity-[0.04] rounded-bl-full group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />

      {/* Real Live Screenshot Showcase Window */}
      <div className="relative mb-6 rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner group/img">
        
        {/* macOS Browser Header Chrome */}
        <div className="px-3.5 py-2.5 bg-slate-100/95 dark:bg-slate-850/95 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[160px] sm:max-w-[200px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate">{project.displayUrl}</span>
          </div>

          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
            aria-label={`Open ${project.title} live website in a new tab`}
          >
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Real Screenshot Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <Image
            src={project.image}
            alt={`${project.title} - Real live application preview`}
            width={1280}
            height={800}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Header Info: Category Tag & Title */}
      <div className="mb-2">
        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
          {project.tag}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h2>
      </div>

      {/* Conversational Headline */}
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
        {project.headline}
      </p>

      {/* Bottom Full-Width Action Button (Direct Link To Live Deployment) */}
      <a 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3.5 rounded-2xl bg-gradient-to-r ${project.color} text-white font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 transform group-hover:translate-y-[-2px] transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/25 active:scale-95 cursor-pointer`}
      >
        <span>Visit Live Project</span> 
        <ArrowUpRight size={15} />
      </a>

    </article>
  );
});
ProjectCard.displayName = "ProjectCard";

// --- Main Projects Page Component ---

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-32 bg-[#F8FAFC] dark:bg-slate-950 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-14">
        {/* GPU Accelerated Background Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full transform-gpu pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full transform-gpu pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            Things we’ve built. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Problems we’ve solved.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Take a look around our digital workshop. From securing front desks to tracking logistics on the move, here are a few ways we’re using technology to make everyday operations feel effortless.
          </p>

        </div>
      </div>

      {/* Projects Grid: Real Screenshots, Services Card Design, Direct Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>

        {/* Bottom Collaboration Callout Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden border border-indigo-800/40 shadow-2xl">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
              Ready For Your Next Breakthrough?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-2 mb-4 leading-snug">
              Have a vision or operational problem you&apos;d like to solve?
            </h2>
            <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed mb-8 font-normal">
              Whether you need to build a new platform from the ground up, automate complex workflows, or upgrade existing systems, our engineering team in Nairobi is ready to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} />
                </button>
              </Link>

              <button
                onClick={() => window.open('https://wa.me/254702104690', '_blank')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-indigo-600/60 hover:bg-indigo-600 text-white font-bold text-sm border border-indigo-400/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
