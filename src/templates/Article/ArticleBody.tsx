import React from 'react';
import { ArticleData } from './type';
import { TableOfContents } from './TableOfContents';

interface Props {
  article: ArticleData;
}

export const ArticleBody = ({ article }: Props) => {
  return (
    <div className="blog_markdown">
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
      <TableOfContents tableOfContents={article.tableOfContents} />
    </div>
  );
};
