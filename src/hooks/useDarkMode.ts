import { useAppStore } from '@/store/appStore';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useAppStore((state) => [
    state.isDarkMode,
    state.setIsDarkMode,
  ]);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (isDarkMode) {
      body.dataset.theme = 'darkTheme';
      window.localStorage.setItem('darkMode', 'darkTheme');
    } else {
      body.dataset.theme = 'lightTheme';
      window.localStorage.setItem('darkMode', 'lightTheme');
    }
  }, [isDarkMode]);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggle, setIsDarkMode };
};
