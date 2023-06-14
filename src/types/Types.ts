export interface User {
  name: string;
}

export interface CatalogItemProps {
  value?: string;
  href: string;
}

export interface ILogInform {
  email: string;
  first_name: string;
  last_name: string;
  sur_name: string;
  gender: string;
  phone: number;
  address: string;
  is_pensioner: boolean;
  is_beneficiaries: boolean;
  password: string;
  password_confirm: string;
}

export interface IcreateUser {
  id?: string | undefined;
  email: string;
  first_name: string;
  last_name: string;
  sur_name: string;
  gender: string;
  phone: string;
  address: string;
  refresh: string;
  access: string;
  is_beneficiaries: boolean;
  is_pensioner: boolean;
}

export interface ICatigories {
  id: number;
  parent: number;
  title: string;
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
  exp: number;
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
