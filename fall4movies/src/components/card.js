import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import getYear from "../functions/year";

function Card({ movie }) {
    
  const ImgUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  const title = movie.title.toUpperCase();
  const releaseYear = getYear(movie.release_date);
  
  return <article className = "cardClass">
    <Link to={"/detail/"+ movie.id }>
      <img className="poster" src={ImgUrl} alt={movie.title + " poster"}/>
    </Link>
      <h2 id="movieTitle">{title}</h2>
      <h3 id="year">{ releaseYear }</h3>
      
    </article>
  }
  
  //TODO que al clickear el logo, recargue el site
  
  export default Card;
