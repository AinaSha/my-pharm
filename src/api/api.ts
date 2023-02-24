import { apiPath, apiEndpoints, METHODS } from './apiPath';
import { IToken } from '../types/apiTypes';
import { getFromLocalStorage } from '../utils/utilsForm';
import { ICatigories, IcreateUser, ILogInform } from '../types/Types';

export const api = {
  async SiginInUser(email: string, password: string): Promise<IToken | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.signin}`, {
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
        console.log('SiginInUser___', data);
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
  async CreateUser(options: ILogInform): Promise<IcreateUser> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.signup}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: options.email,
          first_name: options.first_name,
          last_name: options.last_name,
          sur_name: options.sur_name,
          gender: options.gender,
          phone: options.phone,
          address: options.address,
          is_pensioner: options.is_pensioner,
          is_beneficiaries: options.is_beneficiaries,
          password: options.password,
          password_confirm: options.password_confirm,
        }),
      });
      if (response.status === 201) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Registration failed');
    }
  },
  async RefreshToken(refresh: string): Promise<IToken | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.refresh}`, {
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
      const response = await fetch(`${apiPath}${apiEndpoints.getMe}`, {
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
      const response = await fetch(`${apiPath}${apiEndpoints.getMe}`, {
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
  async UpdateUserMe(options: ILogInform): Promise<IcreateUser | number | null> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.getMe}`, {
        method: METHODS.patch,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `JWT ${getFromLocalStorage('__token')}`,
        },
        body: JSON.stringify({
          first_name: options.first_name,
          last_name: options.last_name,
          sur_name: options.sur_name,
          gender: options.gender,
          phone: options.phone,
          address: options.address,
          is_pensioner: options.is_pensioner,
          is_beneficiaries: options.is_beneficiaries,
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else if (response.status === 400) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Update user failed');
    }
  },
  async GetCatigories(): Promise<ICatigories | number | null> {
    try {
      console.log('click GetCatigories');
      const response = await fetch(`${apiPath}${apiEndpoints.catigories}`, {
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
  async GetCatigoriesChildren() {
    try {
      console.log('click GetCatigoriesChildren');
      const response = await fetch(`${apiPath}${apiEndpoints.catigoriesChildren}`, {
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
      throw new Error('Get GetCatigories Children failed');
    }
  },
};
