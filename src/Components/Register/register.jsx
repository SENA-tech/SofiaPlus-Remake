import React from 'react';
import { Link } from 'react-router-dom';

//Custom Hooks
import useAouth from '../../Hooks/useAouth';

//CSS
import './register.css'

export default function RegisterForm() {

    const { register, changeType, inputPass, inputUser, inputApellido, inputNombre } = useAouth();

    return (

        <div className="Login-Form">
            <div className="row">
                <div className="col-md-8">
                    <div>
                        <div className="card-header">
                            <h1 id='form-title'>Registro de Usuario</h1>
                        </div>
                        <div className="card-body">
                            <br />
                            <div className="mb-8">
                                <div className="mb-3-names">
                                    <label htmlFor='nombres' className="form-label">Nombres</label>
                                    <input required onChange={ev => inputNombre(ev)} type='text' name="nombres" className="LoginInputs" id="nombres" placeholder="Nombre Completos" />
                                </div>
                                <div className="mb-3-names">
                                    <label htmlFor='apellidos' className="form-label">Apellidos</label>
                                    <input required onChange={ev => inputApellido(ev)} type='text' name="apellidos" className="LoginInputs" id="apellidos" placeholder="Apellidos Completos" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='identificacion' className="form-label">Identificacion</label>
                                <input required onChange={ev => inputUser(ev)} type='number' name="Identificacion" className="LoginInputs" id="identificacion" placeholder="Identificacion" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='Type' className="form-label">Tipo de Documento</label>
                                <select required onChange={ev => changeType(ev)} name="type" className="LoginInputs" id="correo electronico" >
                                    <option value="ti">Tarjeta de Identidad</option>
                                    <option value="cc">Cedula de Ciudadania</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor='contraseña' className="form-label">Contraseña</label>
                                <input required onChange={ ev => inputPass(ev) } type="password" name="Password" className="LoginInputs" id="contraseña" placeholder="Constraseña" />
                            </div>
                            <Link to='/' aria-label='exit to login form'>
                                <input onClick={() => register()} type="submit" value="Registrate" className="btn-primary" />
                            </Link>
                            <br /><br />
                            <small>Si ya tienes un usuario <Link to='/login' className='ancor'>Inicia Sesion</Link></small>
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