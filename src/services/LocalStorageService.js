class LocalStorage {
  static getItem = (key) => localStorage.getItem(key);

  static setItem = (key, value) => localStorage.setItem(key, value);

  static removeItem = (key, options) => localStorage.removeItem(key, options);

  static clearItem = () => localStorage.clear();
}

export default LocalStorage;
