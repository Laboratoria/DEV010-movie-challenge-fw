import React from "react";
import "../styles/card.css";

function Card({ movie }) {
    
  const ImgUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  const title = movie.title.toUpperCase();
  
  return <article className = "cardClass">
    <img className="poster" src={ImgUrl} alt={movie.title + " poster"}/>
      <h2 id="movieTitle">{title}</h2>
      <h3 id="year">{movie.release_date}</h3>
    </article>
  }
  
  //TODO que al clickear el logo, recargue el site
  //TODO Hacer una micro- funcioncita para que solo se vea el año
  
  export default Card;
