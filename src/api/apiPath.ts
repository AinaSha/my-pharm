export const apiPath = 'http://95.163.237.113/api/';
export const apiEndpoints = {
  auth: 'auth/',
  // лучше ключ переименовать в registration
  signin: 'registration/', // при регистрации (создание юзера)
  resend_email: 'resend-email/', // создать электронную почту
  verify_email: 'verify-email/', // проверка подлинности почты
  // ===
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
