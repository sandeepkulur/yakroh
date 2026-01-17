import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Youtube } from 'lucide-react';

interface MobileMenuProps {
    currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ currentPath }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/tools', label: 'Tools' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-600 dark:text-[#f5f5f7] hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <div
                className={`fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-[#1c1c1e] shadow-2xl z-50 transform transition-transform duration-300 ease-out border-l border-gray-200 dark:border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="h-14 flex items-center justify-end px-4 border-b border-gray-100 dark:border-white/5">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-gray-500 dark:text-[#86868b] hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 py-8 px-6 space-y-6 overflow-y-auto">
                        <nav className="flex flex-col space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`text-lg font-medium transition-colors ${(link.href === '/' && currentPath === '') ||
                                            ('/' + currentPath === link.href)
                                            ? 'text-green-600 dark:text-green-400'
                                            : 'text-gray-900 dark:text-[#f5f5f7]'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/yakroh" className="text-gray-600 dark:text-[#86868b] hover:text-black dark:hover:text-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://www.youtube.com/@yakroh" className="text-gray-600 dark:text-[#86868b] hover:text-[#ff0000] transition-colors">
                                    <Youtube className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
