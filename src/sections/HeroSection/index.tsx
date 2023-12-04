import React from 'react';
import { useHeroData } from './useHeroData';
import { GatsbyImage } from 'gatsby-plugin-image';

export const HeroSection = () => {
  const hero = useHeroData();

  return (
    <section className="py-16 max-w-screen-lg flex flex-col items-start mx-auto px-8 gap-4 sm:flex-row sm:items-center sm:gap-12">
      {hero.heroPhoto.src.childImageSharp?.gatsbyImageData && (
        <div className="rounded-full w-1/3">
          <GatsbyImage
            image={hero.heroPhoto.src.childImageSharp.gatsbyImageData}
            alt={hero.heroPhoto.alt || `Image for Hero`}
            loading="eager"
            className="rounded-full"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="text-4xl sm:text-5xl flex items-center sm:gap-4 font-bold">
          {hero.intro && <span>{hero.intro}</span>}
          {hero.image?.src.childImageSharp?.gatsbyImageData && (
            <GatsbyImage
              image={hero.image?.src.childImageSharp?.gatsbyImageData}
              alt={hero.image.alt || `Image for IntroIcon`}
              loading="eager"
            />
          )}
        </div>
        {hero.title && (
          <h1 className="text-2xl sm:text-4xl font-bold">{hero.title}</h1>
        )}
        {hero.subtitle && (
          <h2 className="text-xl sm:text-3xl font-bold">
            {hero.subtitle.prefix && <span>{hero.subtitle.prefix}</span>}
            {hero.subtitle.highlight && (
              <span
                style={{
                  boxShadow: 'inset 0 -0.5em 0 hsl(var(--primary) / .2)',
                  textDecoration: 'none',
                  transition: 'box-shadow .3s ease-out',
                }}
              >
                {hero.subtitle.highlight}
              </span>
            )}
            {hero.subtitle.suffix && <span>{hero.subtitle.suffix}</span>}
          </h2>
        )}
        {hero.description && (
          <p className="text-base sm:text-lg">{hero.description}</p>
        )}
      </div>
    </section>
  );
};
