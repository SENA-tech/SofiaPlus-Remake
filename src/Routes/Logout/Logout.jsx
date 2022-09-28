import React from 'react';
import { Navigate } from "react-router-dom";

export default function Logout() {

    window.localStorage.removeItem('MESSAGE')
    window.localStorage.removeItem('SessionID')

    return (

        <div>
            <h1>Sesion Finalizada</h1>
            <Navigate to='/'/>
        </div>

    )

}