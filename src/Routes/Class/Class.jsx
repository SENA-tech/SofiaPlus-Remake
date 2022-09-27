import React, { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";

//CSS
import "./class.css";

//Data
import useSearch from "../../Services/searchCourses.services";

//Components
import Search from "./Components/Search";
import CoursesButton from "./Components/CoursesButton";
import CoursesEditButton from "./Components/CourseEditButton";

export default function Classmates() {
  const { search } = useSearch();
  const [params, setParams] = useSearchParams();

  const [input, setInput] = useState(search);
  const [datos, setDatos] = useState(true);

  let permission = JSON.parse(window.localStorage.getItem("SessionID"));
  let DATA_COURSES = JSON.parse(window.localStorage.getItem("coursesData"));

  let data = (param) => {
    if (param === 1) return "Carrera Presencial";
    if (param === 2) return "Curso Corto Presencial";
    if (param === 3) return "Carrera Virtual";
    if (param === 4) return "Curso Corto Virtual";
    if (param === 5) return "Curso de Ingles";
  };

  let returned = () => {
    console.log("returned");
    setInput(search);
    setDatos(!datos);
  };

  let style = () => {
    if (permission) {
      return permission._permissions === 1 ? "flex" : "none";
    } else {
      return "none";
    }
  };

  return (
    <div>
      <Search setParams={(ev) => {setParams(ev)}} returned={() => returned()} INPUT={input} />
      <main className="contenedor-cursos">
        {DATA_COURSES.map((res) => {
          return (
            <div key={res.id} className="contenedor-card-cursos">
              <div className="header-cursos">
                <div className="red-2">
                  <div className="red">
                    <img src={res.image} alt="SENA-clases" />
                  </div>
                </div>
                <h2>{res.nombre}</h2>
                <h4>{res.id}</h4>
                <CoursesEditButton nombreC={res.nombre} ident={res.id} />
              </div>
              <div className="descripcion-cursos">
                <div className="txt">
                  <h4> Modalidad </h4>
                  <p>{data(res.tipo)}</p>
                  <h4> Descripción </h4>
                  <p>{res.duracion} Horas</p>
                  <h4> Descripción </h4>
                  <p> {res.descripcion} </p>
                </div>
                <br />
                <div className="mas">
                  <div className="mas-informacion">
                    <Link to={`about/${res.id}`}>
                      <button>Más Información</button>
                    </Link>
                  </div>
                  <div style={{ display: style() }} className="mas-eliminacion">
                    <Link to={`delete/${res.id}`}>
                      <button>Eliminar Curso</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <CoursesButton />
      </main>
    </div>
  );
}
