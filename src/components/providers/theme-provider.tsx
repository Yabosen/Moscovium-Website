"use client";

import { createContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { hexToHsl } from '@/lib/utils';

export type Theme = "dark" | "light";

export interface CustomColors {
  primary?: string;
  accent?: string;
  background?: string;
}

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  customColors: CustomColors;
  setCustomColors: (colors: Partial<CustomColors>) => void;
  clearCustomColors: () => void;
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "moscovium-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => defaultTheme);
  const [customColors, setCustomColorsState] = useState<CustomColors>({});

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) {
      setThemeState(storedTheme);
    }
    
    const storedColors = localStorage.getItem(`${storageKey}-colors`);
    if (storedColors) {
      setCustomColorsState(JSON.parse(storedColors));
    }
  }, [storageKey]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    const activeColors: Record<string, string> = {};
    for (const key in customColors) {
      const colorKey = key as keyof CustomColors;
      const colorValue = customColors[colorKey];
      if (colorValue && /^#([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6,8})$/.test(colorValue)) {
        activeColors[`--${colorKey}`] = hexToHsl(colorValue);
      }
    }

    const propertiesToManage = ['--primary', '--accent', '--background'];
    propertiesToManage.forEach(prop => {
      if (activeColors[prop]) {
        root.style.setProperty(prop, activeColors[prop]);
      } else {
        root.style.removeProperty(prop);
      }
    });

  }, [theme, customColors]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const setCustomColors = (colors: Partial<CustomColors>) => {
    const newColors = { ...customColors, ...colors };
    localStorage.setItem(`${storageKey}-colors`, JSON.stringify(newColors));
    setCustomColorsState(newColors);
  };

  const clearCustomColors = () => {
    localStorage.removeItem(`${storageKey}-colors`);
    setCustomColorsState({});
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      customColors,
      setCustomColors,
      clearCustomColors,
    }),
    [theme, customColors, setTheme, toggleTheme, setCustomColors, clearCustomColors]
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
