import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Data
import { login, register } from '../data';

export default function Options({ setter }) {

    let token = window.localStorage.getItem('SessionID')
    const [first, setFirst] = useState(true)

    useEffect(() => {
        setFirst(!first)
    }, [token])


    return (

        <div className="navSF-Options-selects">
            <ul>
                <li>
                    <Link to='search'>Buscador</Link >
                </li>
                <li>
                    <a href='https://sena.territorio.la/cms/index.php' target="_blank" >Territorium</a >
                </li>
                {
                    token
                        ? // If
                        login.map(e => {
                            return <li key={e.type}>
                                <Link onClick={() => { setter() }} to={e.url}>{e.name}</Link>
                            </li>
                        })
                        : //Else
                        register.map(e => {
                            return (

                                <li key={e.type}>
                                    <Link onClick={() => { setter() }} to={e.url}>{e.name}</Link>
                                </li>

                            )
                        })
                }
            </ul>
        </div>

    )

}