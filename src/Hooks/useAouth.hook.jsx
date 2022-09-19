import React, { useState } from 'react';

export default function useAouth() {

    const [Type, setType] = useState('1')
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [responce, setResponce] = useState('');

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

        console.log(Type);
        console.log(User);
        console.log(Password);

        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/users/log', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Type: Type,
                Identification: User,
                Password: Password
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.CODE === 200) { //If
                    window.localStorage.setItem('SessionID', JSON.stringify(res))
                    window.location.reload();
                } else { //Else
                    console.log('Non Session');
                }
            })
            .catch(e => console.log(e));

    }

    const register = () => {

        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/users/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Type: Type,
                Identification: User,
                Password: Password,
                FirstName: Nombre,
                SecondName: Apellido
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