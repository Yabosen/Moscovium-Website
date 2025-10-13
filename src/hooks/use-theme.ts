"use client";

import { ThemeProviderContext, type ThemeProviderState } from '@/components/providers/theme-provider';
import { useContext } from 'react';

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
