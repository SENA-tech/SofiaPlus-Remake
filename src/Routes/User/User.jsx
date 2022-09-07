import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useProfile from '../../Hooks/useProfile.hook';

//Style
import './user.css';

//Img's
import UserLogo from './Import/UserLogo.png';

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
        } else {
            console.log(pathname);
        }
    }, [pathname, userId]);

    return (

        <div id="SofiaPlus-User">
            <div className="SofiaPlus-User-Sec Sec1">
                <div className="Sofiaplus-User-s1-profileData">
                    <div className="Sofiaplus-User-s1-profileData-identifier">
                        <h3> {userId} </h3>
                    </div>
                    <hr className='hr' />
                    <div className="Sofiaplus-User-s1-profileData-img">
                        <img src={UserLogo} alt="SENA Sofiaplus User" />
                    </div>
                    <div className="Sofiaplus-User-s1-profileData-name">
                        <hr className='hr' />
                        <h3> {profile._name} </h3>
                        <h3> {profile._lastName} </h3>
                        <hr className='hr' />
                        <h3> {profile._type} <br /> {profile._id} </h3>
                    </div>
                </div>
            </div>
            <div className="SofiaPlus-User-Sec Sec2">
                <div className="Sofiaplus-User-s2-Courses">
                    <div className="Sofiaplus-User-s2-Courses-Title">
                        <h1>Cursos</h1>
                    </div>
                    <hr className='hr' />
                    <div className="Sofiaplus-User-s2-Courses-Content">
                        <div className="Sofiaplus-User-s2-Courses-Element">
                            <img src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png" alt="" />
                            <h3>Curso 1</h3>
                        </div>
                        <div className="Sofiaplus-User-s2-Courses-Element">
                            <img src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png" alt="" />
                            <h3>Curso 2</h3>
                        </div>
                        <div className="Sofiaplus-User-s2-Courses-Element">
                            <img src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png" alt="" />
                            <h3>Curso 3</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}