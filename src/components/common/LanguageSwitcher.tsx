import React from 'react';
import { useLanguage } from '../../contexts/languageContext';
import { Button } from '../ui/button';
import ForwardedIconComponent from './genericIconComponent';
import ShadTooltip from './shadTooltipComponent';

interface LanguageSwitcherProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '', 
  showText = true,
  size = 'md'
}) => {
  const { language, toggleLanguage, isSwedish } = useLanguage();

  const buttonSizes = {
    sm: 'h-8 px-2 text-xs',
    md: 'h-9 px-3 text-sm',
    lg: 'h-10 px-4 text-base'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const tooltipText = isSwedish 
    ? 'Växla till engelska' 
    : 'Switch to Swedish';

  const buttonText = isSwedish ? 'EN' : 'SV';
  const flagIcon = isSwedish ? '🇬🇧' : '🇸🇪';

  return (
    <ShadTooltip content={tooltipText}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className={`${buttonSizes[size]} ${className} flex items-center gap-2 hover:bg-muted`}
        data-testid="language-switcher"
      >
        <span className={iconSizes[size]} role="img" aria-label={isSwedish ? 'British flag' : 'Swedish flag'}>
          {flagIcon}
        </span>
        {showText && (
          <span className="font-medium">
            {buttonText}
          </span>
        )}
        <ForwardedIconComponent
          name="Languages"
          className={`${iconSizes[size]} opacity-60`}
        />
      </Button>
    </ShadTooltip>
  );
};

export default LanguageSwitcher;
