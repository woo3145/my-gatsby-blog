import onCreateWebpackConfig from './src/gatsby/node/onCreateWebpackConfig';
import createSchemaCustomization from './src/gatsby/node/createSchemaCustomization';
import onCreateNode from './src/gatsby/node/onCreateNode';
import createPages from './src/gatsby/node/createPages';

export {
  onCreateWebpackConfig,
  createSchemaCustomization,
  onCreateNode,
  createPages,
};

// Build flow

// onPreBootstrap
// sourceNodes    # gatsby-config에서 plugins 을 모두 로드하여 node를 만든 뒤 실행
// createSchemaCustomization # graph에 명확한 타입을 재정의 하거나 추가
// createNode # 새 node를 추가하거나 node에 필드를 추가
// createPage # 동적으로 새 페이지를 만듬, gatsby가 모두 init되고 transformation이 일어난 뒤에 실행되기 때문에 완성된 graphql 쿼리를 사용할 수 있음
// onCreateWebpackConfig # 프로젝트의 webpackConfig를 수정 (gatsby-config.ts파일은 빌드 전에 다른 부분에서 처리됨)
