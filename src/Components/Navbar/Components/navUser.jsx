import React, { useState, useEffect } from 'react';
import useProfile from '../../../Hooks/useProfile.hook';

//Data
import UserLogo from '../Import/UserLogo.png';

//hooks

export default function NavUser({ visible }) {

    const { getProfile, profile } = useProfile()

    let local = JSON.parse(window.localStorage.getItem('SessionID'));

    const [Username, setUsername] = useState(' ');
    const [UserType, setUserType] = useState('hola usuario');

    //const { fecth } = Courses();

    //useeffect to show the navbar
    useEffect(() => {
        if (!local) {
            setUsername(' ')
            setUserType('Hola Usuario');
        } else {
            if (local._name) {
                setUsername(local._name);
                setUserType('Bienvenido');
            }
        }
    }, [local]);

    //Return Image
    let image = () => {
        if (local) {
            return local._profileimage
        } else {
            return UserLogo
        }
    }

    return (
        <div className='navSF-User-Sec'>
            <div className="navSF-Base-User">
                <div className="navSF-Base-User-Data">
                    <h1>{Username}</h1>
                    <h3>{UserType}</h3>
                </div>
                <div className="navSF-Base-User-Data2">
                    <div style={{ display: UserType === 'Bienvenido' ? 'block' : 'none' }}></div>
                </div>
                <button onClick={() => { visible(); }}>
                    <img className='User-Image-Btn' src={image()} alt="sofia plus user" height={60} width={60} />
                </button>
            </div>
        </div>
    );
}