import React from 'react';
import { ArticleData } from '../Article/type';
import { ArticleCard } from '@/components/ArticleCard';

interface Props {
  articles: ArticleData[];
}

export const ArticleList = ({ articles }: Props) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};
