import React from 'react';

//SubComponents
import NavOptions from './options';

export default function NavOption({ setter }) {

    console.log('Navoptions')

    return (

        <div className="navSF-Options">
            <NavOptions setter={setter}/>
        </div>

    );


}