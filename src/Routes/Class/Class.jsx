import React from "react";
import { Link, Outlet } from "react-router-dom";

//CSS
import "./class.css";

//Data
import { data } from "./data";

export default function Classmates() {

  let DATA_COURSES = JSON.parse(window.localStorage.getItem('coursesData'));
  let USER_DATA = JSON.parse(window.localStorage.getItem('SessionID'));

  let data = (param) => {
    if (param === 1) return 'Carrera Presencial'
    if (param === 2) return 'Curso Corto Presencial'
    if (param === 3) return 'Carrera Virtual'
    if (param === 4) return 'Curso Corto Virtual'
    if (param === 5) return 'Curso de Ingles'
  }

  let create_course = () => {
    console.log('Quiero crear un curso');
  }

  let boton_cursos = () => {
    if (USER_DATA) {

      let despliegue = USER_DATA._permissions === 1 ? 'flex' : USER_DATA._permissions === 2 ? 'flex' : 'none'

      return (
        <div style={{ display: despliegue }} className="crear-cursos">
          <button onClick={ () => create_course() }>
            <h2>Crear Curso</h2>
          </button>
        </div>
      )
    }
  }

  return (
    <div>
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
        {
          boton_cursos()
        }
      </main>
    </div>
  );
}
