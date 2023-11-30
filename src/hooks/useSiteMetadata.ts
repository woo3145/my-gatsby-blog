import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface SiteMetadata {
  language: string;
  siteUrl: string;
  title: string;
  titleTemplate: string;
  description: string;
  author: string;
  avatar?: { childImageSharp?: { gatsbyImageData?: IGatsbyImageData } };
  bio: string;
  social: {
    github: string;
    mail: string;
  };
}

export const useSiteMetadata = () => {
  const data =
    useStaticQuery<AllSettingsQueryResult<{ siteMetadata: SiteMetadata }>>(
      siteMetadataQuery
    );
  return data.allContentsJson.nodes[0].siteMetadata;
};

export const siteMetadataQuery = graphql`
  query {
    allContentsJson {
      nodes {
        siteMetadata {
          author
          avatar {
            childImageSharp {
              gatsbyImageData(height: 100, width: 100)
            }
          }
          bio
          description
          language
          siteUrl
          title
          titleTemplate
          social {
            github
            mail
          }
        }
      }
    }
  }
`;
