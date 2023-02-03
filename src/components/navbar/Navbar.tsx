import { FC } from 'react';

import { links } from '../link/link';

type Link = {
  label: string;
  href: string;
};

export const Navbar: FC = () => {
  return (
    <ul className="menu-list">
      {links.map((link: Link) => {
        return (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        );
      })}
    </ul>
  );
};
