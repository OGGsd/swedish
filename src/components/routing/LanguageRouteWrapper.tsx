import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContextWrapper } from '../../contexts/LanguageContextWrapper';

interface LanguageRouteWrapperProps {
  children: React.ReactNode;
}

// Component that handles language routing logic
export const LanguageRouteWrapper: React.FC<LanguageRouteWrapperProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has a stored language preference
    const storedLanguage = localStorage.getItem('preferred_language');
    const currentPath = location.pathname;
    
    // If user has Swedish preference but is on English route, redirect
    if (storedLanguage === 'sv' && !currentPath.startsWith('/sv')) {
      const newPath = `/sv${currentPath}`;
      navigate(newPath, { replace: true });
    }
    // If user has English preference but is on Swedish route, redirect
    else if (storedLanguage === 'en' && currentPath.startsWith('/sv')) {
      const newPath = currentPath.substring(3) || '/';
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <LanguageContextWrapper>
      {children}
    </LanguageContextWrapper>
  );
};
