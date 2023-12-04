import { IGatsbyImageData } from 'gatsby-plugin-image';

const query = require('./query.js');

export interface ArticleData {
  id: string;
  html: string;
  fields: {
    slug: string;
    readingTime: {
      text: string;
    };
  };
  frontmatter: {
    title: string;
    description: string | null;
    date: string;
    categories: string[];
    keywords: string[] | null;
    banner: {
      alt: string | null;
      src: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      } | null;
      caption: string | null;
    };
  };
}

// gatsby-node 파일 에서 TypeScript 파일에 정적으로 GraphQL 쿼리를 추출하는데 어려움이 있기 때문에
// js 파일로 분리하지 않으면 에러가 발생하여 분리
export const ArticleQuery = query.ArticleQuery;
