import Cookies from 'js-cookie';

class CookieService {
  static getItem = (key) => Cookies.get(key);

  static setItem = (key, value) => Cookies.set(key, value);

  static removeItem = (key) => Cookies.remove(key);
}

export default CookieService;
