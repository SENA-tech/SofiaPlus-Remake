import React, { useState } from 'react';

export default function useProfile() {

    const [profile, setProfile] = useState({})

    const getProfile = (params) => {
        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/users/data', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _key: params
            })
        })
            .then(res => res.json())
            .then(res => {
                setProfile(res)
            })
            .catch(e => console.log(e));
    }

    const updateProfile = (img, pass, tok) => {
        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/users/edit', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Imagen: img,
                Password: pass,
                token: tok
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(e => console.log(e));
    }

    return { getProfile, profile, updateProfile };
}