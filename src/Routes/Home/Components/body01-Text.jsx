import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

//Data
import { FlechaDown } from '../data';

export default function Body01() {

    return (

        <div className="homeSFb body01">
            <div className="text-body">
                <h2 className='body-titles title-h2'>Bienvenido a SofiaPlus REMAKE</h2>
                <h1 className='body-titles'>El portal de oferta educativa SENA</h1>
                <h3 id='body-textlorem'>Recreacion del SENA Sofia Plus, pensada para reemplazar el actual SofiaPlus, Dando un nuevo diseÑo, sistema, y accesibilidad
                </h3>
                <h1 className="text-h1">
                    <Link to='/about' id='body-information'>
                        <img className='img-link-about' src={FlechaDown} width="25px" />
                        Mas Informacion
                        <img className='img-link-about' src={FlechaDown} width="25px" />
                    </Link>
                </h1>
            </div>

        </div>

    )

}