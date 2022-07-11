import React from 'react';

//SubComponents
import NavOptions from './options';

export default function NavOption({ setter }) {

    return (

        <div className="navSF-Options">
            <NavOptions setter={setter}/>
        </div>

    );


}