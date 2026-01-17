import React from 'react';

export const StikirohLandingSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-100 dark:bg-[#161617] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Text & Features */}
                    <div className="lg:w-1/2">

                        {/* Badge */}
                        <div className="mb-4">
                            <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">Featured</span>
                        </div>

                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                            <img src="/stikiroh-logo.svg" alt="Stikiroh Logo" className="w-12 h-12" />
                            <h2 className="text-4xl font-semibold text-gray-900 dark:text-[#f5f5f7] transition-colors duration-300">Stikiroh Board</h2>
                        </div>
                        <p className="text-gray-700 dark:text-[#86868b] text-lg mb-8 leading-relaxed transition-colors duration-300">
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
                                "Drag & Drop organization for Ideas and Tags",
                                "Dynamic sorting and prioritization"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-900 dark:text-[#f5f5f7] transition-colors duration-300">
                                    <svg className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <a
                            href="https://stiki.yakroh.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium rounded-full transition-all text-base"
                        >
                            Launch Stikiroh Board
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
