import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Button } from '@/components/ui/button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div>
        <Button>Button</Button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
