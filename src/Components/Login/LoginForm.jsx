import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Custom Hooks
import useAouth from '../../Hooks/useAouth.hook';


//CSS
import './Login.css'

export default function LoginForm() {

    const { login, changeType, inputPass, inputUser } = useAouth();

    return (

        <div className="Login-Form">
            <div className="row">
                <div className="col-md-8">
                    <div>
                        <div className="card-header">
                            <h1 id='form-title'>Inicio de Sesión</h1>
                        </div>
                        <div className="card-body">
                            <br />
                            <div className="mb-3">
                                <label htmlFor='Type' className="form-label">Tipo de Documento</label>
                                <select required onChange={ev => changeType(ev)} name="type" className="LoginInputs" id="correo electronico" >
                                    <option value="Ti">Tarjeta de Identidad</option>
                                    <option value="cc">Cedula de Ciudadania</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='usuario' className="form-label">Identificacion</label>
                                <input onChange={ev => inputUser(ev)} required type="number" className="LoginInputs" name="Identification" id="usuario" placeholder="Usuario" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                <input onChange={ev => inputPass(ev)} required type="password" name="Password" className="LoginInputs" id="contraseña" placeholder="Constraseña" />
                            </div>
                            <Link to='/' aria-label='exit to login form'>
                                <input onClick={() => login()} type="submit" value="Iniciar Sesion" className="btn-primary" />
                            </Link>
                            <br /><br />
                            <small>Si no tienes usuario <Link to='/register' className='ancor'>Registrate</Link></small>
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