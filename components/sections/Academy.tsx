"use client";

import React from 'react';
import { 
  BookOpen, Code, Users, Check, Laptop, Palette, 
  Smartphone, Database, PenTool, Server, Bot 
} from 'lucide-react';

const SkillCard = ({ title, description, features, icon: Icon, level, tags }: any) => (
  <div className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 group h-full cursor-pointer" onClick={() => window.location.href = '/contact'}>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{title}</h3>
        <div className="flex gap-2 mt-2">
           <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
            {level}
          </span>
        </div>
      </div>
    </div>
    
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
      {description}
    </p>

    <div className="flex-grow">
      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        Key Skills & Tools:
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

    {/* Languages / Tags */}
    {tags && (
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string, idx: number) => (
          <span key={idx} className="text-[10px] px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded font-medium">
            {tag}
          </span>
        ))}
      </div>
    )}

    {/* Availability Badge */}
    <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
      <span className="flex items-center gap-1"><Laptop size={12} /> Online</span>
      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
      <span className="flex items-center gap-1"><Users size={12} /> One-on-One</span>
    </div>
  </div>
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
      ]
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
      tags: ["JavaScript", "TypeScript", "React", "HTML/CSS"]
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
      tags: ["Python", "Django", "Node.js", "TypeScript"]
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
      tags: ["React Native", "JavaScript", "TypeScript"]
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
        "Data Visualization (PowerBI/Matplotlib)"
      ],
      tags: ["Python", "SQL", "Pandas", "PowerBI"]
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
      tags: ["Python", "TensorFlow", "Scikit-learn", "AI"]
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
      tags: ["Figma", "Design Thinking", "Prototyping"]
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
      tags: ["Canva", "Branding", "Typography"]
    }
  ];

  return (
    <section id="academy" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">eDS Academy</h2>
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
             <div className="h-8 w-1.5 bg-green-500 rounded-full"></div>
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Essential Foundations</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {foundations.map((skill, idx) => (
              <SkillCard key={idx} {...skill} />
            ))}
          </div>
        </div>

        {/* Section 2: Bootcamp */}
        <div id="bootcamp" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-8 w-1.5 bg-indigo-600 rounded-full"></div>
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