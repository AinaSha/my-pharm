import { decodeToken } from 'react-jwt';
import { DecodedToken } from '../types/apiTypes';

export function setLocalStorage(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

export function getFromLocalStorage(key: string) {
  return window.localStorage.getItem(key);
}

export function removeLocalStorage(key: string) {
  return window.localStorage.removeItem(key);
}

export function updateUserIdFromToken() {
  const token = localStorage.getItem('__token') as string;
  const myDecodedToken: DecodedToken | null = decodeToken(token);
  if (myDecodedToken) {
    setLocalStorage('__userId', JSON.stringify(myDecodedToken!.user_id));
    console.log(myDecodedToken);
    return myDecodedToken;
    // return String(myDecodedToken!.user_id);
  }
  return '';
}
