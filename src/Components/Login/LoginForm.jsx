import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import './Login.css'

export default function LoginForm() {

    /*<label>Tipo de Documento</label>
                    <select name="Type" id="TYPE" className='LoginInputs' >
                        <option value="TI">TI</option>
                        <option value="CC">CC</option>
                    </select>*/ 

    return (

        <div className="Login-Form">
            <div className="formLogin">
                <form action="http://localhost/CRUD/server/signing.php" method='POST' id='Login'>
                    <label htmlFor='ID'>Identificacion</label>
                    <input type="text" name="Identification" id="ID" className='LoginInputs' />
                    <label htmlFor='Pass'>Contraseña</label>
                    <input type="text" name="Password" id="Pass" className='LoginInputs' />
                    <input type="submit" value="Iniciar Sesion" id='BtnLogin' className='LoginInputs' />
                </form>
            </div>
            <Link to='/' aria-label='exit to login form'>
                <div className="ext" />
            </Link>
        </div>

    )

}