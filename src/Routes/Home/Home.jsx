import React from 'react';
import { Outlet } from 'react-router-dom';


//Components
import Body1 from './Components/body01-Text';
import Body2 from './Components/body02-img';
import Body from './Components/Body';

import './home.css'

export default function Home() {

    return (

        <div>
            <main>
                <header>
                    <div className="homeSF-1">
                        <Body1 />
                        <Body2 />
                    </div>
                </header>
                <hr className='hr' />
                <div className="homeSF-2">
                    <Body />
                </div>
            </main>
            <div className='homeSF'>
                <Outlet />
            </div>

        </div>

    )

}