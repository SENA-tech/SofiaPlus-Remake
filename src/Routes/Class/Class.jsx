import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

//CSS
import "./class.css";

//Data
import useSearch from "../../Services/searchCourses.services";

export default function Classmates() {

  const { datafecth, inputSearch, search } = useSearch();
  const [input, setInput] = useState(search)
  const [datos, setDatos] = useState(true)

  let DATA_COURSES = JSON.parse(window.localStorage.getItem("coursesData"));
  let USER_DATA = JSON.parse(window.localStorage.getItem("SessionID"));

  let data = (param) => {
    if (param === 1) return "Carrera Presencial";
    if (param === 2) return "Curso Corto Presencial";
    if (param === 3) return "Carrera Virtual";
    if (param === 4) return "Curso Corto Virtual";
    if (param === 5) return "Curso de Ingles";
  };

  let create_course = () => {
    console.log("Quiero crear un curso");
  };


  let boton_cursos = () => {
    if (USER_DATA) {
      let despliegue = USER_DATA._permissions === 1 ? "flex" : USER_DATA._permissions === 2 ? "flex" : "none";

      return (
        <div style={{ display: despliegue }} className="crear-cursos">
          <Link to='createCourse'>
            <button onClick={() => create_course()}>
              <h2>Crear Curso</h2>
            </button>
          </Link>
        </div>
      );
    }
  };

  let returned = () => {return <Navigate to='/search' />}

  return (
    <div>
      <div className="formulario-busqueda-filtros">
        <div className="formulario-busqueda-filtros-box">
          <div className="text-filtros">
            <h2>¿Qué desea estudiar?</h2>
          </div>
          <div className="buscador-css">
            <div className="icon-searh">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 
                            0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 
                            4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 
                            14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <div className="input-search-css">
              <input value={input} onChange={(ev) => {
                inputSearch(ev);
                returned();
              datafecth();
              }} type="text" name="busqueda" placeholder="busqueda" />
            </div>
          </div>
          <div className="filtros-boton-style">
            <select name="filtertype" id="filtro-de-tipo">
              <option className="filtro-css" value="1">Carrera Presencial</option>
              <option className="filtro-css" value="2">Curso Corto Presencial</option>
              <option className="filtro-css" value="3">Carrera Virtual</option>
              <option className="filtro-css" value="4">Curso Corto Virtual</option>
              <option className="filtro-css" value="5">Ingles</option>
            </select>
          </div>
        </div>
      </div>
      <main className="contenedor-cursos">
        {
          DATA_COURSES.map((res) => {
            return (
              <div key={res.id} className="contenedor-card-cursos">
                <div className="header-cursos">
                  <div className="red-2">
                    <div className="red">
                      <img src={res.image} alt="SENA-clases" />
                    </div>
                  </div>
                  <h2>{res.nombre}</h2>
                  <h4>{res.numero_ficha}</h4>
                </div>
                <div className="descripcion-cursos">
                  <div className="txt">
                    <h4> Modalidad </h4>
                    <p>{data(res.tipo)}</p>
                    <h4> Duracion </h4>
                    <p>{res.duracion}</p>
                    <h4> Descripcion </h4>
                    <p> {res.descripcion} </p>
                  </div>
                  <br />
                  <div className="mas-informacion">
                    <Link to={`about/${res.id}`}>
                      <button>Mas Informacion</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        {boton_cursos()}
      </main>
    </div>
  );
}
