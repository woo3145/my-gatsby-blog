import React from 'react';
import { ArticleData } from './type';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ArticleTemplateProps {
  pageContext: {
    article: ArticleData;
    listingPagePath: string;
    entityName?: string;
  };
}

export default function ArticleTemplate({
  pageContext: { article, listingPagePath, entityName },
}: ArticleTemplateProps): React.ReactElement {
  const { frontmatter } = article;
  return (
    <div>
      <div>Article</div>
      {frontmatter.banner && frontmatter.banner.src && (
        <GatsbyImage
          image={frontmatter.banner.src.childImageSharp.gatsbyImageData}
          alt={frontmatter.banner.alt || `Image for ${frontmatter.title}`}
        />
      )}
      <p>{frontmatter.title}</p>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </div>
  );
}
