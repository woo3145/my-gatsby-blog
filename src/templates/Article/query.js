module.exports = {
  ArticleQuery: `
  query {
    allMarkdownRemark {
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
                gatsbyImageData(width: 768, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`,
};
