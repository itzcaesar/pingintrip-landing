'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
    { code: 'id', label: 'ID', flag: '🇮🇩', name: 'Indonesia' },
    { code: 'en', label: 'EN', flag: '🇺🇸', name: 'English' },
] as const;

interface LanguageSwitcherProps {
    variant?: 'compact' | 'full';
}

export function LanguageSwitcher({ variant = 'compact' }: LanguageSwitcherProps) {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on escape key
    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full h-9 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 flex items-center gap-1 font-medium transition-colors"
                aria-label={`Current language: ${currentLang.name}. Click to change language.`}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className="text-sm font-semibold tracking-wide">{currentLang.label}</span>
                <ChevronDown className={`h-3 w-3 opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 min-w-[140px]"
                        role="listbox"
                        aria-label="Select language"
                    >
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-primary/5 transition-colors ${language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700'
                                    }`}
                                role="option"
                                aria-selected={language === lang.code}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span className="text-sm">{variant === 'full' ? lang.name : lang.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
