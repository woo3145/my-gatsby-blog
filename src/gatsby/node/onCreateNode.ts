import { GatsbyNode, Node } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import * as path from 'path';
import readingTime from 'reading-time';
import slugify from 'slugify';

const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const articleNode: any = node;

    // markdownRemark에 slug와 readingTime 필드 추가
    actions.createNodeField({
      node,
      name: 'slug',
      value: createSlug(articleNode, getNode),
    });
    actions.createNodeField({
      node,
      name: 'readingTime',
      value: readingTime(articleNode.rawMarkdownBody),
    });
  }
};

const createSlug = (
  node: Node & Record<string, unknown>,
  getNode: (this: void, id: string) => Node | undefined
) => {
  const contentDirectory = path.join('.', 'contents');
  const filePath = createFilePath({
    node,
    getNode,
    basePath: contentDirectory,
  });
  const dirName = filePath.replace(/^\/articles/g, '');

  return slugify(dirName, { remove: /[*+~.()'"!:@]/g });
};

export default onCreateNode;
