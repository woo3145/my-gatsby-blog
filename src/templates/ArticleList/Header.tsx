import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'gatsby';
import { useAppStore } from '@/store/appStore';

interface Props {
  filter: string | null;
  totalPost: number;
}

export const ArticleListHeader = ({ filter, totalPost }: Props) => {
  const categories = useAppStore((state) => state.categories);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center space-y-3 py-12">
        <h3 className="text-5xl font-semibold"># {filter ? filter : 'All'}</h3>
        <p className="text-foreground/60 text-lg">posts {totalPost}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => {
          const isSeleced = category === filter;
          return (
            <Link
              key={category}
              to={
                isSeleced
                  ? `${location.pathname}?filter=`
                  : `${location.pathname}?filter=${category}`
              }
            >
              <Button
                className="uppercase"
                variant={isSeleced ? 'default' : 'outline'}
              >
                {category}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
