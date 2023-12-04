import { graphql, useStaticQuery } from 'gatsby';

export const useCategories = () => {
  const response = useStaticQuery<{
    allMarkdownRemark: {
      nodes: { id: string; frontmatter: { categories: string[] } }[];
    };
  }>(allMarkdownQuery);

  return [
    ...new Set(
      response.allMarkdownRemark.nodes
        .map((a) => a.frontmatter.categories)
        .flat()
    ),
  ];
};

const allMarkdownQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          categories
        }
      }
    }
  }
`;
