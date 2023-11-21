import React from "react";
import logo from "../images/logo.png"
import "../styles/siteId.css";


function SiteId() {
  return <article id="siteIdArticle">
    <img src={logo} alt="logo vertigo's Hichtcock icon" id="logoSite"/>
    <h1>FALL 4 MOVIES</h1>
  </article>
}

//TODO que al clickear el logo, recargue el site

export default SiteId;