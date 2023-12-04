import { cn } from '@/lib/utils';
import { Link } from 'gatsby';
import React from 'react';

interface NavProps {
  navItems: {
    label: string;
    url: string;
  }[];
}

export const Nav = ({ navItems }: NavProps) => {
  return (
    <nav className="text-lg font-semibold space-x-4">
      {navItems.map((navItem) => {
        return (
          <NavItem key={navItem.label} src={navItem.url} text={navItem.label} />
        );
      })}
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
