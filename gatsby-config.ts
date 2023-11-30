import type { GatsbyConfig } from 'gatsby';
import blogConfig from './blog-config';

const { siteUrl, manifestSettings } = blogConfig;

const config: GatsbyConfig = {
  siteMetadata: siteUrl ? { siteUrl: siteUrl } : {},
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: manifestSettings.siteName,
        short_name: manifestSettings.shortName,
        start_url: manifestSettings.startUrl,
        background_color: manifestSettings.backgroundColor,
        theme_color: manifestSettings.themeColor,
        display: manifestSettings.display,
        icon: manifestSettings.favicon,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
        jsFrontmatterEngine: false,
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: './contents/',
      },
      __key: 'contents',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },

    // 'gatsby-plugin-google-gtag',
  ],
};

export default config;
