import React from 'react';
import { Link } from 'react-router-dom';

//Data
import Data from '../data';

export default function Options({ setter }) {

    const token = window.localStorage.getItem('token');

    let login = Data.login;
    let register = Data.register;

    fetch('http://localhost/restapi/index.php')
        .then(res => res.json())
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