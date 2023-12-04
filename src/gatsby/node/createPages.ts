import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { ArticleData } from '@/templates/Article/type';

// GraphQL 쿼리는 별도의 JavaScript 파일에서 가져옴
// 이는 Gatsby가 build 시 TypeScript 파일에서 정적으로 GraphQL 쿼리를 추출하는데 어려움이 있기 때문
const query = require('../../templates/Article/query');
const blogConfig = require('../../../blog-config');

const { blogSettings } = blogConfig;

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const templateDir = path.join(
    __dirname,
    '../',
    '../',
    '../',
    'src',
    'templates'
  );

  const response = await graphql<{
    allMarkdownRemark: {
      nodes: ArticleData[];
    };
  }>(query.ArticleQuery);

  const data = response.data;
  if (!data?.allMarkdownRemark || response.errors) {
    throw new Error(`Error while fetching article data, ${response.errors}`);
  }

  const articleListingPageSlug = blogSettings.path.replace(/\/\/+/g, '/');

  // Create ArticleList page
  actions.createPage({
    path: articleListingPageSlug,
    component: path.resolve(templateDir, 'ArticleList', 'index.tsx'),
    context: {
      articles: data.allMarkdownRemark.nodes,
      entityName: blogSettings.entityName,
    },
  });

  // Create pages for each individual Article
  data.allMarkdownRemark.nodes.forEach((article) => {
    reporter.info(`Creating Article page under ${article.fields.slug}`);
    actions.createPage({
      path: article.fields.slug,
      component: path.resolve(templateDir, 'Article', 'index.tsx'),
      context: {
        article: article,
        listingPagePath: articleListingPageSlug,
        entityName: blogSettings.entityName,
      },
    });
  });
};

export default createPages;
