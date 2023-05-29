import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Path } from '../../types/translate';
import { BreadcrumbLink, BreadcrumbsProps } from '../../types/Types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ homeLabel, name }) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  const links: BreadcrumbLink[] = [{ label: translate.path[homeLabel as keyof Path], url: '/' }];
  let currentUrl = '/';
  pathSegments.forEach((segment) => {
    currentUrl += `${segment}/`;
    links.push({
      label: translate.path[segment as keyof Path] ? translate.path[segment as keyof Path] : name,
      url: currentUrl,
    });
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
