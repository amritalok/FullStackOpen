import React from "react";

const Country = (props) => {
    console.log(props);
    const  {
        name,
        capital,
        population,
        languages,
        flag,
    } = props.data;
    console.log(languages);
    return (
        <>
            <h2> {name} </h2>
            <p> capital: {capital} </p>
            <p>population: {population} </p>
            <h3>Languages:</h3>
            {languages.map(language => <li key={language.iso639_1}> {language.name} </li>)}
            <img src={flag} alt={`flag of ${name}`} width="500px" height="200px"/>
        </>
    )
}

export default Country;