import React from 'react';

interface Props {
  html: string;
}

export const ArticleBody = ({ html }: Props) => {
  return <div className="" dangerouslySetInnerHTML={{ __html: html }} />;
};
