import React from 'react';
import { Link } from 'gatsby';
import { ArticleData } from '@/templates/Article/type';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Badge } from '../ui/badge';

interface Props {
  article: ArticleData;
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <Link
      to={article.fields.slug}
      className="hover:-translate-y-2 duration-300 overflow-hidden"
    >
      <article className="">
        {article.frontmatter.banner.src?.childImageSharp?.gatsbyImageData && (
          <div className="">
            <GatsbyImage
              image={
                article.frontmatter.banner.src.childImageSharp.gatsbyImageData
              }
              alt={
                article.frontmatter.banner.alt ||
                `Image for ${article.frontmatter.title}`
              }
              loading="eager"
              className="w-full aspect-video rounded-lg"
            />
          </div>
        )}
        <div className="pt-2 space-y-2">
          <h2 className="text-base font-semibold truncate">
            {article.frontmatter.title}
          </h2>
          <div className="flex text-xs text-accent-foreground">
            <span>{article.frontmatter.date}</span>
            <span> - </span>
            <span>{article.fields.readingTime.text}</span>
          </div>
          <ul className="flex gap-2">
            {article.frontmatter.categories.map((cateogry) => {
              return <Badge>{cateogry}</Badge>;
            })}
          </ul>
        </div>
      </article>
    </Link>
  );
};
