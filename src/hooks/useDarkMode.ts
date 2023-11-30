import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('darkMode');
    return savedTheme === 'darkTheme' ? true : false;
  });

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
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggle };
};
