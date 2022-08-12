import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useProfile from '../../Hooks/useProfile';

//Components
import TopBar from './Components/TopBar/Topbar';

export default function User() {

    const { getProfile, profile } = useProfile()
    const { pathname } = useLocation();
    const { userId } = useParams();

    //States
    const [profiledata, setProfiledata] = useState({})

    function Fecth() {
        return (
            <div className="User-Home" >
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1> {profile._id} </h1>
                <h1> {profile._name} </h1>
                <h1> {profile._lastName} </h1>
                <h1> {profile._type} </h1>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
    
    function Nofecth() {
        return (
            <div className="User-Home" >
                <br /><br /><br /><br /><br /><br /><br /><br />
                <h1> No hay datos </h1>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }

    useEffect(() => {
        if (userId) {
            console.log(userId);
            getProfile(userId);
            setProfiledata(profile);
        } else {
            console.log(pathname);
        }
    }, [pathname, userId]);

    return (

        <div>
            {
                profile ? <Fecth /> : <Nofecth />
            }
        </div>

    )

}