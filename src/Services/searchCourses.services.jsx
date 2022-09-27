import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function useSearch() {

    const [search, setSearch] = useState();
    const [select, setSelect] = useState('1')

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
                return <Navigate to='/search' />
            })
            .catch(err => console.log(err))
    }

    const filterfecth = () => {
        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/data/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Query: select
            })
        })
            .then(res => res.json())
            .then(res => {
                window.localStorage.setItem('coursesData', JSON.stringify(res))
                return <Navigate to='/search' />
            })
            .catch(err => console.log(err))
    }

    const inputSearch = (event) => {
        setSearch(event.target.value);
    }

    const inputFilter = (event) => {
        setSelect(event.target.value);
        console.log(select);
    }

    return { datafecth, search, inputSearch, filterfecth, select, inputFilter }
}
