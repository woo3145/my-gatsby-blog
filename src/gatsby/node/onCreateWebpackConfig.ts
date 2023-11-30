import { GatsbyNode } from 'gatsby';
import * as path from 'path';

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, '../../components'),
        '@/lib/utils': path.resolve(__dirname, '../../lib/utils'),
        '@/hooks': path.resolve(__dirname, '../../hooks'),
        '@/sections': path.resolve(__dirname, '../../sections'),
        '@/templates': path.resolve(__dirname, '../../templates'),
      },
    },
  });
};

export default onCreateWebpackConfig;
