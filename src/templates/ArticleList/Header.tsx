import React from 'react';

import { useLocation } from '@reach/router';
import { Button } from '@/components/ui/button';
import { Link } from 'gatsby';

export const ArticleListHeader = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center space-y-3 py-12">
        <h3 className="text-5xl font-semibold"># Tag</h3>
        <p className="text-foreground/60 text-lg">posts 3</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {['typescript', 'javascript', 'nest', 'react', 'next'].map(
          (category) => {
            return (
              <Link
                key={category}
                to={`${location.pathname.slice(0, -1)}?filter=${category}`}
              >
                <Button
                  className="uppercase"
                  variant={
                    category === params.get('filter') ? 'default' : 'outline'
                  }
                >
                  {category}
                </Button>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};
