import React from 'react';
import { Link } from 'react-router-dom';

//Imports
import SFLogoL from '../Import/SFLogoL';

export default function navLogo() {
    return (

        <div className="navSF-Base-Logo" >
            <Link to='/'>
                <SFLogoL />
            </Link>
        </div >

    );
}