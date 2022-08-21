import React from 'react';

export default function Courses() {
    const fecth = () => {
        fetch('https://SofiaPlus-CRUD.11-cardozo-joan.repl.co')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return { fecth }
}