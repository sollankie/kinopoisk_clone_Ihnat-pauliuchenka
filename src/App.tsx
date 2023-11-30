import React from "react";
import './App.scss';
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
