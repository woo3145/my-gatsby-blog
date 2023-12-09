import { useDarkMode } from '@/hooks/useDarkMode';
import { useAppStore } from '@/store/appStore';
import React, { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <SyncLoader
        color="#FACC15"
        aria-label="Loading Spinner"
        data-testid="loader"
        className="border-primary"
      />
    </div>
  );
};

const UtterancesContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();
  const {
    siteConfiguration: { utterances },
  } = useAppStore();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={isLoading ? 'h-0 overflow-hidden' : ''}>
        <div className={isDarkMode ? '' : 'hidden'}>
          <Utterances
            repository={utterances.repo}
            type={utterances.type}
            theme="github-dark"
          />
        </div>
        <div className={isDarkMode ? 'hidden' : ''}>
          <Utterances
            repository={utterances.repo}
            type={utterances.type}
            theme="github-light"
          />
        </div>
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
