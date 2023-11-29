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
  `;

  createTypes(typeDefs);
};

export default createSchemaCustomization;
