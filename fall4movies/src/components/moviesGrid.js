import Card from "./card";
import "../styles/moviesGrid.css";
import { useEffect, useState } from "react";
import getHttp from "../functions/httpClient";


function MoviesGrid() {

  const [ movies , setMovie]  = useState([]);

  useEffect(() => {
    getHttp( "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
      .then((data => {
      setMovie(data.results);
    }))
    .catch(err => console.error(err));
  }, []);

  return (
    <ul id="MoviesGrid">
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />
      })}
    </ul>);
};

export default MoviesGrid;
