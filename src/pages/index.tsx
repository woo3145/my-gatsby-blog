import * as React from 'react';
import type { PageProps } from 'gatsby';
import { HeroSection } from '@/sections/HeroSection';
import { ArticleSection } from '@/sections/ArticleSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <HeroSection />
      <ArticleSection />
    </>
  );
};

export default IndexPage;
