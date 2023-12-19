import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from '../API/axios';
import API_KEY from '../API/Api_key';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (results: any[], query: string) => void; 
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      );

      const results = response.data.results;
      onSearch(results, query);
    } catch (error: any) {
      console.error('Error fetching search results:', error.message);
    }
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSearch}>
        <input className={styles.SearchBar_input}
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleQueryChange}
        />
        <button className={styles.search_button} type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;