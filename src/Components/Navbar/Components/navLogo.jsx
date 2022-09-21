import React from 'react';
import { Link } from 'react-router-dom';

//Imports
import SFLogoL from '../Import/SFLogoL.png';

export default function navLogo() {
    return (
        <div className='navSF-Logo-Sec'>
            <div className="navSF-Base-Logo" >
                <Link to='/'>
                    <img src={SFLogoL} alt="SENA Sofiaplus Logo" />
                </Link>
            </div>
        </div>
    );
}