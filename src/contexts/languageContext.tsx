import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isSwedish: boolean;
  toggleLanguage: () => void;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Detect language from URL path
  const detectLanguageFromPath = (): Language => {
    return location.pathname.startsWith('/sv') ? 'sv' : 'en';
  };

  const [language, setLanguageState] = useState<Language>(detectLanguageFromPath);

  // Update language when URL changes
  useEffect(() => {
    const detectedLang = detectLanguageFromPath();
    if (detectedLang !== language) {
      setLanguageState(detectedLang);
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Store preference in localStorage
    localStorage.setItem('preferred_language', lang);
    
    // Navigate to the appropriate URL
    const currentPath = location.pathname;
    let newPath: string;
    
    if (lang === 'sv') {
      // Add /sv prefix if not already there
      newPath = currentPath.startsWith('/sv') ? currentPath : `/sv${currentPath}`;
    } else {
      // Remove /sv prefix if present
      newPath = currentPath.startsWith('/sv') ? currentPath.substring(3) || '/' : currentPath;
    }
    
    if (newPath !== currentPath) {
      navigate(newPath, { replace: true });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  const getLocalizedPath = (path: string): string => {
    if (language === 'sv') {
      return path.startsWith('/sv') ? path : `/sv${path}`;
    }
    return path.startsWith('/sv') ? path.substring(3) || '/' : path;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    isSwedish: language === 'sv',
    toggleLanguage,
    getLocalizedPath,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
