import React from 'react';
import { Link } from 'react-router-dom';

//Data
import Data from '../data';

export default function Options({ setter }) {

    const token = window.sessionStorage;

    console.log(token)

    fetch('http://localhost/restapi/index.php')
        .then(res => res.json())
        .then(data => console.log(data[0].nombres))
        .catch(e => console.error(e))

    return (

        <div className="navSF-Options-selects">
            <ul>
                {

                    token
                        ? // If
                        Data.login.map(e => {
                            return <li key={e.type}>
                                <Link onClick={() => { setter() }} to={e.url}>{e.name}</Link>
                            </li>
                        })
                        : //Else
                        Data.register.map(e => {
                            return <li key={e.type}>
                                <Link onClick={() => { setter() }} to={e.url}>{e.name}</Link>
                            </li>
                        })

                }
            </ul>
        </div>

    )

}