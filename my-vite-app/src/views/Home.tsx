import { useStateValue } from '../states/stateUtils';
import { useState, useEffect } from 'react'
import { Movie, Genre } from '../services/types'; // Importa la interfaz Movie
import { MovieListResponse } from '../services/types'; // Interfaz para la respuesta que incluye total_results
import { Header } from '../components/Header'
import { MoviesGrid } from '../components/MoviesGrid'
import '../App.css'
import tmdbService from '../services/tmdbService';
import { TmdbServiceParams } from '../services/types';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';
import { useNavigate } from 'react-router-dom';

function Home() { //Declaraciones de estado
    const navigate = useNavigate();
    const { setSelectedMovie } = useStateValue() || {};
    const [movies, setMovies] = useState<Movie[]>([]); //Especifica que es un array de Movie, useState para manejar el estado de las películas, la página actual y el filtro actual en mi app React
    const [totalMovies, setTotalMovies] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1); //Inicializa en 1 o en la página que desees
    const [currentFilter, setCurrentFilter] = useState<string | number>('');


    // Lógica para seleccionar una película, al hacer clic en una tarjeta de película.
    const handleMovieSelect = (movie: Movie) => {
        setSelectedMovie(movie);
        navigate(`/movie/${movie.id}`); // Navega a la página de detalles de la película
    };

    const calculatePageCount = () => {
        return Math.ceil(totalMovies / 20);
    };

    const fetchData = async (params?: TmdbServiceParams) => {
        try {
            // Obtener las películas para la página actual y el género seleccionado
            const response: { movies: MovieListResponse; genres: Genre[] } = await tmdbService({
                sortOrder: '',
                additionalParams: {
                    page: currentPage,
                    ...(currentFilter && { with_genres: currentFilter }),
                    ...(params?.searchKey && { searchKey: params.searchKey }),
                },
            });

            console.log('API Response:', response);

            // Actualizar el estado de las películas y el total
            if (Array.isArray(response.movies.results)) {
                setMovies(response.movies.results);
                setTotalMovies(response.movies.total_results); // Actualiza el estado de totalMovies
                console.log('Updated Movies State:', response.movies.results);
            } else {
                console.error('La respuesta de la API no contiene un array de películas:', response);
            }
        } catch (error) {
            console.error('Error al obtener películas:', error);
        }
    };

    //Parte de la lógica para manejar la búsqueda de películas en respuesta a alguna interacción del usuario
    const handleSearch = async (query: string) => {
        console.log('Searching for:', query);
        // Llamada para búsqueda
        await fetchData({ searchKey: query });
    };

    const handleFilterChange = async (type: string, value: string | number) => {
        const filterString = String(value);
        setCurrentFilter(filterString);

        // Usando el parámetro type
        console.log('Type:', type);

        // Llamada común para cambios de filtro
        await fetchData();
    };

    const handlePageChange = (selectedItem: { selected: number }) => {
        // Actualiza la página actual cuando el usuario hace clic en un botón de paginación, llamada para cambios de página
        setCurrentPage(selectedItem.selected + 1); // Agrega +1 para ajustar el índice de página
    };

    // Manejo total de películas dentro del efecto
    useEffect(() => { // Para realizar llamadas a la API de películas
        const fetchData = async () => { // Llamada inicial y para cambios de página y filtro
            try {
                const response: { movies: MovieListResponse; genres: Genre[] } = await tmdbService({
                    sortOrder: '',
                    additionalParams: {
                        page: currentPage,
                        ...(currentFilter && { with_genres: currentFilter }),
                    },
                });

                // Actualizar el estado de las películas y el total
                if (Array.isArray(response.movies.results)) {
                    setMovies(response.movies.results);
                    setTotalMovies(response.movies.total_results); // Actualiza el estado de totalMovies
                    console.log('Updated Movies State:', response.movies.results);
                } else {
                    console.error('La respuesta de la API no contiene un array de películas:', response);
                }
            } catch (error) {
                console.error('Error al obtener películas:', error);
            }
        };

        fetchData(); // Llamada inicial y para cambios de página y filtro
    }, [currentPage, currentFilter]);

    const pageCount = calculatePageCount();

    return (
        <>
            <Header onSearch={handleSearch} />
            <Filters onFilterChange={handleFilterChange} />
            <MoviesGrid movies={movies} onMovieSelect={handleMovieSelect} />
            <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} />
            <p className="read-the-docs">
                Aquí puedes comenzar a construir tu página de películas.
            </p>
        </>
    );
}


export default Home;