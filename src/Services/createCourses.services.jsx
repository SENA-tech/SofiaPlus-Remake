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

        console.log("🚀 ~ file: createCourses.services.jsx ~ line 6 ~ useGetCourses ~ nombre", nombre)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 8 ~ useGetCourses ~ instructor", instructor)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 10 ~ useGetCourses ~ tipo", tipo)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 12 ~ useGetCourses ~ image", image)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 14 ~ useGetCourses ~ descripcion", descripcion)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 16 ~ useGetCourses ~ requisitos", requisitos)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 18 ~ useGetCourses ~ habilidades", habilidades)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 20 ~ useGetCourses ~ inicio", inicio)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 22 ~ useGetCourses ~ fin", fin)
        console.log("🚀 ~ file: createCourses.services.jsx ~ line 24 ~ useGetCourses ~ duracion", duracion)

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
