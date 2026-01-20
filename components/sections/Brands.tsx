import React from 'react';

// You can use any icon set you prefer. 
// If you don't have lucide-react, you can replace these with your own SVGs or icons.
const Brands = () => {
  const brands = [
    { name: "AcmeCorp", icon: "A" },
    { name: "GlobalTech", icon: "G" },
    { name: "Nebula", icon: "N" },
    { name: "Vertex", icon: "V" },
    { name: "Orbit", icon: "O" },
    { name: "Flux", icon: "F" },
  ];

  return (
    <section className="py-12 border-y border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          Trusted by 500+ innovative teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 group cursor-pointer">
              {/* Placeholder Icon Logic */}
              <div className="w-8 h-8 bg-gray-200 dark:bg-slate-800 rounded flex items-center justify-center text-gray-600 dark:text-slate-400 font-bold group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {brand.icon}
              </div>
              <span className="font-bold text-lg text-gray-700 dark:text-slate-300 group-hover:text-indigo-900 dark:group-hover:text-white transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;