import React from 'react';
import { Check, Zap, Shield, Database, Layout, Search, Save, Clock, GripVertical } from 'lucide-react';

export const StikirohLandingSection: React.FC = () => {
    return (
        <div className="w-full bg-slate-50 dark:bg-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Column: Text & Features */}
                <div className="flex-1 space-y-8">

                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                        <span className="mr-1">✨</span> Featured
                    </div>

                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img src="/stikiroh-logo.svg" alt="Stikiroh Logo" className="w-full h-full" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                                Stikiroh Board
                            </h2>
                        </div>

                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                            Your premium, local-first ideation workspace. Capture sticky notes instantly, organize with intuitive drag-and-drop, and manage your creative flow without ever sending your content to a server.
                        </p>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-4">
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
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0">
                                    <Check className="w-5 h-5 text-green-500" strokeWidth={3} />
                                </div>
                                <span className="text-lg text-slate-700 dark:text-slate-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5">
                            Launch Stikiroh Board
                        </button>
                    </div>
                </div>

                {/* Right Column: Visual/Screenshot */}
                <div className="flex-1 w-full lg:w-auto">
                    <div className="relative group rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <img
                            src="/stikiroh-light.jpg"
                            alt="Stikiroh Board Preview"
                            className="w-full h-auto object-cover block dark:hidden transform transition-transform duration-700 hover:scale-105"
                        />
                        <img
                            src="/stikiroh-dark.jpg"
                            alt="Stikiroh Board Preview"
                            className="w-full h-auto object-cover hidden dark:block transform transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StikirohLandingSection;
