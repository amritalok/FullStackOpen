import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import axios from "axios";

const App = () => {
  const [ persons, setPersons ] = useState([ ]);
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect (() => {
    axios.get("http://localhost:3005/persons")
    .then(response => setPersons(response.data))
  }, [])

  const onSubmit = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)){
      alert(`${newName} is already added to the phoneBook`);
      setNewName("");
      setNewNumber("");
    }
    else{
      setPersons(persons.concat({
        name: newName,
        number: newNumber,
      }));
      setNewName("");
      setNewNumber("");
    }
  }

  const contactsToShow = searchText ? persons.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase())): persons;

  return (
    <div>
      <h2>Phonebook</h2>
      Filter Shown with: <input value={searchText} onChange={
        (event) => setSearchText(event.target.value)
      }/>

      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={
            (event) => {
              setNewName(event.target.value)
            }
          }
          />
          number: <input value={newNumber} onChange={
            event => setNewNumber(event.target.value)
          }/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {contactsToShow.map(person => <Contact name={person.name} number={person.number}/>)}
    </div>
  )
}
export default App;