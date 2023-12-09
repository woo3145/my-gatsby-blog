import { useDarkMode } from '@/hooks/useDarkMode';
import { useAppStore } from '@/store/appStore';
import * as React from 'react';

const UtterancesContainer = () => {
  const { isDarkMode } = useDarkMode();
  const {
    siteConfiguration: { utterances },
  } = useAppStore();

  return (
    <>
      <div className={isDarkMode ? '' : 'h-auto hidden'}>
        <Utterances
          repository={utterances.repo}
          type={utterances.type}
          theme="github-dark"
        />
      </div>
      <div className={isDarkMode ? 'h-auto hidden' : ''}>
        <Utterances
          repository={utterances.repo}
          type={utterances.type}
          theme="github-light"
        />
      </div>
    </>
  );
};

interface UtterancesProps {
  theme: string;
  repository: string;
  type: string;
}

const Utterances = ({ theme, repository, type }: UtterancesProps) => {
  console.log(theme, repository, type);
  if (!repository) {
    return;
  }
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', repository);
        scriptElem.setAttribute('issue-term', type);
        scriptElem.setAttribute('theme', theme);
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default UtterancesContainer;
