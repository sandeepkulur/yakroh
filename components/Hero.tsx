
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 animate-float">
          <span className="mr-2">✨</span>
          <span>Redefining Developer Productivity</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
          Tools that help you <br />
          <span className="gradient-text">stay in the zone.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Yakroh builds ultra-focused utilities for engineers. From visualizing complex JSON structures to AI-assisted coding, we cut the noise and let you build.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center shadow-xl">
            Explore Toolbox
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <a 
            href="https://jsonsv.yakroh.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center"
          >
            Try JSONSV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
