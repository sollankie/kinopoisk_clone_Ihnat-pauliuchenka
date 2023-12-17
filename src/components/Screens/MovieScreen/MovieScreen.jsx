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

  const formattedBudget = new Intl.NumberFormat('en-US').format(movie.budget);
  const formattedRevenue = new Intl.NumberFormat('en-US').format(movie.revenue);

  return (
    <div className={styles.movieScreen}>
      <Nav />
      <div className={styles.movieDetailsContainer}>
        <div className={styles.posterContainer}>
          <img className={styles.posterImage} src={posterUrl} alt={movie.title} />
        </div>
        <div className={styles.movieDetailsContent}>
          <h2 className={styles.movieTitle}>{movie.title}</h2>
          <p className={styles.movieOverview}>{movie.overview}</p>
          <p className={styles.movieDetails}>Release Date: {movie.release_date}</p>
          <p className={styles.movieDetails}>Runtime: {movie.runtime} minutes</p>
          <div className={styles.MovieBudget}>
            <p>Budget: ${formattedBudget}</p>
            <p>Revenue: ${formattedRevenue}</p>
          </div>
          <div className={styles.MovieRating}>
            <p className={styles.ratingNumber}>{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieScreen;