import { cn } from '@/lib/utils';
import { Link } from 'gatsby';
import React from 'react';

export const Nav = () => {
  return (
    <nav className="text-lg font-semibold space-x-4">
      <NavItem src="/" text="Home" />
      <NavItem src="/posts" text="Posts" />
    </nav>
  );
};

const NavItem = ({ src, text }: { src: string; text: string }) => {
  return (
    <Link
      to={src}
      activeClassName="!text-primary"
      className={cn(
        'inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-accent-foreground/60 transition-colors',
        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
        'disabled:pointer-events-none disabled:opacity-50'
      )}
    >
      {text}
    </Link>
  );
};
