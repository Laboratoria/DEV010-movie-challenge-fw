import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";
import year from "../Others/year"

function Card({ movie }) {
    
  const ImgUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  const title = movie.title.toUpperCase();
  const releaseYear = year(movie.release_date);
  
  return <article className = "cardClass">
    <Link to={"/detail/"+ movie.id }>
    <img className="poster" src={ImgUrl} alt={movie.title + " poster"}/>
      <h2 id="movieTitle">{title}</h2>
      <h3 id="year">{ releaseYear }</h3>
      </Link>
    </article>
  }
  
  //TODO que al clickear el logo, recargue el site
  
  export default Card;
