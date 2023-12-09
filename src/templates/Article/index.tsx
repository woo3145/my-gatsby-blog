import React from 'react';
import { ArticleData } from './type';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Badge } from '@/components/ui/badge';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { ArticleBody } from './ArticleBody';
import { Seo } from '@/components/Seo';
import { AuthorCard } from '@/components/AuthorCard';
import { Separator } from '@/components/ui/separator';

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
  const { frontmatter, fields } = article;

  return (
    <article className="max-w-screen-md mx-auto py-8 px-4">
      <Seo
        title={article.frontmatter.title}
        description={article.frontmatter.description || undefined}
        useTitleTemplate={true}
      />
      <Link to="/posts">
        <Badge variant="secondary">
          <ChevronLeftIcon />
          all Posts
        </Badge>
      </Link>
      <div className="flex gap-1 font-semibold text-accent-foreground text-sm pt-4 pb-2">
        {frontmatter.categories.join(' / ')}
      </div>
      <h2 className="text-3xl font-bold">{frontmatter.title}</h2>
      <div className="pt-4 pb-8 text-sm text-foreground/80">
        {frontmatter.date} - {fields.readingTime.text}
      </div>
      {frontmatter.banner && frontmatter.banner.src && (
        <GatsbyImage
          image={frontmatter.banner.src.childImageSharp.gatsbyImageData}
          alt={frontmatter.banner.alt || `Image for ${frontmatter.title}`}
          className="aspect-video w-full rounded-lg"
        />
      )}
      <p className="text-accent-foreground/50 text-right">
        {frontmatter.banner.caption}
      </p>
      <ArticleBody html={article.html} />
      <Separator />
      <AuthorCard />
    </article>
  );
}
