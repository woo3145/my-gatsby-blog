import React from 'react';
import { ArticleData } from '../Article/type';
import { Seo } from '@/components/Seo';
import { ArticleListHeader } from './Header';
import { ArticleList } from './ArticleList';

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
      <div className="mx-auto w-full py-20 px-4">
        <ArticleListHeader />
        <ArticleList articles={articles} />
      </div>
    </>
  );
}
