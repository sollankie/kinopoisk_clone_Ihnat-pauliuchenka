import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./store/reducers/index";

import Search from './components/Search';
import Navbar from './components/Navbar';
import Routes from './routes/index'

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <div>
        <Search />
        <Navbar />
        <Routes />
      </div>
    </Router>
    </div>
    </Provider>
  );
}

export default App;
