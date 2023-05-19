// export const apiPath = 'https://mypharm.fly.dev';
export const apiPath = 'http://95.163.237.113:8000/';
export const apiEndpoints = {
  signin: '/auth/token/',
  signup: '/users/',
  refresh: '/auth/token/refresh/',
  getMe: '/users/me/',
  catalogs: 'categories/',
  manufacturers: '/manufacturers/',
  products: 'products/',
};
export const enum METHODS {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
  put = 'PUT',
}
