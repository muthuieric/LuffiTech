import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Modern Dark Background */}
    <div className="absolute inset-0 bg-slate-900">
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
    </div>
    
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
        One Partner. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Infinite Possibilities.</span>
      </h2>
      <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        We are bridging the gap between talent and technology. Whether you need a system built or want to learn how to build one, eDS is your home.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div className="bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/10">
          <Button 
            className="w-full sm:w-auto px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-500 border-none"
            onClick={() => window.location.href = '/contact'}
          >
            Hire Us for a Project
          </Button>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/10">
          <Button 
            className="w-full sm:w-auto px-8 py-4 text-lg bg-white !text-indigo-900 hover:bg-slate-100 border-none"
            onClick={() => window.location.href = '/academy'}
          >
            Join the Academy
          </Button>
        </div>
      </div>

      <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-400">
         <div className="flex items-center gap-2">
           <CheckCircle size={16} className="text-green-400" /> Free Consultations
         </div>
         <div className="flex items-center gap-2">
           <CheckCircle size={16} className="text-green-400" /> 100% Satisfaction Guarantee
         </div>
         <div className="flex items-center gap-2">
           <CheckCircle size={16} className="text-green-400" /> Nairobi-Wide Coverage
         </div>
      </div>
    </div>
  </section>
);

export default CTA;