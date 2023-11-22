import './MovieCard.css';

const MovieCard = ({ movie, urlImage }) => (
  <div className='grid-item'>
    <img src={`${urlImage + movie.poster_path}`} alt="" height={400} width={"100%"} />
    <h4 className='text-center'>{movie.title}</h4>
  </div>
);

export default MovieCard;

