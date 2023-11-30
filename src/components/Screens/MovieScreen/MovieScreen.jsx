import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from './../../API/axios';
import API_KEY from './../../API/Requests';

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
        return <p>Error fetching movie details: {error.message}</p>;
    }

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            {/* Add other movie details as needed */}
        </div>
    );
}

export default MovieScreen;
