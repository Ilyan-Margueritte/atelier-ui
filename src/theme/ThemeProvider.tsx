import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import type { ThemeContextValue, ThemeMode, ThemeProviderProps, ResolvedTheme } from './theme.types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'atelier-ui-theme',
  attribute = 'data-theme',
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    } catch {
      // Ignore localStorage read errors
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  useEffect(() => {
    const root = document.documentElement;

    const getSystemTheme = (): ResolvedTheme => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const active = theme === 'system' && enableSystem ? getSystemTheme() : (theme === 'dark' ? 'dark' : 'light');
    setResolvedTheme(active);
    root.setAttribute(attribute, active);

    if (theme === 'system' && enableSystem) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => {
        const nextTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(nextTheme);
        root.setAttribute(attribute, nextTheme);
      };
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme, attribute, enableSystem]);

  const setTheme = (newTheme: ThemeMode) => {
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch {
      // Ignore localStorage write errors
    }
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an Atelier UI ThemeProvider');
  }
  return context;
}
