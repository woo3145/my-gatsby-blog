const blogConfig = {
  siteMetadata: {
    language: 'en',
    siteUrl: '',
    title: '',
    titleTemplate: '%s · Blog',
    description: '',
    author: '',
    avatar: '',
    bio: '',
    social: {
      github: '',
      mail: '',
    },
  },
  siteConfiguration: {
    logo: { text: '' },
    navigation: {
      header: [
        { label: 'Home', url: '/' },
        { label: 'Posts', url: '/posts' },
      ],
      footer: [],
    },
    // 추가 기능 온/오프
    featureToggles: {},
  },

  // Used in manifest.json
  manifestSettings: {
    favicon: './contents/images/favicon.png', // Path is relative to the root
    siteName: 'Blog Starter Cat Bread',
    shortName: 'Cat Bread Starter',
    startUrl: '/',
    backgroundColor: '#FFFFFF',
    themeColor: '#000000',
    display: 'minimal-ui',
  },

  blogSettings: {
    entityName: 'Posts', // Article List Page Title
    path: '/posts', // Article List Page URL
  },
};

export default blogConfig;
