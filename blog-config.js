module.exports = {
  siteUrl: 'https://woo3145-blog.netlify.app', // Used for sitemap generation
  // Used in manifest.json
  manifestSettings: {
    favicon: './contents/images/favicon.png', // Path is relative to the root
    siteName: 'Woo3145 blog',
    shortName: 'Woo3145 blog',
    startUrl: 'https://woo3145-blog.netlify.app',
    backgroundColor: '#FFFFFF',
    themeColor: '#000000',
    display: 'minimal-ui',
  },

  blogSettings: {
    entityName: 'Posts', // Article List Page Title
    path: '/posts', // Article List Page URL
  },
};
