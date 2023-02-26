export interface TAuthUser {
  email: string;
  password: string;
}

export type IToken = {
  access: string;
  refresh: string;
};

export type DecodedToken = {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
};
