import { apiPath, apiEndpoints, METHODS } from './apiPath';
import { LoginForm, RegistrationForm } from '../types/apiTypes';
import { getFromLocalStorage } from '../utils/utilsForm';
import { IcreateUser, TBuyProduct } from '../types/Types';

const defaultHeaders = (headers: object) => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
};

async function fetchPost(body: object | string, endpoint: string, headers: object = {}) {
  return await fetch(`${apiPath}${endpoint}`, {
    method: 'POST',
    headers: defaultHeaders(headers),
    body: JSON.stringify(body),
  });
}

async function fetchPach(body: object | string, endpoint: string, headers: object = {}) {
  return await fetch(`${apiPath}${endpoint}`, {
    method: 'PATCH',
    headers: defaultHeaders(headers),
    body: JSON.stringify(body),
  });
}

async function fetchGetDell(endpoint: string, headers: object = {}, method: string) {
  return await fetch(`${apiPath}${endpoint}`, {
    method: method,
    headers: defaultHeaders(headers),
  });
}

export const api = {
  async registration(form: RegistrationForm) {
    const response = await fetchPost(form, apiEndpoints.registration);
    if (response.status === 204) {
      return true;
    } else {
      console.error(response.status);
    }
  },
  async login(body: LoginForm) {
    const response = await fetchPost(body, apiEndpoints.login, {});
    const data = await response.json();
    return data;
  },
  async userEdit(body: IcreateUser) {
    try {
      const response = await fetchPach(body, apiEndpoints.userEdit, {
        Authorization: `Token ${localStorage.getItem('__token')}`,
      });
      const data = await response?.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  async GetCatalogs() {
    try {
      const response = await fetchGetDell(apiEndpoints.catalogs, {}, METHODS.get);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      console.error(error);
    }
  },
  async GetCompanies() {
    try {
      const response = await fetchGetDell(apiEndpoints.manufacturers, {}, METHODS.get);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      console.error(error);
    }
  },
  async GetProducts() {
    try {
      const response = await fetchGetDell(apiEndpoints.products, {}, METHODS.get);
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      console.error(error);
    }
  },
  async GetProductsPart(ids: string) {
    try {
      const response = await fetchGetDell(
        `${apiEndpoints.products}list-by-ids/${ids}`,
        {},
        METHODS.get
      );
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      console.error(error);
    }
  },
  async ProductsInPharmacies(id: string) {
    try {
      const response = await fetchGetDell(
        `${apiEndpoints.products}${id}/${apiEndpoints.productsInPharmacies}`,
        {},
        METHODS.get
      );
      if (response.status === 200) {
        const data = await response.json();
        // console.error(data);
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      console.error(error);
    }
  },
  async OrdersCreate(body: TBuyProduct[]) {
    try {
      const response = await fetchPost(body, apiEndpoints.ordersCreate, {
        Authorization: `Token ${localStorage.getItem('__token')}`,
      });
      console.log(response);
      const data = await response?.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
