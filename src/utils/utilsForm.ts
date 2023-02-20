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

export function createCookiFile(name: string, value: string, time: number) {
  const date: Date = new Date();
  date.setTime(date.getTime() + time * 60 * 60 * 1000);
  document.cookie =
    name + ' = ' + value + '; expires = ' + (date as Date).toUTCString() + '; path = /';
}

export function getCookiFile(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? matches[1] : undefined;
}

export function deleteCookie(name: string) {
  createCookiFile(name, '', -1);
}

export function updateUserIdFromToken() {
  const token = localStorage.getItem('__token') as string;
  const myDecodedToken: DecodedToken | null = decodeToken(token);
  if (myDecodedToken) {
    setLocalStorage('__userId', JSON.stringify(myDecodedToken!.user_id));
    return myDecodedToken;
  }
  return '';
}
