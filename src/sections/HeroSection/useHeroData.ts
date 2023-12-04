import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface HeroData {
  title: string;
  intro: string;
  description: string;
  heroPhoto: {
    alt: string;
    src: { childImageSharp?: { gatsbyImageData?: IGatsbyImageData } };
  };
  image?: {
    alt: string;
    src: { childImageSharp?: { gatsbyImageData?: IGatsbyImageData } };
  };
  socialProfiles: {
    from: string[];
    showIcons: boolean;
  };
  subtitle: {
    highlight: string;
    suffix: string;
    prefix: string;
  };
}

export const useHeroData = () => {
  const result =
    useStaticQuery<AllHeroQueryResult<{ HeroSection: HeroData }>>(
      heroSectionQuery
    );

  return result.allHeroJson.nodes[0].HeroSection;
};

const heroSectionQuery = graphql`
  query {
    allHeroJson {
      nodes {
        HeroSection {
          title
          intro
          description
          heroPhoto {
            alt
            src {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1)
              }
            }
          }
          socialProfiles {
            from
            showIcons
          }
          subtitle {
            highlight
            suffix
            prefix
          }
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 48, aspectRatio: 1)
              }
            }
          }
        }
      }
    }
  }
`;
