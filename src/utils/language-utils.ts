import { Language } from '../contexts/languageContext';

// Language utility functions for text management
export const getLocalizedText = (englishText: string, swedishText: string, language: Language): string => {
  return language === 'sv' ? swedishText : englishText;
};

// Helper function to get text based on language
export const getText = (texts: { en: string; sv: string }, language: Language): string => {
  return texts[language] || texts.en;
};

// Language detection utilities
export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('sv') ? 'sv' : 'en';
};

export const getStoredLanguage = (): Language | null => {
  const stored = localStorage.getItem('preferred_language');
  return stored === 'sv' || stored === 'en' ? stored : null;
};

export const getInitialLanguage = (): Language => {
  // Priority: stored preference > URL > browser > default (en)
  const stored = getStoredLanguage();
  if (stored) return stored;
  
  const urlLang = window.location.pathname.startsWith('/sv') ? 'sv' : null;
  if (urlLang) return urlLang;
  
  return detectBrowserLanguage();
};

// URL utilities
export const stripLanguagePrefix = (path: string): string => {
  return path.startsWith('/sv') ? path.substring(3) || '/' : path;
};

export const addLanguagePrefix = (path: string, language: Language): string => {
  if (language === 'sv') {
    return path.startsWith('/sv') ? path : `/sv${path}`;
  }
  return stripLanguagePrefix(path);
};

// Language-specific formatting
export const formatDate = (date: Date, language: Language): string => {
  const locale = language === 'sv' ? 'sv-SE' : 'en-US';
  return date.toLocaleDateString(locale);
};

export const formatTime = (date: Date, language: Language): string => {
  const locale = language === 'sv' ? 'sv-SE' : 'en-US';
  return date.toLocaleTimeString(locale);
};
