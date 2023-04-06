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
  catalog: number;
  discount_price: string;
  id: number;
  is_req_prescription: boolean;
  price: string;
  sale: string;
  thumbnail: string;
  title: string;
  favorites?: string;
  manufacturer?: string;
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
