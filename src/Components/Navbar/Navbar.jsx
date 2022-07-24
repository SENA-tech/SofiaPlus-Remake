import React, { useState } from 'react';

//Components
import NavbarBase from './Components/navBase';
import NavbarOptions from './Components/navOptions';

import './navbar.css'

export default function Navbar() {

    const [styled, setStyled] = useState(false);

    const visible = () => setStyled(!styled);

    return (

        <nav>
            <div className="navSF" >
                <NavbarBase visible={visible}/>
                <div className="navSF-Opt" style={{ display: styled === false ? 'none' : 'flex'}}>
                    <NavbarOptions setter={visible}/>
                </div>
            </div >
        </nav>

    );
}