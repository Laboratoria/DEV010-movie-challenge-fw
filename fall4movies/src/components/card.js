import React from "react";
import marioTest from "../images/marioTest.png"
import "../styles/card.css";


function Card() {
    return <article className = "cardClass">
      <img className="poster" src={marioTest} alt="Mario Movie"/>
      <h2>MARIO BROS</h2>
      <h3 id="year">2023</h3>
    </article>
  }
  
  //TODO que al clickear el logo, recargue el site
  
  export default Card;
