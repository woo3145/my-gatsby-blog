import React from 'react';
import { ArticleData } from '../Article/type';
import { Seo } from '@/components/Seo';
import { ArticleListHeader } from './Header';
import { ArticleList } from './ArticleList';
import { useLocation } from '@reach/router';

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
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filter = params.get('filter');

  const filteredArticle = filter
    ? articles.filter((a) => a.frontmatter.categories.includes(filter))
    : articles;

  return (
    <>
      <Seo title={`All ${entities}`} useTitleTemplate={true} />
      <div className="mx-auto w-full py-20 px-4">
        <ArticleListHeader filter={filter} totalPost={filteredArticle.length} />
        <ArticleList articles={filteredArticle} />
      </div>
    </>
  );
}
