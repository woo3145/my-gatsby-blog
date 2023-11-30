import React from 'react';
import { useArticle } from './useArticleData';
import { Link } from 'gatsby';
import { Badge } from '@/components/ui/badge';
import { ArticleCard } from '@/components/ArticleCard';

export const ArticleSection = () => {
  const articles = useArticle();

  return (
    <div className="lg:grid lg:grid-cols-4 px-8 py-8 gap-4">
      <div className="md:col-span-3">
        <h3 className="text-2xl font-semibold">Latest Posts</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-row-1 gap-4 py-6">
          {articles.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </div>
      </div>
      <div className="hidden lg:block col-span-1">
        <h3 className="text-2xl font-semibold">Tags</h3>
        <div className="flex flex-wrap gap-2 py-6">
          <Link to="/">
            <Badge variant="outline">#Typescript</Badge>
          </Link>
          <Link to="/">
            <Badge variant="outline">#Javascript</Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};
