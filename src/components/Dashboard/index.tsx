import { useSelector } from "react-redux";


function App() {
  const { amount } = useSelector((state: any) => state.counter);

    return (
      <div className="App">
        Dashboard {amount}
      </div>
    );
  }
  
  export default App;