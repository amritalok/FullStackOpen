import React, { useState } from 'react'
import "./App.scss";
import Statistics from './Statistics';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1> Give Feedback</h1>
      <li>
        <button onClick={()=>setGood(good+1)} className="button">good</button>
        <button onClick={()=>setNeutral(neutral+1)} className="button">neutral</button>
        <button onClick={()=>setBad(bad+1)} className="button">bad</button>
      </li>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics> 
      
    </div>
  )
}

export default App