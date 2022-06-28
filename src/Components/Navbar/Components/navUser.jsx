import React, { useState } from 'react';

//Data
import UserLogo from '../Import/UserLogo.png'

export default function NavUser({ visible }) {

    return (

        <div className="navSF-Base-User">
            <button onClick={() => { visible() }}>
                <img src={UserLogo} alt="sofia plus user" height={60} width={60}/>
            </button>
        </div>

    );
}