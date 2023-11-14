import { useSelector, useDispatch } from "react-redux";
import { addCounter, resetCounter } from "../../store/actions/index";

function App() {

  const { amount } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };


    return (
      <div className="App">
        Home 
        <h4>{amount}</h4>
      <button onClick={handleAdd}> ADD </button>
      <button onClick={handleReset}> RESET </button>
      </div>
    );
  }
  
  export default App;