import React from 'react';
import "./HomeScreen.scss";
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import requests from '../API/Requests';
import Row from '../Row/Row';



function HomeScreen() {
    return ( <div className="homeScreen">
        <Nav />
       
        <Banner />

        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
        <Row 
        title="New"
        fetchUrl={requests.fetchNewFilms}
        isLargeRow
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
        <Row title="Horrors" fetchUrl={requests.fetchHorrorMovies}isLargeRow/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionsMovies}isLargeRow/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}isLargeRow/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}isLargeRow/>
    </div>
    );
}

export default HomeScreen;