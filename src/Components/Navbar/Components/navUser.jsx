import React from 'react';

//Data
import UserLogo from '../Import/UserLogo.png'

export default function navUser() {
    return (

        <div className="navSF-Base-User">
            <button>
                <img src={UserLogo} alt="sofia plus user" height={60}/>
            </button>
        </div>

    );
}