export const apiPath = 'http://95.163.237.113/api/';
export const apiEndpoints = {
  login: 'auth/login/',
  registration: 'auth/registration/',
  catalogs: 'categories/',
  manufacturers: '/manufacturers/',
  products: 'products/',
  productsInPharmacies: 'available_pharmacies/',
  ordersCreate: 'orders/create/',
};
export const enum METHODS {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE',
  put = 'PUT',
}
