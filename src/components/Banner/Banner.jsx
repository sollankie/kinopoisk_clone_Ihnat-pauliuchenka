import React, { useEffect, useState } from 'react';
import styles from './Banner.module.scss'; 
import axios from '../API/axios';
import requests from '../API/Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

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
        <h1 className={styles.banner_title}>Movie Name</h1>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
        <h1 className={styles.banner_description}>
          {truncate(`Test description`, 150)}
        </h1>
      </div>

      <div className={styles.banner_fadeBottom} />
    </header>
  );
}

export default Banner;

