import { Language } from '../contexts/languageContext';

// Dynamic constants loader based on language
export const getConstants = async (language: Language) => {
  if (language === 'sv') {
    return await import('../constants/constants.sv');
  }
  return await import('../constants/constants');
};

// Synchronous version for components that need immediate access
export const getConstantsSync = (language: Language) => {
  if (language === 'sv') {
    // Import Swedish constants
    const swedishConstants = require('../constants/constants.sv');
    return swedishConstants;
  }
  // Import English constants (default)
  const englishConstants = require('../constants/constants');
  return englishConstants;
};

// Helper hook for React components
import { useLanguage } from '../contexts/languageContext';
import { useMemo } from 'react';

export const useLocalizedConstants = () => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    return getConstantsSync(language);
  }, [language]);
};
