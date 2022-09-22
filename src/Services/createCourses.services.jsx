import React, { useState } from 'react';

export default function useGetCourses() {

    const [Data, setData] = useState()

    const datafecth = () => {
        fetch('https://sofiaplus-web-server-php.11-cardozo-joan.repl.co/secciones/cursos.php',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            })
        })
        .then(res => res.json())
        .then(res => {
            window.localStorage.setItem('coursesData', JSON.stringify(res))
            setData('Correcto')
        })
        .catch(err => console.log(err))
    }

    return { datafecth }
}
