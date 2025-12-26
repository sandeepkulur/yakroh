
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ToolHighlight from './components/ToolHighlight';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'tools' | 'ai'>('home');

  useEffect(() => {
    // Basic SEO improvement via dynamic title
    document.title = `Yakroh | ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} - 10x Dev Productivity`;
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-500/30">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow pt-16">
        {activeTab === 'home' && (
          <>
            <Hero />
            <Features />
            <ToolHighlight />
          </>
        )}
        
        {activeTab === 'tools' && (
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold mb-8 gradient-text inline-block">The Yakroh Toolbox</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <ToolHighlight forceDisplay />
               <div className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">More Tools Coming Soon</h3>
                  <p className="text-gray-400 max-w-sm">We are building high-performance CLI utilities, API visualizers, and productivity enhancers to keep you in the flow.</p>
                  <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">Notify Me</button>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="container mx-auto px-6 py-12 h-[calc(100vh-140px)] flex flex-col">
            <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Yakroh AI Assistant</h2>
            <p className="text-gray-400 mb-6">Ask for regex help, schema generation, or code architectural advice.</p>
            <GeminiAssistant />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
