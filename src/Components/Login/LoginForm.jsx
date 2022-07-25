import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './Login.css'

export default function LoginForm() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const inputUser = (event) => {
        setUser(event.target.value);
    }

    const inputPass = (event) => {
        setPassword(event.target.value);
    }

    const Login = () => {

        fetch('https://SofiaPlus-API.11-cardozo-joan.repl.co',
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: user,
                    log: password
                })
            }
        )
            .then(res => res.json())
            .then(res => {
                res.validate === 'Correct Password'
                    ? //If
                    window.localStorage.setItem('SessionID', user)
                    : //Else
                    console.log('not logued');
            })
            .catch(e => console.error(e))
    }

    return (

        <div className="Login-Form">
            <div className="row">
                <div className="col-md-8">
                    <div>
                        <div className="card-header">
                            <h1 id='form-title'>Inicio de Sesión</h1>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <br />
                                <label htmlFor='usuario' className="form-label">Usuario</label>
                                <input onChange={(ev) => inputUser(ev)} required type="number" className="LoginInputs" name="Identification" id="usuario" placeholder="Usuario" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                <input onChange={(ev) => inputPass(ev)} required type="password" name="Password" className="LoginInputs" id="contraseña" placeholder="Constraseña" />
                            </div>
                            <br />
                            <Link to='/' aria-label='exit to login form'>
                                <input onClick={() => Login()} type="submit" value="Iniciar Sesion" className="btn-primary" />
                            </Link>
                            <br /><br />
                            <small>Si no tienes usuario <Link to='/register'>Registrate</Link></small>
                        </div>
                    </div>
                </div>
            </div >
            <Link to='/' aria-label='exit to login form'>
                <div className="ext" />
            </Link>
        </div>

    )

}