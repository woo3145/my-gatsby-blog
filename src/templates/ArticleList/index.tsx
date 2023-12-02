import React from 'react';
import { ArticleData } from '../Article/type';
import { Seo } from '@/components/Seo';

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
    <>
      <Seo title={`All ${entities}`} useTitleTemplate={true} />
      <div className="">
        <div>{entities}</div>
        <div>{articles.length}</div>
      </div>
    </>
  );
}
