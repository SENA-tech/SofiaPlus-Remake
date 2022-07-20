import React, { useEffect } from 'react';
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
            <div className="row">
                <div className="col-md-8">
                    <form action="http://localhost/CRUD/server/signing.php" method="post">
                        <div className="card-header">
                            <h1 id='form-title'>Inicio de Sesión</h1>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <br />
                                <label htmlFor='usuario' className="form-label">Usuario</label>
                                <input type="text" className="LoginInputs" name="Identification" id="usuario" placeholder="Usuario" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                <input type="password" name="Password" className="LoginInputs" id="contraseña" placeholder="Constraseña" />
                            </div>
                            <br />
                            <input type="submit" value="Iniciar Sesion" className="btn-primary" />
                        </div>
                    </form>
                </div>
            </div >
            <Link to='/' aria-label='exit to login form'>
                <div className="ext" />
            </Link>
        </div>

    )

}