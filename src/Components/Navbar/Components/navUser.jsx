import React, { useState, useEffect } from 'react';
import Courses from '../../../Services/Curses.services';

//Data
import UserLogo from '../Import/UserLogo.png';

//hooks

export default function NavUser({ visible }) {

    let local = JSON.parse(window.localStorage.getItem('SessionID'));

    const [Username, setUsername] = useState(' ');
    const [UserType, setUserType] = useState('hola usuario');

    const { fecth } = Courses();

    //useeffect to show the navbar
    useEffect(() => {
        if (!local) {
            setUsername(' ')
            setUserType('Hola Usuario');
        } else {
            setUsername(local._name);
            setUserType('Bienvenido');
        }

    }, [local]);

    return (

        <div className="navSF-Base-User">
            <div className="navSF-Base-User-Data">
                <h1>{Username}</h1>
                <h3>{UserType}</h3>
            </div>
            <button onClick={() => { visible(); fecth() }}>
                <img src={UserLogo} alt="sofia plus user" height={60} width={60} />
            </button>
        </div>

    );
}