import React from 'react';

//SubComponents
import NavbarSearch from './navSearch';
import NavbarUser from './navUser';
import Logo from './navLogo';

export default function NavBase({ visible, styled }) {
    return (
        <div className="navSF-Base">
            <Logo />
            <NavbarSearch styled={styled} visible={visible}/>
            <NavbarUser visible={visible}/>
        </div>
    );
}