import React, { useState } from 'react';

export default function useGetCourses() {

    const [Data, setData] = useState()

    const datafecth = () => {
        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/data/getter')
        .then(res => res.json())
        .then(res => {
            window.localStorage.setItem('coursesData', JSON.stringify(res))
            setData('Correcto')
        })
        .catch(err => console.log(err))
    }

    return { datafecth }
}
