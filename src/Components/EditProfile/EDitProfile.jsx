import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useProfile from '../../Hooks/useProfile.hook';

//Data
import data from '../Navbar/data'

//CSS

export default function EditProfile() {

    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');

    const inputUser = (event) => {
        setUser(event.target.value);
    }

    const inputPass = (event) => {
        setPassword(event.target.value);
    }

    const { login } = data

    const { updateProfile } = useProfile();

    let dataSession = JSON.parse(window.localStorage.getItem('SessionID'))

    if (dataSession) {
        return (
            <div className="Login-Form">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <div className="card-header">
                                <h1 id='form-title'>Actualizar Datos</h1>
                            </div>
                            <div className="card-body">
                                <br />
                                <div className="mb-3">
                                    <label htmlFor='usuario' className="form-label">Imagen</label>
                                    <input onChange={ev => inputUser(ev)} required type="text" className="LoginInputs" name="Identification" id="usuario" placeholder="Imagen" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                    <input onChange={ev => inputPass(ev)} required type="password" name="Password" className="LoginInputs" id="contraseña" placeholder="Constraseña" />
                                </div>
                                <Link to={login[0].url} aria-label='exit to login form'>
                                    <input onClick={() => updateProfile(User, Password, dataSession._token)} type="submit" value="Actualizar" className="btn-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
                <Link to={login[0].url} aria-label='exit to login form'>
                    <div className="ext" />
                </Link>
            </div>
        )
    } else {
        return (
            <Navigate to='/' />
        )
    }

}