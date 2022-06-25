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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus esse aperiam similique autem tenetur, error quos dicta architecto, quaerat asperiores ea exercitationem, inventore veniam consequatur explicabo. Voluptate, deleniti adipisci.
                </p>
                <Link to='/about'>
                    <button id='body-information'>Mas Informacion</button>
                </Link>
            </div>

        </div>

    )

}