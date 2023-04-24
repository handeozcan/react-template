export default {
  '*.{js,jsx,ts,tsx}': ['eslint', () => 'tsc-files --noEmit'],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
};
