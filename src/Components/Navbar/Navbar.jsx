import React, { useState } from 'react';

//Components
import NavbarBase from './Components/navBase';
import NavbarOptions from './Components/navOptions';

import './navbar.css'

export default function Navbar() {

    const [styled, setStyled] = useState('none')

    const visible = () => setStyled('flex');

    const hidden = () => setStyled('none');

    return (

        <nav>
            <div className="navSF" >
                <NavbarBase visible={visible} hidden={hidden}/>
                <div className="navSF-Opt" style={{ display: styled }}>
                    <NavbarOptions setter={hidden}/>
                </div>
            </div >
        </nav>

    );
}