import { FC } from 'react';

interface catalogItem {
  catalogItem: {
    item: string;
    link: string;
  };
}

export const RenderCatalog: FC<catalogItem> = (prop: catalogItem) => {
  return (
    <li>
      <a href={prop.catalogItem.link}>{prop.catalogItem.item}</a>
    </li>
  );
};
