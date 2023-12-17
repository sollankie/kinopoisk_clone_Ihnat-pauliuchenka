import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import axios from '../API/axios';
import requests from '../API/Requests';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNewFilms);

        if (request.data.results && request.data.results.length > 0) {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
        } else {
          console.error('Ошибка: пустой ответ или отсутствуют результаты');
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  const backdropPath = movie?.backdrop_path;

  const imageUrl = backdropPath
    ? `https://image.tmdb.org/t/p/original/${backdropPath}`
    : '';

  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className={styles.banner_content}>
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.banner_buttons}>
          
          <Link to={`/movie/${movie?.id}`}>
            <button className={styles.banner_button}>Play</button>
          </Link>
          <button className={styles.banner_button}>To My List</button>
        </div>
        <h1 className={styles.banner_description}>
          {truncate(movie?.overview, 250)}
        </h1>
      </div>

      <div className={styles.banner_fadeBottom} />
    </header>
  );
}

export default Banner;