import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { HeroSection } from '@/components/HeroSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <HeroSection />
    </MainLayout>
  );
};

export default IndexPage;
