/**
 * Language context: manages active language ("en" | "ar"), persists the
 * choice in localStorage, and keeps <html dir/lang> in sync with the
 * selected language for correct RTL layout flow.
 */
import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

const STORAGE_KEY = 'portfolio-lang';
const LanguageContext = createContext(null);

const getInitialLang = () => {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (['ar', 'en', 'de'].includes(stored)) return stored;
    const browser = window.navigator.language?.slice(0, 2);
    return ['ar', 'en', 'de'].includes(browser) ? browser : 'en';
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }, [lang]);

    const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : l === 'ar' ? 'de' : 'en'));

    const t = translations[lang] || translations.en;

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
};
