const THEME_KEY = 'portfolio-theme';

export const getStoredTheme = (): 'light' | 'dark' | null => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return null;
  } catch (error) {
    console.error('Error reading theme from localStorage:', error);
    return null;
  }
};

export const setStoredTheme = (theme: 'light' | 'dark'): void => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
};

export const getSystemPreference = (): 'light' | 'dark' => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light';
  }

  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  } catch (error) {
    console.error('Error checking system preference:', error);
    return 'light';
  }
};
