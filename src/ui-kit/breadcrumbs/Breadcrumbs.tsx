import { FC, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Path } from '../../types/translate';
import { BreadcrumbLink, BreadcrumbsProps } from '../../types/Types';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ homeLabel, name }) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { pathname } = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

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

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
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
              <span>
                {width < 769 && width > 450
                  ? link.label.length > 50
                    ? link.label.slice(0, 50).padEnd(53, '...')
                    : link.label
                  : width < 450
                  ? link.label.length > 20
                    ? link.label.slice(0, 10).padEnd(13, '...')
                    : link.label
                  : link.label}
              </span>
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
