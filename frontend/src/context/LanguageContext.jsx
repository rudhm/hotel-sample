import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, languages } from '../config/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('gulab-lodge-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    } else {
      // Check browser language preference
      const browserLanguage = navigator.language.startsWith('hi') ? 'hi' : 'en';
      setLanguage(browserLanguage);
    }
    setIsLoaded(true);
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('gulab-lodge-language', lang);
    }
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
