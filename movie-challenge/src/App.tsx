// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Filters from './components/Filters';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  // const [filter, selectedFilter] = useState(null);

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'fb29ad88915a994643a2e17f230ac6f2';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover';
    try {
      const { data: { results } } = await axios.get(`${API_URL}/${type}/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });
      setMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // const handleSearch = (key) => {
  //   setSearchKey(key);
  //   fetchMovies(key);
  // };

  useEffect(() => {
    fetchMovies(searchKey);
  }, [searchKey]);

  return (
    <>
      <Header onSearch={setSearchKey} />
      <MovieGrid movies={movies} urlImage={URL_IMAGE} />
    </>
  );
}

export default App;
