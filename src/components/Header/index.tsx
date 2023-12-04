import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Nav } from '../Nav';
import { useAppStore } from '@/store/appStore';

export const Header = () => {
  const { siteMetadata, siteConfiguration } = useAppStore();

  return (
    <header className="w-full py-3 bg-background">
      <div className="max-w-screen-xl px-4 mx-auto flex items-center justify-between">
        <Logo avatar={siteMetadata.avatar} text={siteConfiguration.logo.text} />
        <Nav navItems={siteConfiguration.navigation.header} />
      </div>
    </header>
  );
};

const Logo = ({
  avatar,
  text,
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
        {text}
      </Link>
    </div>
  );
};
