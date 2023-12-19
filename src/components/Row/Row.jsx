import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from '../API/axios';
import styles from './Row.module.scss';

function Row({ title, fetchUrl, isLargeRow = false, movies }) {
  const [rowMovies, setRowMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setRowMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const moviesToDisplay = movies?.length > 0 ? movies : rowMovies; 

  return (
    <div className={styles.row}>
      <h2>{title}</h2>

      {moviesToDisplay.length > 0 && (
        <Slider {...settings}>
          {moviesToDisplay.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <img
                className={styles.row_poster}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string,
  isLargeRow: PropTypes.bool,
  movies: PropTypes.array,
};

export default Row;