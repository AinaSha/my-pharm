export const apiPath = 'http://api.med-service.online/api/v1';
export const apiEndpoints = {
  signin: '/auth/token/',
  signup: '/users/',
  refresh: '/auth/token/refresh/',
  getMe: '/users/me/',
};
export const enum METHODS {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT',
}
