import React from "react";
import dataBase from "../images/dataBase.svg"
import "../styles/copyrights.css";


function Copyrights() {
    return <article className = "copyrights">
      <p id="footerNote">Data proporcionada por    </p>
      <img className="TMDBLogo" src={dataBase} alt="The Movie Data Base logo"/>
    </article>
  }
  
  //TODO que al clickear el logo, recargue el site
  
  export default Copyrights;
