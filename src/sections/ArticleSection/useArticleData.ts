import { ArticleData } from '@/templates/Article/type';
import { graphql, useStaticQuery } from 'gatsby';

export const useArticle = () => {
  const result =
    useStaticQuery<AllMarkDownRemarkQueryResult<ArticleData>>(ArticlesQuery);

  return result.allMarkdownRemark.nodes;
};

const ArticlesQuery = graphql`
  query {
    allMarkdownRemark(limit: 6, sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
          readingTime {
            text
          }
        }
        id
        html
        frontmatter {
          title
          description
          date
          categories
          keywords
          banner {
            alt
            caption
            src {
              childImageSharp {
                gatsbyImageData(width: 660, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
