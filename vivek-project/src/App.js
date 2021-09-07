import './App.css';
import React, {useState} from 'react';
import Banana from './Banana';
import Apple from './Apple';


function App() {
  const [fruitValue, setFruitValue] = useState("Apple");

  const selectFruit = (event) => {
    setFruitValue(event.target.value);
    console.log("Selected fruit is: ", fruitValue);
  }

  return (
    <>
      <div>
        <p> Fill or Display the form based on DropDown Values</p>
        <form>
          <label> Select an option: </label>
          <select id="Fruits" name="Cars" onChange={selectFruit}>
            <option value="Apple"> Apple </option>
            <option value="Banana"> Banana </option>
          </select>
        </form>
        {fruitValue === "Banana" ? <Banana/> : <Apple/>}
      </div>
    </>
  );
}

export default App;
