import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { HeroSection } from '@/sections/HeroSection';
import { ArticleSection } from '@/sections/ArticleSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ArticleSection />
    </MainLayout>
  );
};

export default IndexPage;
