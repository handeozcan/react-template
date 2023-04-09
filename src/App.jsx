import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './component/changeLang';
import reactLogo from './assets/react.svg';
import Counter from './features/counter/Counter';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
      <ChangeLanguage />
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button> Ebubekir </Button>
      <h1>{i18n.t('hello')}</h1>
      <Counter />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
