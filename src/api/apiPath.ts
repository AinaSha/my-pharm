export const apiPath = 'https://mypharm.fly.dev';
export const apiEndpoints = {
  signin: '/auth/token/',
  signup: '/users/',
  refresh: '/auth/token/refresh/',
  getMe: '/users/me/',
  catalogs: '/categories/',
  manufacturers: '/manufacturers/',
  products: '/products/',
};
export const enum METHODS {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
  put = 'PUT',
}
