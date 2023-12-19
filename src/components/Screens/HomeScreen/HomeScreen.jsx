import React, { useState } from 'react';
import Banner from '../../Banner/Banner';
import Row from '../../Row/Row';
import requests from '../../API/Requests';
import SearchBar from '../../SearchBar/SearchBar';
import Nav from '../../Nav/Nav';

function HomeScreen() {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (results, query) => {
    setSearchResults(results);
    setShowSearchResults(query.trim() !== '');
  };

  return (
    <div className="homeScreen">
    <Nav />
      <Banner />
      <SearchBar onSearch={handleSearch} />
      {showSearchResults ? (
        <Row title="Search Results" movies={searchResults} />
      ) : (
        <>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
          <Row title="Horrors" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
          <Row title="Action Movies" fetchUrl={requests.fetchActionsMovies} isLargeRow />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
        </>
      )}
    </div>
  );
}

export default HomeScreen;