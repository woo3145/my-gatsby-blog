import { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
}) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
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
      bio: String
      social: Social
    }

  `;

  createTypes(typeDefs);
};

export default createSchemaCustomization;
