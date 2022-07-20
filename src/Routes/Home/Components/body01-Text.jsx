import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export default function Body01() {

    return (

        <div className="homeSFb body01">
            <div className="text-body">
                <h2 className='body-titles title-h2'>Bienvenido a SofiaPlus REMAKE</h2>
                <h1 className='body-titles'>El portal de oferta educativa SENA</h1>
                <p id='body-textlorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis laborum sed voluptates eum, earum dolorem modi culpa vel non voluptate soluta aut voluptatem officia recusandae officiis nisi? Consectetur, cupiditate quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, minima ullam! Veritatis officiis rem aliquid earum corporis excepturi. Totam quaerat quas eligendi fuga rerum ipsum corrupti neque blanditiis vel voluptatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link to='/about' id='body-information'>
                    Mas Informacion
                </Link>
            </div>

        </div>

    )

}