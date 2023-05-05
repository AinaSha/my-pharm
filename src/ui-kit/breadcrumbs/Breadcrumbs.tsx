import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';

type BreadcrumbLink = {
  label: string;
  url: string;
};

type BreadcrumbsProps = {
  homeLabel: string;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ homeLabel }) => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  const links: BreadcrumbLink[] = [{ label: homeLabel, url: '/' }];
  let currentUrl = '/';
  pathSegments.forEach((segment) => {
    currentUrl += `${segment}/`;
    links.push({ label: segment, url: currentUrl });
  });
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {links.map((link, index) => (
          <li
            key={link.url}
            className={`breadcrumb-item${index === links.length - 1 ? ' active' : ''}`}
          >
            {index === links.length - 1 ? (
              <span>{link.label}</span>
            ) : (
              <Link to={link.url} className="breadcrubs-link">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
