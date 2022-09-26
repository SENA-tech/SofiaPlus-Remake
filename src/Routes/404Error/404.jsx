import React from 'react';
import { Link } from 'react-router-dom';

import './404.css'

export default function Error404() {

    return (
        <div className="ClassmatesSF">
            <div class="error-404">
                <Link to='/'>
                    <h1 class="er4">Error - 404</h1>
                </Link>
                <p class="txt2">Lo sentimos, el equipo de desarrollo del SENA esta trabajando para corregir el error, gracias por su
                    comprension :3
                </p>
                <p class="txt2">Intentalo mas tarde</p>
            </div>
        </div>
    )

}