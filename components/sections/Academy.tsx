"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Code, Users, Check, Laptop, Palette, 
  Smartphone, Database, PenTool, Server, Bot, ArrowRight, 
  Sparkles, MonitorPlay, GraduationCap 
} from 'lucide-react';

// --- Static Data ---

const FOUNDATIONS = [
  {
    id: "digital-literacy",
    title: "Digital Literacy & Office",
    icon: BookOpen,
    level: "Essential",
    color: "from-emerald-500 to-teal-500",
    description: "The must-have starting point. Master the computer skills required in every modern office, university, or business environment.",
    features: ["Microsoft Office (Word, Excel, PPT)", "Google Workspace Cloud", "Internet Research & Security", "Touch Typing Mastery"]
  },
  {
    id: "cbc-kids",
    title: "CBC Tech for Kids (7-18)",
    icon: Sparkles,
    level: "Beginner",
    color: "from-orange-400 to-pink-500",
    description: "Spark creativity early. We teach logic, coding, and digital safety in a fun, gamified way suitable for children and teenagers.",
    features: ["Scratch & Visual Coding", "Intro to Python", "Robotics Concepts", "Digital Safety Awareness"]
  }
];

const BOOTCAMP_COURSES = [
  {
    title: "Frontend Engineering",
    icon: Code,
    level: "Professional",
    color: "from-blue-600 to-cyan-500",
    description: "Build the visual web. Create responsive, interactive websites that look great on any device.",
    features: ["React.js", "Tailwind CSS", "Modern JavaScript (ES6+), Typescript", "Responsive UI Design"],
    tags: ["React", "JS", "TS", "CSS"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    level: "Professional",
    color: "from-violet-600 to-purple-600",
    description: "Power the engines. Learn server-side logic, database management, and API security.",
    features: ["Python (Django/FastAPI)", "Node.js & Express", "REST & GraphQL APIs", "PostgreSQL Databases"],
    tags: ["Python", "Node", "SQL"]
  },
  {
    title: "Mobile App Dev",
    icon: Smartphone,
    level: "Professional",
    color: "from-indigo-600 to-blue-600",
    description: "Build for the pocket. Create native-feeling apps for both Android and iOS.",
    features: ["React Native", "Mobile UI Principles", "App Store Deployment", "Device Features (Camera/GPS)"],
    tags: ["iOS", "Android", "Cross-Platform"]
  },
  {
    title: "Data Science & AI",
    icon: Database,
    level: "Advanced",
    color: "from-rose-500 to-orange-500",
    description: "Turn data into gold. Learn to clean data, visualize trends, and build ML models.",
    features: ["Python for Data Science", "Pandas & NumPy", "PowerBI Visualization", "Intro to Machine Learning"],
    tags: ["Data", "AI", "Analytics"]
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    level: "Creative",
    color: "from-pink-500 to-rose-400",
    description: "Design before coding. Create user-friendly interfaces and interactive prototypes.",
    features: ["Figma Mastery", "User Research", "Wireframing", "Prototyping"],
    tags: ["Figma", "Design", "UX"]
  },
  {
    title: "Graphic Design",
    icon: Palette,
    level: "Creative",
    color: "from-amber-400 to-orange-500",
    description: "Visual communication. Create stunning social media posts, logos, and brand assets.",
    features: ["Adobe Photoshop/Illustrator", "Canva Pro Workflows", "Brand Identity", "Marketing Graphics"],
    tags: ["Branding", "Adobe", "Canva"]
  }
];

// --- Memoized Card Component (Matches Services Page Style) ---

const CourseCard = memo(({ course }: any) => {
  const Icon = course.icon;
  
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full overflow-hidden transform-gpu hover:-translate-y-1">
      
      {/* Decorative Gradient Blob */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${course.color} opacity-[0.03] rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white shadow-lg`}>
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          {course.level}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {course.title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {course.description}
      </p>

      {/* Features List */}
      <div className="mb-8 space-y-3">
        {course.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
             <Check size={14} className="text-indigo-500 mt-0.5 shrink-0" />
             {feature}
          </div>
        ))}
      </div>

      {/* Tags (Bootcamp Only) */}
      {course.tags && (
        <div className="flex gap-2 mb-6">
          {course.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Button */}
      <Link href="/contact" className="mt-auto">
        <button className={`w-full py-4 rounded-2xl bg-gradient-to-r ${course.color} text-white font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transform group-hover:translate-y-[-2px] transition-all shadow-lg active:scale-95`}>
          Enroll Now <ArrowRight size={14} />
        </button>
      </Link>
    </div>
  );
});
CourseCard.displayName = "CourseCard";

// --- Main Section Component ---

const Academy = () => {
  return (
    <section id="academy" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
       {/* Section Header */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
             <GraduationCap size={14} /> Future-Proof Skills
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Luffi Tech Academy
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Practical mentorship in the technologies that define the modern world.
          </p>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Foundations Section */}
        <div id="foundations" className="mb-24 scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 pl-2">
             <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
               <MonitorPlay size={24} />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Essential Foundations</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm">Perfect for beginners, kids, and non-technical staff.</p>
             </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {FOUNDATIONS.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* 2. Bootcamp Section */}
        <div id="bootcamp" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10 pl-2">
             <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
               <Code size={24} />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Tech Mastery Bootcamp</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm">Intensive, project-based training for careers in tech.</p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOTCAMP_COURSES.map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(Academy);