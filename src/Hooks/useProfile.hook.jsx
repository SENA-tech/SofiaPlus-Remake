import React, { useState } from 'react';

export default function useProfile() {

    const [profile, setProfile] = useState({})

    const getProfile = (params) => {
        fetch('https://SofiaPlus-API.11-cardozo-joan.repl.co/api/profile', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: params
            })
        })
            .then(res => res.json())
            .then(res => {
                setProfile(res)
            })
            .catch(e => console.log(e));
    }

    return { getProfile, profile };
}