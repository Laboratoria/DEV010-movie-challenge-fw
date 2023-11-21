import React from "react";
import marioTest from "../images/marioTest.png"
import fourStars from "../images/fourStars.png"
import returnBoton from  "../images/returnButton.png"
import "../styles/details.css";


function Detail() {
  return <section className = "detailSection">
    <img className="posterDetail" src={marioTest} alt="Mario Movie"/>
    <article id= "movieInfo">
      <div  id= "movieData">  
        <div id="containerData">
          <div  id= "file"> 
            <h2 id="titleDetail"> The Super Mario Bros</h2>
            <h3>Release year:<span className="data">  2023</span></h3>
            <h3>Genres:<span className="data">  action, aventure</span></h3>
          </div>
          <div  id= "votes"> 
          <img  id= "rating" src={fourStars} alt= "rating"  /> 
          <p id="tag">(Votes rating)</p>
           </div>
        </div>   
        <div  id= "overview">  
          <h3>Overwiew</h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div id="buttonContainer">
        <button id="returnButton"><img   src={returnBoton} alt= "returnButton"/> </button>
        </div>
      </div>
    </article>
  </section>
  }
  
  //TODO añadir los promps
  
  export default Detail;
