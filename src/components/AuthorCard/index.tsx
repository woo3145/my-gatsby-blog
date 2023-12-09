import React from 'react';
import { useAppStore } from '@/store/appStore';
import { GatsbyImage } from 'gatsby-plugin-image';

export function AuthorCard(): React.ReactElement {
  const {
    siteMetadata: { author, avatar, bio },
  } = useAppStore();
  return (
    <div className="flex flex-col py-8 px-4 md:flex-row md:gap-8 md:items-center">
      {avatar?.childImageSharp?.gatsbyImageData ? (
        <GatsbyImage
          image={avatar.childImageSharp.gatsbyImageData}
          alt={author}
          className="rounded-full w-24 h-24 shrink-0"
        />
      ) : null}
      <div className="space-y-2">
        <span className="font-semibold">
          Written By{' '}
          <span
            style={{
              boxShadow: 'inset 0 -0.5em 0 hsl(var(--primary) / .5)',
              textDecoration: 'none',
              transition: 'box-shadow .3s ease-out',
            }}
          >
            {author}
          </span>
        </span>
        <p className="text-foreground/70">{bio}</p>
      </div>
    </div>
  );
}
