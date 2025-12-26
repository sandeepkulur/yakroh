
import React from 'react';

interface HeaderProps {
  activeTab: 'home' | 'tools' | 'ai';
  setActiveTab: (tab: 'home' | 'tools' | 'ai') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-lg">Y</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">yakroh.com</span>
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
          <button 
            onClick={() => setActiveTab('ai')}
            className={`text-sm font-medium transition-colors ${activeTab === 'ai' ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`}
          >
            AI Assistant
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
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-indigo-600/20">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
