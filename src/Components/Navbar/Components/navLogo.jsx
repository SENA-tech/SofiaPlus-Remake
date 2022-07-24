import React from 'react';
import { Link } from 'react-router-dom';

//Imports
import SFLogoL from '../Import/SFLogoL.png';
import SFLogoD from '../Import/SFLogoD.png';

export default function navLogo() {
    return (

        <div className="navSF-Base-Logo" >
            <Link to='/'>
                <img src={SFLogoL} alt="SofiaPlus Remake" height={80} id='logo-Nav' />
            </Link>
        </div >

    );
}