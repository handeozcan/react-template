export default {
  '*.{js,jsx,ts,tsx}': [() => 'tsc-files --noEmit'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
