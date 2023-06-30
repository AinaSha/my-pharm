export interface User {
  name: string;
}

export interface CatalogItemProps {
  value?: string;
  href: string;
}

export interface IcreateUser {
  username: string;
  email: string;
  is_pensioner: boolean;
  is_privileged: boolean;
  phone_number: string;
  address: string;
  token?: string;
}

export interface ICatigories {
  id: number;
  parent: number;
  title: string;
}

export interface InPharmacies {
  id: string;
  name: string;
  address: string;
  city: string;
  longitude: string;
  latitude: string;
}

export interface IProduct {
  category?: {
    id: number;
    ru: string;
    kg: string;
    en: string;
  };
  characteristics?: {
    on_prescription?: string;
    before_date?: string;
    compound?: string;
    package?: string;
    purpose?: string;
    release_form?: string;
  };
  description?: string;
  discount_price: string;
  image: string;
  in_stock?: boolean;
  manufacturer?: {
    id?: number;
    name?: string;
  };
  name: string;
  price: number;
  rating?: number;
  id: string;
  appointment?: string;
  form_type?: string;
  favorites?: boolean;
  page?: string;
}

export interface Options {
  id: string;
  form: string;
  appointment: string;
  title: string;
}

export interface ISearchMainInput {
  search: string;
}

export interface IInitialAuth {
  dataUser: IcreateUser;
  successReg: boolean;
  isLoading: boolean;
  siginIn: boolean;
  isAuth: boolean;
  registration: boolean;
}

export interface CatalogListProps {
  prop: string;
  onClick?: () => void;
}

export interface IPagination {
  allPageNumbers: number;
  paginate: (
    pageNumber: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => void;
  curentPage: string;
}

export type BreadcrumbLink = {
  label: string;
  url: string;
};

export type BreadcrumbsProps = {
  homeLabel: string;
  name: string;
};

export type TBuyProduct = {
  product_id: number;
  quantity: number;
};

export type Props = {
  active: boolean;
  setActive: () => void;
};
