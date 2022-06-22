import React, { useState } from 'react';

//SubComponents
import NavOptions from './options';

//Hooks
import useNavbar from '../../../Hooks/useNavbar';

export default function NavOption() {

    const { navbar, visible, actived } = useNavbar();

    return (

        <div className="navSF-Options" style={{ display: visible }}>
            <NavOptions />
        </div>

    );


}