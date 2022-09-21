import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Components
import NavbarBase from './Components/navBase';
import NavbarOptions from './Components/navOptions';

import './navbar.css'

export default function Navbar() {

    const [styled, setStyled] = useState(false);

    const visible = () => setStyled(!styled);

    const { pathname } = useLocation();

    useEffect(() => {
        let windowed = () => window.scroll(0, 0)
        if (styled === true) setStyled(false) 
    }, [pathname]);

    return (

        <nav>
            <div className="navSF" >
                <NavbarBase styled={styled} visible={visible} />
                <div className="navSF-Opt" style={{ display: styled === false ? 'none' : 'flex' }}>
                    <NavbarOptions setter={visible} />
                </div>
            </div>
        </nav>

    );
}