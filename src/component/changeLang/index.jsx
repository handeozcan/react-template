import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Button type="button" onClick={() => changeLanguage('tr')}>
        tr
      </Button>
      <Button type="button" onClick={() => changeLanguage('en')}>
        en
      </Button>
    </div>
  );
}

export default ChangeLanguage;
