
import React from 'react';

interface ToolHighlightProps {
  forceDisplay?: boolean;
}

const ToolHighlight: React.FC<ToolHighlightProps> = ({ forceDisplay = false }) => {
  return (
    <section className={`py-20 ${forceDisplay ? '' : 'bg-[#080b14]'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-mono rounded-full mb-4">Featured Tool</div>
            <h2 className="text-4xl font-bold text-white mb-6">JSONSV</h2>
            <p className="text-xl text-indigo-400 font-medium mb-6 italic">JSON Smart Viewer with surgical precision.</p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              JSONSV (JSON Smart Viewer) is the flagship tool of the Yakroh ecosystem. It serves as a powerful JSON editor, viewer, and comparison tool. Built with a modern React and TypeScript stack, it delivers ultra-fast data exploration without ever sending your data to a server.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                '100% Client-side processing (Privacy First)',
                'Intelligent JSON Comparison and Diff Tool',
                'Save and Restore state directly to disk',
                'Advanced recursive tree visualization',
                'Instant data type and hierarchy analysis'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <a 
              href="https://jsonsv.yakroh.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20"
            >
              Launch JSONSV
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-30"></div>
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://picsum.photos/seed/yakroh-smart/800/600" 
                alt="JSON Smart Viewer Preview" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent flex items-end p-8">
                <div>
                  <div className="text-white font-bold text-lg mb-1">Interactive Data Maps</div>
                  <div className="text-gray-400 text-sm">Compare, visualize, and persist your JSON intelligence.</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 animate-pulse">
                <div className="bg-indigo-500 w-3 h-3 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolHighlight;
