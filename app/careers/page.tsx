import React from 'react';
import { Briefcase, Search } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-400">
          <Briefcase size={40} />
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">No Open Positions</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          We currently don't have any open roles. However, we are always on the lookout for talent. 
          Check back later or follow us on social media for updates.
        </p>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Student?</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Consider joining our Academy to build the skills we look for in future hires.
          </p>
          <Link href="/academy" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
            View Academy Programs
          </Link>
        </div>
      </div>
    </div>
  );
}