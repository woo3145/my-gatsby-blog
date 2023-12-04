import React, { ReactNode, useEffect } from 'react';
import { Header } from '../Header';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '../ui/button';
import { useAppStore } from '@/store/appStore';
import { useCategories } from '@/hooks/useCategories';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { useSiteConfiguration } from '@/hooks/useSiteConfiguration';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, toggle } = useDarkMode();
  const { setCategories, setSiteConfiguration, setSiteMetadata } =
    useAppStore();

  const categories = useCategories();
  const siteMetadata = useSiteMetadata();
  const siteConfiguration = useSiteConfiguration();

  useEffect(() => {
    setCategories(categories);
    setSiteConfiguration(siteConfiguration);
    setSiteMetadata(siteMetadata);
  }, []);

  return (
    <div className="bg-background">
      <Header />
      <div
        style={{ position: 'fixed', bottom: 40, right: 40, cursor: 'pointer' }}
        onClick={toggle}
      >
        <Button variant="ghost" className="w-12 h-12 p-0">
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
      <main className="w-full max-w-screen-xl min-h-full mx-auto">
        {children}
      </main>
    </div>
  );
};
