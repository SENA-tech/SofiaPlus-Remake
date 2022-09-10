import React from "react";
import { Link, Outlet } from "react-router-dom";

//CSS
import "./class.css";

//Data
import { data } from "./data";

export default function Classmates() {
  return (
    <div>
      <main className="contenedor-cursos">
        {data.map((e) => {
          return (
            <div key={e.id} className="contenedor-card-cursos">
              <div className="header-cursos">
                <div className="red-2">
                  <div className="red">
                    <img src={e.img} alt="SENA-clases" />
                  </div>
                </div>
                <h2>{e.nombre}</h2>
                <h4>{e.numero_ficha}</h4>
              </div>
              <div className="descripcion-cursos">
                <div className="txt">
                  <h4> Modalidad </h4>
                  <p>{e.modalidad}</p>
                  <h4> Duracion </h4>
                  <p>{e.duracion}</p>
                  <h4> Jornada </h4>
                  <p> {e.jornada} </p>
                </div>
                <br />
                <div className="mas-informacion">
                  <Link to="about">
                    <button>Mas Informacion</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
