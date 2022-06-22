import React from 'react';

//SubComponents
import NavbarSearch from './navSearch';
import NavbarUser from './navUser';
import Logo from './navLogo';

export default function NavBase() {
    return (
        <div className="navSF-Base">
            <Logo />
            <NavbarSearch />
            <NavbarUser />
        </div>
    );
}