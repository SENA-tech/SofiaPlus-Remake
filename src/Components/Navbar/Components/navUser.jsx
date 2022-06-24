import React, { useState } from 'react';

//Data
import UserLogo from '../Import/UserLogo.png'

export default function NavUser({ visible, hide }) {

    const [options, setOptions] = useState(true);

    const setter = () => {

        setOptions(!options);

        if (options === true) {
            visible();
        } else {
            hide();
        }

    }

    return (

        <div className="navSF-Base-User">
            <button onClick={() => { setter() }}>
                <img src={UserLogo} alt="sofia plus user" height={60}/>
            </button>
        </div>

    );
}