import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Importaciones de componentes

import SiteId from './components/siteID';
import Navigator from './components/navigator';
import Card from "./components/card";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <SiteId/>
      <Navigator/>
      </header>
    <main>
      <Card/>
    </main>
    <footer>Aqui va el footer</footer>
  </React.StrictMode>
);

