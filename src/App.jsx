import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Vinn");

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  return (
    <>
      <div>
        <button onClick={decreament}>Decreament</button>
        {count}
        <button onClick={increament}>Increament</button>
      </div>
      <input onChange={handleChange} type="text" placeholder="Enter text..." />
      {text}
    </>
  );
}

export default App;
