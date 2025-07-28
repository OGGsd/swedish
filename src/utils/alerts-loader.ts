import { Language } from '../contexts/languageContext';

// Dynamic alerts loader based on language
export const getAlerts = async (language: Language) => {
  if (language === 'sv') {
    return await import('../constants/alerts_constants.sv');
  }
  return await import('../constants/alerts_constants');
};

// Synchronous version for components that need immediate access
export const getAlertsSync = (language: Language) => {
  if (language === 'sv') {
    // Import Swedish alerts
    const swedishAlerts = require('../constants/alerts_constants.sv');
    return swedishAlerts;
  }
  // Import English alerts (default)
  const englishAlerts = require('../constants/alerts_constants');
  return englishAlerts;
};

// Helper hook for React components
import { useLanguage } from '../contexts/languageContext';
import { useMemo } from 'react';

export const useLocalizedAlerts = () => {
  const { language } = useLanguage();
  
  return useMemo(() => {
    return getAlertsSync(language);
  }, [language]);
};
