import React from 'react';
import { useParams } from 'react-router-dom';

//Components
import TopBar from './Components/TopBar/Topbar';

export default function User() {

    const { userId } = useParams();

    return (

        <div className="User-Home">
            <br /><br /><br /><br /><br /><br /><br /><br />
            <h1>this is your profile</h1>
        </div>

    )

}