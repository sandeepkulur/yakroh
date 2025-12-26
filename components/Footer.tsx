
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">Y</span>
              </div>
              <span className="text-lg font-bold text-white">Yakroh</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Dedicated to building the finest tools for developer productivity. Minimal, powerful, and privacy-first.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><a href="https://jsonsv.yakroh.com" target="_blank" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">JSONSV</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">AI Assistant</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Yakroh. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="flex items-center">
               <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
               Systems Operational
            </span>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
