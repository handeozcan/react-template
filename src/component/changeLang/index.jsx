import React from 'react';
import { useTranslation } from 'react-i18next';

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <button type="button" onClick={() => changeLanguage('tr')}>
        tr
      </button>
      <button type="button" onClick={() => changeLanguage('en')}>
        en
      </button>
    </div>
  );
}

export default ChangeLanguage;
