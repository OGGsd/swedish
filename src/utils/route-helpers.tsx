import React from 'react';
import { Route } from 'react-router-dom';
import { LanguageContextWrapper } from '../contexts/LanguageContextWrapper';

// Helper function to create both English and Swedish routes
export const createDualLanguageRoute = (
  path: string,
  element: React.ReactElement,
  additionalProps?: any
) => {
  return [
    // English route (default)
    <Route 
      key={`en-${path}`}
      path={path} 
      element={
        <LanguageContextWrapper>
          {element}
        </LanguageContextWrapper>
      } 
      {...additionalProps} 
    />,
    // Swedish route with /sv prefix
    <Route 
      key={`sv-${path}`}
      path={`/sv${path}`} 
      element={
        <LanguageContextWrapper>
          {element}
        </LanguageContextWrapper>
      } 
      {...additionalProps} 
    />
  ];
};

// Helper to wrap existing route structure with language support
export const withLanguageSupport = (routes: React.ReactElement[]) => {
  return routes.map((route, index) => {
    // Clone the route and wrap with language context
    return React.cloneElement(route, {
      key: `lang-${index}`,
      element: route.props.element ? (
        <LanguageContextWrapper>
          {route.props.element}
        </LanguageContextWrapper>
      ) : undefined
    });
  });
};
