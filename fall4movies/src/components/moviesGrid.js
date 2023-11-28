// import movies from "../Others/Prueba.json";
import Card from "./card";
import "../styles/moviesGrid.css";
import { useEffect, useState } from "react";

function MoviesGrid() {

  const [ movies , setMovie]  = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODUwMDQ3NTQxY2U2M2NkNjcyMDY1N2JmYmEzODI2YSIsInN1YiI6IjY1NTc3NGJhMDgxNmM3MDBjM2RjN2Q0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ILN2F534UJIXkQUbv91FTD0ljkN8YZ6ir2A7VWwcJk'
      }
    };
  
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json()).then((data => {
       setMovie(data.results);
    }))
    .then(response => console.log(response.results)
    )
    .catch(err => console.error(err));
  })

  return (
    <ul id="MoviesGrid">
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />
      })}
    </ul>);
};

//TODO Hacer varias grillas por razones responsive (Aunque el proyecto no lo pidió)

export default MoviesGrid;