import "./App.css";
import Counter from "./Counter";
import Frineds from "./Frineds";
import Team from "./Team";

function App() {
  function hanleClick() {
    alert("button clicked");
  }
  const handleclick2 = () => {
    alert("click 2");
  };
  const addToFive = (num) => {
   alert (num)
    
  };
  return (
    <>
      <h2>React Core Concept 2</h2>

      <Frineds></Frineds>

      <Team></Team>
      <Counter></Counter>

      <button onClick={hanleClick}>Click Me</button>

      <button onClick={handleclick2}>Click Me 2</button>

      <button
        onClick={() => {
          alert("alert to third");
        }}
      >
        third
      </button>

      <button onClick={() => addToFive(3)}>addToFive</button>
    </>
  );
}

export default App;
