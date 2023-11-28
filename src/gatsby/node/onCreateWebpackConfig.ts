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
      },
    },
  });
};

export default onCreateWebpackConfig;
