import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Favorites from '../components/Favorites/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
