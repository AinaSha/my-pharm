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
  is_beneficiaries: boolean;
  is_pensioner: boolean;
}
