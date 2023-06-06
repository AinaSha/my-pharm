export const apiPath = 'http://localhost:8000/api/';

export const apiEndpoints = {

  login:        'auth/login/',
  registration: 'auth/registration/',

  catalogs:     'categories/',
  manufacturers: '/manufacturers/',
  products:      'products/',
};

export const enum METHODS {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
  put = 'PUT',
}
