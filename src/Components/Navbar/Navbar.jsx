import React, { useState } from 'react';

//Components
import NavbarBase from './Components/navBase';
import NavbarOptions from './Components/navOptions';

import './navbar.css'

export default function Navbar() {

    const [useNav, setUseNav] = useState();

    const usenav = property => {
        return 
    }


    return (

        <nav>
            <div className="navSF" >
                <NavbarBase />
                <div className="navSF-Opt">
                    <NavbarOptions use={}/>
                </div>
            </div >
        </nav>

    );
}