import React from 'react';
import { useLanguage } from '../../contexts/languageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import ForwardedIconComponent from './genericIconComponent';

interface LanguageOption {
  code: 'en' | 'sv';
  name: string;
  nativeName: string;
  flag: string;
}

const languageOptions: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  },
  {
    code: 'sv',
    name: 'Swedish',
    nativeName: 'Svenska',
    flag: '🇸🇪'
  }
];

interface LanguageDropdownProps {
  className?: string;
  align?: 'start' | 'center' | 'end';
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ 
  className = '',
  align = 'end'
}) => {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-9 px-3 ${className} flex items-center gap-2 hover:bg-muted`}
          data-testid="language-dropdown-trigger"
        >
          <span role="img" aria-label={`${currentLanguage?.name} flag`}>
            {currentLanguage?.flag}
          </span>
          <span className="font-medium">
            {currentLanguage?.code.toUpperCase()}
          </span>
          <ForwardedIconComponent
            name="ChevronDown"
            className="h-3 w-3 opacity-60"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-48">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() => setLanguage(option.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              language === option.code ? 'bg-muted' : ''
            }`}
            data-testid={`language-option-${option.code}`}
          >
            <span role="img" aria-label={`${option.name} flag`}>
              {option.flag}
            </span>
            <div className="flex flex-col">
              <span className="font-medium">{option.name}</span>
              <span className="text-xs text-muted-foreground">
                {option.nativeName}
              </span>
            </div>
            {language === option.code && (
              <ForwardedIconComponent
                name="Check"
                className="h-4 w-4 ml-auto text-primary"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
