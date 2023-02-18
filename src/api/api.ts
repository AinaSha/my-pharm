import { apiPath, apiEndpoints, METHODS } from './apiPath';
import { IToken } from '../types/apiTypes';
import { getFromLocalStorage } from '../utils/utilsForm';

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
          Authorization: `Bearer ${getFromLocalStorage('__token')}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
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
};
