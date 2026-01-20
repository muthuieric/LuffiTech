"use client";

import React from 'react';
import { 
  BookOpen, Code, Users, Check, Laptop, Palette, 
  Smartphone, Database, PenTool, Server, Bot, ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

// Improved SkillCard with clearer interaction
const SkillCard = ({ title, description, features, icon: Icon, level, tags, href = "/contact" }: any) => (
  <Link 
    href={href}
    className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 group h-full hover:-translate-y-1 relative overflow-hidden"
  >
    {/* Background Decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

    <div className="relative z-10 flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-slate-700/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <div className="flex gap-2 mt-2">
           <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
            {level}
          </span>
        </div>
      </div>
    </div>
    
    <p className="relative z-10 text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
      {description}
    </p>

    <div className="flex-grow relative z-10">
      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wide opacity-70">
        What you'll learn:
      </h4>
      <ul className="space-y-2 mb-6">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
            <Check size={14} className="text-green-500 mt-1 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Tags */}
    {tags && (
      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string, idx: number) => (
          <span key={idx} className="text-[10px] px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded font-medium border border-indigo-100 dark:border-indigo-800">
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Bottom Action Bar */}
    <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between mt-auto">
      <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
         <span className="flex items-center gap-1"><Laptop size={12} /> Online</span>
         <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
         <span className="flex items-center gap-1"><Users size={12} /> 1-on-1</span>
      </div>
      
      <div className="flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
        Start <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  </Link>
);

const Academy = () => {
  const foundations = [
    {
      title: "Digital Literacy",
      icon: BookOpen,
      level: "Essential",
      description: "The must-have starting point. Master the computer skills required in every modern office, university, or business environment.",
      features: [
        "Computer Basics & File Management",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Google Workspace & Cloud Storage",
        "Internet Research, Zoom & Email Etiquette",
        "Fast & Accurate Typing Mastery"
      ]
    },
    {
      title: "CBC Tech for Kids & Teens",
      icon: Users,
      level: "Ages 7-18",
      description: "Spark creativity early. We teach logic, coding, and digital safety in a fun, gamified way suitable for children and teenagers.",
      features: [
        "Scratch & Visual Programming",
        "Introduction to Python Coding",
        "Web Design Basics (HTML/CSS)",
        "Robotics Concepts & Logic",
        "Digital Safety & AI Awareness"
      ],
      // This ID matches the Navbar link /academy#cbc
      id: "cbc" 
    }
  ];

  const bootcampSkills = [
    {
      title: "Frontend Web Dev",
      icon: Code,
      level: "Visual",
      description: "Build the face of the internet. Learn to create responsive, interactive websites that look great on any device.",
      features: [
        "HTML5, CSS3 & Modern JavaScript",
        "React.js & Next.js Frameworks",
        "Tailwind CSS Styling",
        "Building Responsive Interfaces"
      ],
      tags: ["JavaScript", "React", "HTML/CSS"]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      level: "Logic",
      description: "Power the systems behind the apps. Learn server-side logic, how to store data, and security.",
      features: [
        "Python (Django Framework)",
        "Node.js & Express",
        "API Development & Integration",
        "Authentication & Security"
      ],
      tags: ["Python", "Node.js", "API"]
    },
    {
      title: "Mobile App Dev",
      icon: Smartphone,
      level: "Mobile",
      description: "Build apps for the world's most popular devices. Create applications that work on both Android and iOS.",
      features: [
        "React Native Fundamentals",
        "Mobile UI Components",
        "Navigation & Device Features",
        "Deploying to Play Store"
      ],
      tags: ["React Native", "Android", "iOS"]
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      level: "Analytical",
      description: "Turn raw data into business insights. Learn to manage databases, clean data, and visualize trends.",
      features: [
        "Python for Data Science",
        "SQL Database Management",
        "Pandas & NumPy Data Cleaning",
        "Data Visualization (PowerBI)"
      ],
      tags: ["Python", "SQL", "PowerBI"]
    },
    {
      title: "AI & Machine Learning",
      icon: Bot,
      level: "Advanced",
      description: "Build intelligent systems. Learn how to train models, predict outcomes, and integrate AI into applications.",
      features: [
        "Machine Learning Fundamentals",
        "Neural Networks & Deep Learning",
        "NLP & Chatbot Development",
        "Integrating AI APIs (OpenAI)"
      ],
      tags: ["Python", "TensorFlow", "AI"]
    },
    {
      title: "UI/UX Design",
      icon: PenTool,
      level: "Design",
      description: "Design apps people love. Learn how to create user-friendly interfaces before coding begins.",
      features: [
        "Figma Interface Design",
        "User Research & Wireframing",
        "Prototyping & Interaction",
        "Mobile & Web Layouts"
      ],
      tags: ["Figma", "Prototyping"]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      level: "Creative",
      description: "Communicate visually. Create stunning social media posts, logos, and posters for businesses.",
      features: [
        "Design Principles & Color Theory",
        "Canva Mastery for Speed",
        "Brand Identity Creation",
        "Marketing Visuals"
      ],
      tags: ["Canva", "Branding"]
    }
  ];

  return (
    <section id="academy" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase">
            Luffi Tech Academy
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Future-Proof Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            Practical mentorship in the technologies that define the modern world.
            Available <span className="text-indigo-600 dark:text-indigo-400 font-bold">Online</span> or <span className="text-indigo-600 dark:text-indigo-400 font-bold">One-on-One</span>.
          </p>
        </div>

        {/* Section 1: Foundations */}
        <div id="foundations" className="mb-20 scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-8 w-1.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Essential Foundations</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {foundations.map((skill: any, idx) => (
              <div key={idx} id={skill.id} className="scroll-mt-32">
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Bootcamp */}
        <div id="bootcamp" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-8 w-1.5 bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/50"></div>
             <div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Tech Mastery Bootcamp</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm">Comprehensive modules for specialized career paths.</p>
             </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bootcampSkills.map((skill, idx) => (
              <SkillCard key={idx} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academy;