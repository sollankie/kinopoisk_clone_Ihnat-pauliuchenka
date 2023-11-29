import React, { useState, useEffect, useRef } from 'react';
import axios from '../API/axios';
import styles from './Row.module.scss'; 

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const rowRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleScroll = (direction) => {
    const distance = rowRef.current.getBoundingClientRect().width - 1;
    if (direction === 'left' && scrollX < 0) {
      setScrollX(scrollX + distance);
    } else if (direction === 'right' && scrollX > -distance) {
      setScrollX(scrollX - distance);
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>

      <div className={styles.row_buttons}>
        <button onClick={() => handleScroll('left')}>Left</button>
        <button onClick={() => handleScroll('right')}>Right</button>
      </div>

      <div className={styles.row_posters} ref={rowRef} style={{ marginLeft: scrollX }}>
        {movies.map(movie => (
          <img
            key={movie.id}
            className={styles.row_poster} 
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;