import React from "react";
import "../styles/error-page.css";
import { useRouteError } from "react-router-dom";
import logoYellow from "../images/logoYellow.png"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 id="sorry" >Sorry, that page does not exist</h1>
      <img className="error" src={logoYellow} alt="Error 404. Page not Found"/>
    </div>
  );
}

//TODO mejorar la calidad de la imagen del logo
