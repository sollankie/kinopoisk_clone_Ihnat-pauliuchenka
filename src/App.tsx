import React from "react";
import './App.scss';
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <div className="app">
      <HomeScreen />
    
    </div>
  );
}

export default App;
