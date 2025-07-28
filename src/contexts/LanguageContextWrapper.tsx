import React, { ReactNode } from 'react';
import { LanguageProvider } from './languageContext';

interface LanguageContextWrapperProps {
  children: ReactNode;
}

// Separate wrapper for language context that can be used within router
export const LanguageContextWrapper: React.FC<LanguageContextWrapperProps> = ({ children }) => {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
};
