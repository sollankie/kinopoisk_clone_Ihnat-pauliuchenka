import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from './../../API/axios';
import API_KEY from '../../API/Api_key';
import styles from './MovieScreen.module.scss';
import Nav from '../../Nav/Nav'; 

function MovieScreen() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (error) {
    return <p className={styles.errorText}>Error fetching movie details: {error.message}</p>;
  }

  if (!movie) {
    return <p className={styles.loadingText}>Loading...</p>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <div className={styles.movieScreen}>
      <Nav />
      <h2 className={styles.movieDetails}>{movie.title}</h2>
      <img src={posterUrl} alt={movie.title} style={{ maxWidth: '35%' }} />
      <p className={styles.movieDetails}>{movie.overview}</p>
      {/* Add other movie details as needed */}
    </div>
  );
}

export default MovieScreen;