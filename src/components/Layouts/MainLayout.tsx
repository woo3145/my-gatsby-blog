import React, { ReactNode } from 'react';
import { Header } from '../Header';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-screen-xl mx-auto">{children}</main>
    </div>
  );
};
