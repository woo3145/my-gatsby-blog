import React, { ReactNode } from 'react';
import { Header } from '../Header';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Button } from '../ui/button';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, toggle } = useDarkMode();
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
