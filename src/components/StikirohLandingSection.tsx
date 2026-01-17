import React from 'react';

export const StikirohLandingSection: React.FC = () => {
    return (
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-transparent transition-colors duration-300 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Left Column: Text & Features */}
                    <div className="lg:w-1/2">

                        {/* Badge */}
                        <div className="mb-6">
                            <span className="text-sm font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 px-4 py-1.5 rounded-full">Featured Product</span>
                        </div>

                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-white dark:bg-[#1c1c1e] rounded-xl shadow-lg flex items-center justify-center border border-gray-100 dark:border-white/10 p-2">
                                <img src="/stikiroh-logo.svg" alt="Stikiroh Logo" className="w-full h-full" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Stikiroh Board</h2>
                        </div>
                        <p className="text-gray-600 dark:text-[#a1a1a6] text-lg mb-8 leading-relaxed transition-colors duration-300 text-pretty">
                            Your premium, local-first ideation workspace. Capture sticky notes instantly, organize with intuitive drag-and-drop, and manage your creative flow without ever sending your content to a server.
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-4 mb-10">
                            {[
                                "100% Client-side (Privacy First) - Your content stays yours",
                                "Instant Capture with intelligent #hashtag auto-tagging",
                                "Save and Restore sessions directly to disk (JSON File)",
                                "Visual Kanban-lite board with Grid & List views",
                                "Transactional Review System with safe Revert & Apply",
                                "Smart Search & Advanced Filtering by Status/Tags",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-[#f5f5f7] transition-colors duration-300">
                                    <svg className="w-5 h-5 mr-3 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <a
                            href="https://stiki.yakroh.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium rounded-full transition-all text-base shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5"
                        >
                            Launch Stikiroh Board
                            <span className="ml-2">→</span>
                        </a>
                    </div>

                    {/* Right Column: Visual/Screenshot */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 group bg-gray-200 dark:bg-[#1d1d1f] transition-colors duration-300">
                            <img
                                src="/stikiroh-light.jpg"
                                alt="Stikiroh Board Preview"
                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 dark:hidden"
                            />
                            <img
                                src="/stikiroh-dark.jpg"
                                alt="Stikiroh Board Preview"
                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StikirohLandingSection;
