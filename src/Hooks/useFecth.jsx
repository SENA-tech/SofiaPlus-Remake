import React, { useState } from 'react';

export default function useFecth() {

    const [Type, setType] = useState('Ti')
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [responce, setResponce] = useState(false);

    const inputUser = (event) => {
        setUser(event.target.value);
    }

    const inputPass = (event) => {
        setPassword(event.target.value);
    }

    //Change the type of document
    const changeType = (event) => {
        console.log(event.target.value);
        setType(event.target.value);
    }

    const inputNombre = (event) => {
        setNombre(event.target.value);
    }

    const inputApellido = (event) => {
        setApellido(event.target.value);
    }

    const login = () => {

        console.log('Login');

        fetch('http://localhost:4000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: Type,
                id: User,
                pass: Password
            })
        })
            .then(res => res.json())
            .then(res => {
                res.validate === true
                    ? //If
                    window.localStorage.setItem('SessionID', User)
                    : //Else
                    setResponce(false)
            })
            .catch(e => console.log(e));

    }

    const register = () => {

        fetch('http://localhost:4000/', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: Type,
                id: User,
                pass: Password,
                nombre: Nombre,
                apellido: Apellido
            })
        })
            .then(res => res.json())
            .then(res => {
                res.register === 'Succesfull Register'
                    ? //If
                    setResponce(true)
                    :// Else
                    setResponce(false)
            })
            .catch(e => console.log(e));
    }

    return { login, register, inputPass, inputUser, changeType, inputNombre, inputApellido }

}