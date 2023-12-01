import * as React from 'react';
import type { PageProps } from 'gatsby';
import { HeroSection } from '@/sections/HeroSection';
import { ArticleSection } from '@/sections/ArticleSection';
import { Seo } from '@/components/Seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Seo title="Gatsby Theme - Cheese" />
      <HeroSection />
      <ArticleSection />
    </>
  );
};

export default IndexPage;
