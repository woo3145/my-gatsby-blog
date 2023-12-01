import { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ArticleReadingTime {
      text: String
    }

    type MarkdownRemarkFields {
      slug: String
      readingTime: ArticleReadingTime
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: MarkdownRemarkFields
    }
    type BannerImage {
      src: File @fileByRelativePath
      alt: String
      caption: String
    }

    type Frontmatter {
      tags: [String!]!
      title: String
      description: String
      date: Date! @dateformat
      banner: BannerImage
      categories: [String]
      keywords: [String]
    }

    type Social {
      github: String
      mail: String
    }

    type SiteMetadata {
      language: String
      siteUrl: String
      title: String
      titleTemplate: String
      description: String
      author: String
      avatar: File @fileByRelativePath
      thumbnail: File @fileByRelativePath
      bio: String
      social: Social
    }

    type Image {
      src: File @fileByRelativePath
      alt: String
    }

    type HeroSubTitle {
      prefix: String
      highlight: String
      suffix: String
    }

    type HeroSocialProfiles {
      from: [String]
      showIcons: Boolean
    }

    type HeroSection {
      intro: String
      heroPhoto: Image
      image: Image
      title: String
      subtitle: HeroSubTitle
      description: String
      socialProfiles: HeroSocialProfiles
    }
  `;

  createTypes(typeDefs);
};

export default createSchemaCustomization;
