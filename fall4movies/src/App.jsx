//importacion de funcionalidades
import "./index.css";
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Importaciones de componentes

import SiteId from './components/siteID';
import Navigator from './components/navigator';
import Detail from './components/detail';
import Copyrights from './components/copyrights';
// import Pagination from './components/pagination';

import ErrorPage from "./components/error-page";
import { LandingPage } from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/detail/:movieId",
    element:  <Detail/>,
    errorElement: <ErrorPage />,
  },
]);


function App(){
  return (
    <><header>
      <SiteId />
      <Navigator />
    </header>
    <main>
    <RouterProvider router={router} />
    </main>
    <footer>
      <Copyrights />
    </footer></>
    );
};

export default App;