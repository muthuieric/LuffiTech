import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 text-center">
      <h1 className="text-9xl font-black text-slate-200 dark:text-slate-800">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mt-[-2rem] relative z-10">
        Page Not Found
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-md">
        Oops! It seems you've ventured into a digital void. This page doesn't exist or is under construction.
      </p>
      <Link 
        href="/"
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors"
      >
        <Home size={20} />
        Back Home
      </Link>
    </div>
  );
}