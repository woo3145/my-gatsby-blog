import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/Layouts/MainLayout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Button>Button</Button>
    </MainLayout>
  );
};

export default IndexPage;
