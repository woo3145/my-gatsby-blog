import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'gatsby';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Nav } from '../Nav';
import { useSiteConfiguration } from '@/hooks/useSiteConfiguration';

export const Header = () => {
  const siteMetadata = useSiteMetadata();
  const siteConfiguration = useSiteConfiguration();

  return (
    <header className="w-full py-3">
      <div className="max-w-screen-xl px-4 mx-auto flex items-center justify-between">
        <Logo avatar={siteMetadata.avatar} text={siteMetadata.title} />
        <Nav navItems={siteConfiguration.navigation.header} />
      </div>
    </header>
  );
};

const Logo = ({
  avatar,
}: {
  avatar?: { childImageSharp?: { gatsbyImageData?: IGatsbyImageData } };
  text: string;
}) => {
  return (
    <div className="flex items-center text-3xl">
      {avatar?.childImageSharp?.gatsbyImageData && (
        <GatsbyImage
          image={avatar.childImageSharp.gatsbyImageData}
          alt={`Image for Logo`}
          className="w-12 h-12"
        />
      )}
      <Link
        to="/"
        className="text-primary hover:text-primary/80 transition-colors duration-300"
      >
        bread
      </Link>
    </div>
  );
};
