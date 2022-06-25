import React from 'react';
import { Outlet } from 'react-router-dom';

//Components
import Body1 from './Components/body01-Text';
import Body2 from './Components/body02-img';

import './home.css'

export default function Home() {

    return (

        <div>
            <main>
                <div className="homeSF">
                    <Body1 />
                    <Body2 />
                </div>
            </main>
            <div className='homeSF'>
                <Outlet />
            </div>
        </div>

    )

}