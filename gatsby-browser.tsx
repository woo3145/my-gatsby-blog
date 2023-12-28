import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { MainLayout } from './src/components/Layouts/MainLayout';

import './src/styles/global.css';
import 'prismjs/themes/prism-solarizedlight.css';
import './src/styles/markdown.css';
import 'katex/dist/katex.min.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <MainLayout>{element}</MainLayout>;
};
