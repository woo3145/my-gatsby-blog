import { SiteConfiguration } from '@/hooks/useSiteConfiguration';
import { SiteMetadata } from '@/hooks/useSiteMetadata';
import { create } from 'zustand';

type AppState = {
  categories: string[];
  siteConfiguration: SiteConfiguration;
  siteMetadata: SiteMetadata;
};
type AppAction = {
  setCategories: (categories: AppState['categories']) => void;
  setSiteConfiguration: (siteConfiguration: SiteConfiguration) => void;
  setSiteMetadata: (siteMetadata: SiteMetadata) => void;
};

const defaultConfig: SiteConfiguration = {
  featureToggles: {
    useDarkModeToggle: true,
  },
  logo: {
    text: '',
  },
  navigation: {
    header: [{ label: '', url: '/' }],
  },
  utterances: {
    repo: '',
    type: '',
  },
};
const defaultMetadata: SiteMetadata = {
  language: '',
  siteUrl: '',
  title: '',
  titleTemplate: '',
  description: '',
  author: '',
  avatar: undefined,
  thumbnail: undefined,
  bio: '',
  social: {
    github: '',
    mail: '',
  },
};

export const useAppStore = create<AppState & AppAction>((set) => ({
  categories: [],
  siteConfiguration: defaultConfig,
  siteMetadata: defaultMetadata,
  setCategories: (categories) => set(() => ({ categories: categories })),
  setSiteConfiguration: (siteConfiguration) =>
    set(() => ({ siteConfiguration: siteConfiguration })),
  setSiteMetadata: (siteMetadata) =>
    set(() => ({ siteMetadata: siteMetadata })),
}));
