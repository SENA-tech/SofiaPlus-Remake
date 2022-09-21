import React from 'react';

//SubComponents
import NavbarUser from './navUser';
import Logo from './navLogo';

export default function NavBase({ visible, styled }) {
    return (
        <div className="navSF-Base">
            <Logo />
            <NavbarUser visible={visible}/>
        </div>
    );
}