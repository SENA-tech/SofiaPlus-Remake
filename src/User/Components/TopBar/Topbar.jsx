import React from 'react';

//Css
import './topbar.css'

//Components
import TollLeft from './Components/topbarLeft';

export default function Topbar() {

    return (

        <nav>
            <div className="TopBar-SF">
                <TollLeft />
            </div>
        </nav>

    )

}