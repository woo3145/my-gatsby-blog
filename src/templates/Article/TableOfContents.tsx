import React, { useEffect, useRef } from 'react';

interface Props {
  tableOfContents: string;
}

export const TableOfContents = ({ tableOfContents }: Props) => {
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tocRef.current) return;

    let lastEnteredHeadingId: string | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!tocRef.current) return;
        // 가장 최근에 화면에 진입한 헤딩을 추적
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lastEnteredHeadingId = entry.target.getAttribute('id');
          }
        });

        // 모든 목차 항목의 active 클래스 제거
        tocRef.current
          .querySelectorAll('a')
          .forEach((link) => link.classList.remove('active'));

        // 가장 최근에 화면에 진입한 헤딩의 목차 항목을 활성화
        if (lastEnteredHeadingId) {
          const activeElement = tocRef.current.querySelector(
            `a[href="#${lastEnteredHeadingId}"]`
          );
          if (activeElement) {
            activeElement.classList.add('active');
          }
        }
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    const headings = document.querySelectorAll(
      '.blog_markdown h1, .blog_markdown h2, .blog_markdown h3, .blog_markdown h4, .blog_markdown h5, .blog_markdown h6'
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return (
    <div
      className="table-of-contents"
      ref={tocRef}
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  );
};
