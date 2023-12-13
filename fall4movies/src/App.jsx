//importacion de funcionalidades
import "./index.css";
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Importaciones de componentes

import { Home } from "./Pages/home";
import ErrorPage from "./components/error-page"
import MovieDetail from "./Pages/movieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/detail/:movieId",
    element:  <MovieDetail/>,
    errorElement: <ErrorPage />,
  },
]);


function App(){
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App;
