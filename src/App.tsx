import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";  
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/reducers/index";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Routes from "./routes/index";  

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Search />
          <Navbar />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
