// Servicio para gestionar las solicitudes a la API de TMDB
import axios from 'axios';
import { Genre, Movie, MovieListResponse } from '../services/types';
import { TmdbServiceParams } from '../services/types';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4e88ef98afd8eeb07600b3e91464bebd';

// Función para obtener películas y géneros
const tmdbService = async ({ searchKey, sortOrder, movieId, additionalParams }: TmdbServiceParams): Promise<{
  movie: Movie;
  movies: MovieListResponse;
  genres: Genre[];
}> => {
  try {
    // Llamada para obtener películas
    const type = searchKey ? 'search' : 'discover';
    let URL = `${API_URL}/${type}/movie/`
    if (movieId) URL = `${API_URL}/movie/${movieId}` //"" , 0, undefined, null - falsy
    const moviesResponse = await axios.get(URL, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        sort_by: sortOrder ? `popularity.${sortOrder}` : undefined,
        ...(additionalParams || {}),
      },
    });
console.log (moviesResponse)
    // Llamada para obtener géneros
    const genresResponse = await axios.get(`${API_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    // Actualiza el estado global de géneros
    if (additionalParams?.setGenres) {
      additionalParams.setGenres(genresResponse.data.genres);
    }

    // Devuelve un objeto con las respuestas de ambas llamadas
    return {
      movies: moviesResponse.data,
      genres: genresResponse.data.genres as Genre[],
    };
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

export default tmdbService;
