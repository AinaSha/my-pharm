import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../link/link';
import './Navbar.scss';

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
            <NavLink to={link.href}>{link.label}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
