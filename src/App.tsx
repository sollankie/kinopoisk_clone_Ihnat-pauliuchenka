import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import MovieScreen from './components/Screens/MovieScreen/MovieScreen';
import './App.scss';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/movie/:movieId" element={<MovieScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
