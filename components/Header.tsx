
import React from 'react';

interface HeaderProps {
  activeTab: 'home' | 'tools';
  setActiveTab: (tab: 'home' | 'tools') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <img src="/logo.svg" alt="Yakroh Logo" className="w-full h-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">Yakroh</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => setActiveTab('home')}
            className={`text-sm font-medium transition-colors ${activeTab === 'home' ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('tools')}
            className={`text-sm font-medium transition-colors ${activeTab === 'tools' ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`}
          >
            Tools
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://jsonsv.yakroh.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-400"
          >
            jsonsv.yakroh.com →
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
