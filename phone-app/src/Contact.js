import React from "react";

const Contact = ({name, number}) => {
    return (
        <>
            <li key={name}> {name} {number} </li>
        </>
        
    );
};

export default Contact;