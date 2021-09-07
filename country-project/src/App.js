import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Country from './Country';

function App() {

  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect (() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
  }, [])
  const searchCountry = (event) => {
    setSearchString(event.target.value);
    // console.log("Search String is:", searchString, countries);
  }

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()));
  return (
    <>
      <p> Search Country: </p>
      <input type="text" value={searchString} onChange={searchCountry}/>
      {filteredCountries.length < 11 ? filteredCountries.length === 1 ? <Country data={filteredCountries[0]}/> : filteredCountries.map(country => <li key={country.name}> {country.name} </li>) :  <p> Too many matches </p>}
    </>
  );
}

export default App;
