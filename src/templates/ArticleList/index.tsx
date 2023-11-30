import React from 'react';
import { ArticleData } from '../Article/type';
import { MainLayout } from '@/components/Layouts/MainLayout';

interface ArticleListingTemplateProps {
  pageContext: {
    articles: ArticleData[];
    entityName?: string;
  };
}

export default function ArticleListingTemplate({
  pageContext: { articles, entityName },
}: ArticleListingTemplateProps): React.ReactElement {
  const entities = entityName ?? 'Articles';

  return (
    <MainLayout>
      <div>{entities}</div>
      <div>{articles.length}</div>
    </MainLayout>
  );
}
