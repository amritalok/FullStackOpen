import React from "react";
import "./Statistics.scss";
import StatLine from "./StatLine";


const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
    return(
        <div className="alignleft">
            <h1> Statistics </h1>
            {
            good + neutral + bad ? 
              <div>
                <table>
                  <tbody>
                    <tr><StatLine text="good" value={good}></StatLine></tr>
                  </tbody>
                  
                </table>
                
                <StatLine text="neutral" value={neutral}></StatLine>
                <StatLine text="bad" value={bad}></StatLine>
                <StatLine text="All" value={total}></StatLine>
                <StatLine text="Average" value={(good - bad)/total}></StatLine>
                <StatLine text="positive" value={(good/total)*100}></StatLine>
              </div> 
            :
              <p>No Feedback Given</p> 
            }
            
        </div>
    )
}

export default Statistics;

