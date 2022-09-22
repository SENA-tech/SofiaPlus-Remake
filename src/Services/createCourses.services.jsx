import React, { useState } from 'react';

export default function useGetCourses() {

    const [nombre, setNombre] = useState('');
    const [instructor, setInstructor] = useState('');
    const [tipo, setTipo] = useState('1');
    const [image, setImage] = useState('https://e7.pngegg.com/pngimages/575/29/png-clipart-computer-icons-instructor-led-training-course-education-toolbox-miscellaneous-blue.png');
    const [descripcion, setDescripcion] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [habilidades, setHabilidades] = useState('');
    const [inicio, setInicio] = useState();
    const [fin, setFin] = useState();
    const [duracion, setDuracion] = useState();


    const inputNombre = (event) => {
        setNombre(event.target.value);
    }

    const inputInstructor = (event) => {
        setInstructor(event.target.value);
    }

    const inputTipo = (event) => {
        setTipo(event.target.value);
    }

    const inputImage = (event) => {
        setImage(event.target.value);
    }

    const inputDescripcion = (event) => {
        setDescripcion(event.target.value);
    }

    const inputRequisitos = (event) => {
        setRequisitos(event.target.value);
    }

    const inputHabilidades = (event) => {
        setHabilidades(event.target.value);
    }

    const inputInicio = (event) => {
        setInicio(event.target.value);
    }

    const inputFin = (event) => {
        setFin(event.target.value);
    }

    const inputDuracion = (event) => {
        setDuracion(event.target.value);
    }

    const datafecth = () => {

        let userdata = JSON.parse(window.localStorage.getItem('SessionID'))

        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/data/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _permission: userdata._permissions,
                _code: userdata._key,
                name: nombre,
                teacher: instructor,
                type: tipo,
                image: image,
                description: descripcion,
                requirements: requisitos,
                skills: habilidades,
                start: inicio,
                end: fin,
                duration: duracion,
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    return {
        datafecth,
        inputNombre,
        inputInstructor,
        inputTipo,
        inputImage,
        inputDescripcion,
        inputRequisitos,
        inputHabilidades,
        inputInicio,
        inputFin,
        inputDuracion,
        tipo
    }
}
