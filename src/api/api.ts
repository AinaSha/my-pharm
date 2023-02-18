import { apiPath, apiEndpoints, METHODS } from './apiPath';
import { IToken } from '../types/apiTypes';

export const api = {
  async SiginInUser(email: string, password: string): Promise<IToken | number | null> {
    try {
      console.log('response', `${apiPath}${apiEndpoints.signin}`);
      const response = await fetch(`http://api.med-service.online/api/v1/auth/token/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        console.log('SiginInUser-201', data);
        return data;
      } else if (response.status === 403) {
        console.log('SiginInUser-403', response.status);
        return response.status;
      } else if (response.ok) {
        const data = await response.json();
        console.log('response.ok', response.status, data);
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Authorization failed');
    }
  },
};
