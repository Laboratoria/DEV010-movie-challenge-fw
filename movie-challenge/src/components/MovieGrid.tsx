// MovieGrid.tsx
import './MovieGrid.css';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, urlImage }) => (
  <div className='grid-container'>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} urlImage={urlImage} />
    ))}
  </div>
);

export default MovieGrid;

