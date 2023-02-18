import { decodeToken } from 'react-jwt';
import { DecodedToken } from '../types/apiTypes';

export function setLocalStorage(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

export function updateUserIdFromToken() {
  const token = localStorage.getItem('__token') as string;
  const myDecodedToken: DecodedToken | null = decodeToken(token);
  if (myDecodedToken) {
    setLocalStorage('__userId', JSON.stringify(myDecodedToken!.user_id));
    return String(myDecodedToken!.user_id);
  }
  return '';
}
