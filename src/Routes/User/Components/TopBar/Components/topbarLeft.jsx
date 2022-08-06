import React, { useState } from 'react';

//Img's
import Menu from './Imports/Menu_Dark.png';

export default function TopLeft() {

    const [tools, setTools] = useState(false);

    const test = () => {
        setTools(!tools)
        console.log(tools);
    }

    return (

        <div className="Left-Topbar-SF">
            <div className="Toll-Name-SF">

            </div>
            <div className="Toll-Btns-SF">
                <button className='Btn-Tolls' onClick={() => test()}>
                    <img src={Menu} alt="Menu-Toll -tools" width={40} height={40}/>
                </button>
                <button className='Btn-Tolls -signout' onClick={() => test()}>
                    Sing Out
                </button>
            </div>
        </div>

    )

}