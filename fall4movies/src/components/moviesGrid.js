import movies from "../Others/Prueba.json";
import Card from "./card";
import "../styles/moviesGrid.css";

function MoviesGrid(){
  return(
    <ul id="MoviesGrid">
      {movies.map( (movie) =>{
        return <Card key={movie.id} movie={movie}/>
    })}
  </ul>);
};

export default MoviesGrid;