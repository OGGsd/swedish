import React from 'react';
import { useLanguage } from '../../contexts/languageContext';

interface LocalizedTextProps {
  en: string;
  sv: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// Component for inline text localization
export const LocalizedText: React.FC<LocalizedTextProps> = ({ 
  en, 
  sv, 
  className = '',
  as: Component = 'span'
}) => {
  const { isSwedish } = useLanguage();
  
  return (
    <Component className={className}>
      {isSwedish ? sv : en}
    </Component>
  );
};

// Hook for getting localized text
export const useLocalizedText = () => {
  const { isSwedish } = useLanguage();
  
  return (en: string, sv: string) => isSwedish ? sv : en;
};

export default LocalizedText;
