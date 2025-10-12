'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppConfig, AccentColor } from '@/lib/config/app-config';

interface ThemeContextType {
  isDarkMode: boolean;
  accentColor: AccentColor;
  setDarkMode: (isDark: boolean) => void;
  setAccentColor: (color: AccentColor) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(AppConfig.theme.defaultDarkMode);
  const [accentColor, setAccentColor] = useState<AccentColor>(
    AppConfig.availableAccentColors[0] // Purple as default
  );

  // Load theme settings from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    const savedAccentColor = localStorage.getItem('accentColor');
    
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
    
    if (savedAccentColor) {
      const color = AppConfig.availableAccentColors.find(
        c => c.value === savedAccentColor
      );
      if (color) {
        setAccentColor(color);
      }
    }
  }, []);

  // Save theme settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor.value);
  }, [accentColor]);

  const setDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  const resetTheme = () => {
    setIsDarkMode(AppConfig.theme.defaultDarkMode);
    setAccentColor(AppConfig.availableAccentColors[0]);
  };

  const value: ThemeContextType = {
    isDarkMode,
    accentColor,
    setDarkMode,
    setAccentColor,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
