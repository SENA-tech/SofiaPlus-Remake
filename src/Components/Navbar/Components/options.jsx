import React from 'react';
import { Link } from 'react-router-dom';

//Data
import Data from '../data';

export default function Options({ setter }) {

    const token = window.localStorage.getItem('token');

    let login = Data.login;
    let register = Data.register;

    console.log('options')

    fetch('http://localhost/restapi/index.php')
        .then(res => res.json())
        .then(data => window.localStorage.setItem('dataAPI', JSON.stringify(data)))
        .catch(e => console.error(e))

    return (

        <div className="navSF-Options-selects">
            <ul>
                {

                    token
                        ? // If
                        login.map(e => {
                            return <li key={e}>{e}</li>
                        })
                        : //Else
                        register.map(e => {
                            return <li key={e.type}>
                                <Link onClick={() => { setter() }} to={e.url}>{e.type}</Link>
                            </li>
                        })

                }
            </ul>
        </div>

    )

}