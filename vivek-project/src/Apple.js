import React, { useEffect, useState } from "react";
import axios from "axios";

const Apple = () => {

    const [name, setName] = useState(" Vivek ");
    const [email, setEmail] = useState("Vuvek@in.com");

    const [dbData, setDBData] = useState(
    [{
      "name": "typicode",
      "email": "type@vi.com"
    }]);

    useEffect (() => {
        console.log(dbData);
        // postData(dbData);
    }, [dbData]);

    const postData = async (data) => {
        console.log("receied data is: ", data);
        const response = await axios.post("http://localhost:3005/profile", data);
        console.log(response);
    }

    const submitForm = (event) => {
        event.preventDefault();
        setDBData(dbData.concat({
            "name": name,
            "email": email
        }));
        setEmail("");
        setName("");
    }

    return (
        <>
            <p>Description</p>
            <form onSubmit={submitForm}>
                Name: <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
                Email: <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <button type="submit"> Submit </button>
            </form>
            {dbData.map( person => <li key={person.email}> {person.name} {person.email} </li> )}
        </>
    )
}

export default Apple;