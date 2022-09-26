import React, { useState, useEffect } from "react";
import { useLocation, useParams, Navigate, Outlet } from "react-router-dom";
import useProfile from "../../Hooks/useProfile.hook";

//Style
import "./user.css";

//Img's
import UserLogo from "./Import/UserLogo.png";

import EditProfile from "./Components/UserEditButton";

export default function User() {
  let USER_DATA = JSON.parse(window.localStorage.getItem("SessionID"));

  const { getProfile, profile } = useProfile();
  const { pathname } = useLocation();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      getProfile(userId);
    } else {
      console.log(pathname);
    }
  }, [pathname, userId]);

  if (USER_DATA) {
    return (
      <div id="SofiaPlus-User">
        <div className="SofiaPlus-User-Sec Sec1">
          <div className="Sofiaplus-User-s1-profileData">
            <div className="Sofiaplus-User-s1-profileData-identifier">
              <h3> {profile._id} </h3>
            </div>
            <hr className="hr" />
            <div className="Sofiaplus-User-s1-profileData-img">
              <img
                src={profile._profileimage ? profile._profileimage : UserLogo}
                alt="SENA Sofiaplus User"
              />
            </div>
            <div className="Sofiaplus-User-s1-profileData-name">
              <br />
              <h3> {profile._name} </h3>
              <h3> {profile._lastName} </h3>
              <hr className="hr" />
              <h3>
                {profile._type} <br /> {profile._id}
              </h3>
              <EditProfile id={profile._key} data={profile._id}/>
            </div>
          </div>
        </div>
        <div className="SofiaPlus-User-Sec Sec2">
          <div className="Sofiaplus-User-s2-Courses">
            <div className="Sofiaplus-User-s2-Courses-Title">
              <h1>Cursos</h1>
            </div>
            <hr className="hr" />
            <div className="Sofiaplus-User-s2-Courses-Content">
              <div className="Sofiaplus-User-s2-Courses-Element">
                <img
                  src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png"
                  alt="Imagen Curso SENA"
                />
                <h3>Curso 1</h3>
              </div>
              <div className="Sofiaplus-User-s2-Courses-Element">
                <img
                  src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png"
                  alt="Imagen Curso SENA"
                />
                <h3>Curso 2</h3>
              </div>
              <div className="Sofiaplus-User-s2-Courses-Element">
                <img
                  src="https://sena.edu.co/Style%20Library/alayout/images/logoSena.png"
                  alt="Imagen Curso SENA"
                />
                <h3>Curso 3</h3>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  } else {
    <Navigate to="/login" />;
  }
}
