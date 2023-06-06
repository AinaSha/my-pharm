import { apiPath, apiEndpoints, METHODS } from './apiPath';
import { IToken } from '../types/apiTypes';
import { getFromLocalStorage } from '../utils/utilsForm';
import { ICatigories, RegistrationForm, LoginForm, IProduct } from '../types/Types';


const defaultHeaders = (headers: object) => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...headers    
  }
}


async function fetchPost(body: object, endpoint: string, headers: object = {}) {
  return await fetch(`${apiPath}${endpoint}`, {
    method: 'POST',
    headers: defaultHeaders(headers),
    body: JSON.stringify(body)
  })
} 


async function fetchGet(endpoint: string, headers: object = {}) {
  return await fetch(`${apiPath}${endpoint}`, {
    method: 'GET',
    headers: defaultHeaders(headers)
  })
} 


export const api = {

  async registration(form: RegistrationForm) {
    await fetchPost(form, apiEndpoints.registration);
  }, 

  async login(form: LoginForm) {
    let response = await fetchPost(form, apiEndpoints.login);
    let data = await response.json();
    console.log(data.key);
    return data.key;
  },


  async SignInUser(email: string, password: string): Promise<IToken | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.login}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        return data;

      } else if (response.status === 403) {
        return response.status;

      } else {
        return await Promise.reject(new Error(response.statusText));
      }

    } catch (error) {
      throw new Error('Authorization failed');
    }
  },





  async RefreshToken(refresh: string): Promise<IToken | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.login}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh,
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Authorization failed');
    }
  },

  async getUserMe() {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.login}`, {
        // нельзя, только post
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `JWT ${getFromLocalStorage('__token')}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Authorization failed');
    }
  },
  async DeleteUserMe() {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.login}`, {
        method: METHODS.delete,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `JWT ${getFromLocalStorage('__token')}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 401) {
        throw new Error(`${response.status}`);
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('user deleted...');
    }
  },
  // async UpdateUserMe(options: ILogInform): Promise<IcreateUser | number | null> {
  //   try {
  //     const response = await fetch(`${apiPath}${apiEndpoints.login}`, {
  //       method: METHODS.patch,
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization: `JWT ${getFromLocalStorage('__token')}`,
  //       },
  //       body: JSON.stringify({
  //         first_name: options.first_name,
  //         // last_name: options.last_name,
  //         // sur_name: options.sur_name,
  //         // gender: options.gender,
  //         // phone: options.phone,
  //         // address: options.address,
  //         // is_pensioner: options.is_pensioner,
  //         // is_beneficiaries: options.is_beneficiaries,
  //       }),
  //     });
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       return data;
  //     } else if (response.status === 400) {
  //       return response.status;
  //     } else {
  //       return await Promise.reject(new Error(response.statusText));
  //     }
  //   } catch (error) {
  //     throw new Error('Update user failed');
  //   }
  // },
  async GetCatalogs(): Promise<ICatigories | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.catalogs}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Get Catigories failed');
    }
  },
  async GetCompanies(): Promise<ICatigories | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.manufacturers}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Get Products failed');
    }
  },
  // async GetCompaniesPharmacies(): Promise<ICatigories | number | null> {
  //   try {
  //     const response = await fetch(
  //       `${apiPath}${apiEndpoints.manufacturers}1${apiEndpoints.pharmacies}`,
  //       {
  //         method: METHODS.get,
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       return data;
  //     } else if (response.status === 403) {
  //       return response.status;
  //     } else {
  //       return await Promise.reject(new Error(response.statusText));
  //     }
  //   } catch (error) {
  //     throw new Error('Get Products failed');
  //   }
  // },
  // async GetPharmacies(): Promise<ICatigories | number | null> {
  //   try {
  //     const response = await fetch(`${apiPath}${apiEndpoints.pharmacies}`, {
  //       method: METHODS.get,
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       return data;
  //     } else if (response.status === 403) {
  //       return response.status;
  //     } else {
  //       return await Promise.reject(new Error(response.statusText));
  //     }
  //   } catch (error) {
  //     throw new Error('Get Products failed');
  //   }
  // },
  async GetProducts(): Promise<IProduct[] | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.products}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Get Products failed');
    }
  },
  async GetProductsPart(ids: string): Promise<IProduct[] | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.products}list-by-ids/${ids}`, {
        method: METHODS.get,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Get Products failed');
    }
  },
};
