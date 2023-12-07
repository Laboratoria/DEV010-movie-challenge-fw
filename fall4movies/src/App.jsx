//importacion de funcionalidades
import "./index.css";
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
 // useNavigate
} from "react-router-dom";

//Importaciones de componentes

import SiteId from './components/siteID';
import Navigator from './components/navigator';
import Detail from './components/detail';
import Copyrights from './components/copyrights';
// import Pagination from './components/pagination';
import MoviesGrid from './components/moviesGrid';
import ErrorPage from "./components/error-page";
// import SearchMovie from "./components/search"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesGrid />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/detail/:movieId",
    element:  <Detail/>,
    errorElement: <ErrorPage />,
  },
  /*{
    path:"/?search=" + searchText,
    element: <MoviesGrid/>,
    errorElement: <ErrorPage />,
  }*/

]);


function App(){
  const reload = () => {
    window.location.href = '/';
  }

  return (
    <><header>
      <SiteId 
      reload={reload}/>
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
