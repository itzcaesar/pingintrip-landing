'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import idTranslations from '@/locales/id.json';
import enTranslations from '@/locales/en.json';

type Language = 'id' | 'en';
type TranslationValue = string | string[] | { [key: string]: TranslationValue };
type Translations = { [key: string]: TranslationValue };

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string | string[];
}

const translations: Record<Language, Translations> = {
    id: idTranslations,
    en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'pingintrip-language';

function getNestedValue(obj: Translations, path: string): string | string[] {
    const keys = path.split('.');
    let current: TranslationValue = obj;

    for (const key of keys) {
        if (current && typeof current === 'object' && !Array.isArray(current) && key in current) {
            current = current[key];
        } else {
            return path; // Return the key if not found
        }
    }

    if (typeof current === 'string' || Array.isArray(current)) {
        return current;
    }

    return path;
}

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>('id');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load saved language from localStorage on mount
        const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
        if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage);
        }
        setMounted(true);
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    }, []);

    const t = useCallback((key: string): string | string[] => {
        return getNestedValue(translations[language], key);
    }, [language]);

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: 'id', setLanguage, t: (key) => getNestedValue(translations.id, key) }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
