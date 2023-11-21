import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Importaciones de componentes

import SiteId from './components/siteID';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <SiteId/>
      </header>
    <main>Aqui va el main</main>
    <footer>Aqui va el footer</footer>
  </React.StrictMode>
);

