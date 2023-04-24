export const apiPath = 'http://api.med-service.online/api/v1';
export const apiEndpoints = {
  signin: '/auth/token/',
  signup: '/users/',
  refresh: '/auth/token/refresh/',
  getMe: '/users/me/',
  catalogs: '/catalogs/',
  catigoriesChildren: '/categories/children/',
  companies: '/companies/',
  pharmacies: '/pharmacies/',
  products: '/products/',
};
export const enum METHODS {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
  put = 'PUT',
}
