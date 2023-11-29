import React from 'react';
import { ArticleData } from '../Article/type';

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
    <div>
      <div>{entities}</div>
      <div>{articles.length}</div>
    </div>
  );
}
