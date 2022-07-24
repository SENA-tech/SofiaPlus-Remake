import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import './register.css'

export default function RegisterForm() {

    return (

        <div className="Login-Form">
            <div className="row">
                <div className="col-md-8">
                    <form action="http://localhost/CRUD/server/signing.php" method="post">
                        <div className="card-header">
                            <h1 id='form-title'>Registro de Usuario</h1>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <br />
                                <label htmlFor='usuario' className="form-label">Usuario</label>
                                <input required type="text" className="LoginInputs" name="Identification" id="usuario" placeholder="Usuario" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor='identificacion' className="form-label">Identificacion</label>
                                <input required type='number' name="Identificacion" className="LoginInputs" id="identificacion" placeholder="Identificacion" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor='correo electronico' className="form-label">Correo</label>
                                <input required type="email" name="Correo" className="LoginInputs" id="correo electronico" placeholder="Correo Electronico" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                <input required type="password" name="Password" className="LoginInputs" id="contraseña" placeholder="Constraseña" />
                            </div>
                            <br />
                            <Link to='/' aria-label='exit to login form'>
                                <input type="submit" value="Registrate" className="btn-primary" />
                            </Link>
                            <br /><br />
                            <small>Si ya tienes un usuario <Link to='/login'>Inicia Sesion</Link></small>
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