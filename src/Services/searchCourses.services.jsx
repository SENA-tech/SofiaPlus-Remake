import React, { useState, useEffect } from 'react';

export default function useSearch() {

    const [search, setSearch] = useState();

    const datafecth = () => {
        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/data/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Query: search
            })
        })
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem('coursesData', JSON.stringify(res))
            })
            .catch(err => console.log(err))
    }

    const inputSearch = (event) => {
        setSearch(event.target.value);
    }

    return { datafecth, search, inputSearch }
}
