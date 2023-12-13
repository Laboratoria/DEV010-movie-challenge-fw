//Importaciones de REACT
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//importaciones de estilos
import "../styles/details.css";

//Importaciones de funcionalidades
import  stars from "../functions/stars";
import getYear from "../functions/year";
import returnBoton from  "../images/returnButton.png"
import getHttp  from "../functions/httpClient";


//VISTA DETAIL
function Detail() {
  const { movieId } = useParams();
  const [ movie, setMovie ] = useState(null);
  
  useEffect(() => {
    getHttp( "/movie/" + movieId )
      .then( data => {
        setMovie(data)
      } )
  }, [movieId])

  if (!movie){
    return null;
  }

  const imgMovie = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  const title = movie.original_title;
  const releaseYear = getYear(movie.release_date);
  const overwiew = movie.overview;
  const genres = movie.genres.map( genre => genre.name).join(", ");
  const rating = stars(movie.vote_average);

  return <section className = "detailSection">
    <img className="posterDetail" src={ imgMovie } alt={ title + " poster"}/>
    <article id= "movieInfo">
      <div  id= "movieData">  
        <div id="containerData">
          <div  id= "file"> 
            <h2 id="titleDetail"> { title }</h2>
            <h3>Release:<span className="data"> { releaseYear }</span></h3>
            <h3>Genres: <span className="data"> { genres }</span></h3>
          </div>
          <div  id= "votes"> 
          <img  id= "rating" src={rating} alt= "rating"  /> 
          <p id="tag">(Votes rating)</p>
           </div>
        </div>   
        <div  id= "overview">  
          <h3>Overwiew</h3>
          <p>{ overwiew }</p>
        </div>
        <div id="buttonContainer">
        <Link to={"/"}><button id="returnButton"><img   src={returnBoton} alt= "returnButton"/> </button></Link>
        </div>
      </div>
    </article>
  </section>
  }

  export default Detail;
