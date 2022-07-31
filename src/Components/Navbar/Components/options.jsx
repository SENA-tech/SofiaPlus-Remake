import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

//Data
import { login, register, territorium } from '../data';

export default function Options({ setter }) {

    let token = window.localStorage.getItem('SessionID')

    return (

        <div className="navSF-Options-selects">
            <ul>
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
                <li key={territorium[0].type}>
                    <a href={territorium[0].url} target="_blank" >{ territorium[0].name }</a >
                </li>
            </ul>
        </div>

    )

}