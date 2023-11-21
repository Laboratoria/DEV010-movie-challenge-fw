import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Importaciones de componentes

import SiteId from './components/siteID';
import Navigator from './components/navigator';
import Card from "./components/card";
import Detail from './components/detail';
import Copyrights from './components/copyrights';
import Pagination from './components/pagination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <SiteId/>
      <Navigator/>
      </header>
    <main>
      <Card/>
      <Pagination/>
    </main>
    <footer>
      <Copyrights/>
    </footer>
  </React.StrictMode>
);

