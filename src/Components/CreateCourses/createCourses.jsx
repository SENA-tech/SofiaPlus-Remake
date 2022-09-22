import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

//Custom Hooks
import useAouth from "../../Hooks/useAouth.hook";

//CSS
import "./createCourses.css";

export default function CoursesCreate() {
  let permission = JSON.parse(window.localStorage.getItem("SessionID"));

  console.log(permission.CODE);

  if (window.localStorage.getItem("SessionID")) {
    if (permission.CODE === 200) {
        return (
            <main className="Courses-Form">
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <div className="card-header">
                      <h1 id="form-title">Crear Cursos</h1>
                    </div>
                    <form action="https://sofiaplus-web-server-php.11-cardozo-joan.repl.co/secciones/cursos.php" method="post">
                      <div className="card-body">
                      <br />
                      <div className="mb-3">
                        <label htmlFor="NombreCurso" className="form-label">
                          Nombre del Curso
                        </label>
                        <input
                          required
                          type="number"
                          className="LoginInputs"
                          name="nameC"
                          id="NombreCurso"
                          placeholder="NombreCurso"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="instructor" className="form-label">
                          Identificacion de Instructor
                        </label>
                        <input
                          required
                          type="number"
                          className="LoginInputs"
                          name="Identification"
                          id="instructor"
                          placeholder="instructor"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Type" className="form-label">
                          Tipos de Modalidad
                        </label>
                        <select
                          required
                          name="type"
                          className="LoginInputs"
                          id="correo electronico"
                        >
                          <option value="1">Carrera Presencial</option>
                          <option value="2">Curso Corto Presencial</option>
                          <option value="3">Carrera Virtual</option>
                          <option value="4">Curso Corto Virtual</option>
                          <option value="5">Ingles</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Image" className="form-label">
                          Imagen de Portada
                        </label>
                        <input
                          required
                          type="text"
                          className="LoginInputs"
                          name="Image"
                          id="Image"
                          placeholder="Image"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Descripcion" className="form-label">
                          Descripcion
                        </label>
                        <input
                          required
                          type="password"
                          name="Descripcion"
                          className="LoginInputs"
                          id="Descripcion"
                          placeholder="Descripcion"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Requisitos" className="form-label">
                          Requisitos
                        </label>
                        <input
                          required
                          type="password"
                          name="Requisitos"
                          className="LoginInputs"
                          id="Requisitos"
                          placeholder="Requisitos"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Habilidades" className="form-label">
                          Descripcion
                        </label>
                        <input
                          required
                          type="password"
                          name="Habilidades"
                          className="LoginInputs"
                          id="Habilidades"
                          placeholder="Habilidades"
                        />
                      </div>
                      <div className="mb-8">
                        <div className="mb-3-names">
                          <label htmlFor="nombres" className="form-label">
                            Nombres
                          </label>
                          <input
                            type="date"
                            className="LoginInputs"
                            name="Inicio"
                            id="nombres"
                            placeholder="Nombre Completos"
                          />
                        </div>
                        <div className="mb-3-names">
                          <label htmlFor="apellidos" className="form-label">
                            Apellidos
                          </label>
                          <input
                            type="date"
                            className="LoginInputs"
                            name="Fin"
                            id="apellidos"
                            placeholder="Apellidos Completos"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Duracion" className="form-label">
                          Duracion
                        </label>
                        <input
                          type="number"
                          className="LoginInputs"
                          name="Duracion"
                          id="Duracion"
                        />
                      </div>
                      <Link to="/search" aria-label="exit to login form">
                        <input
                          type="submit"
                          value="Crear Curso"
                          className="btn-primary"
                        />
                      </Link>
                      <br />
                      <br />
                    </div>
                    </form>
                  </div>
                </div>
              </div>
              <Link to="/search" aria-label="exit to login form">
                <div className="ext" />
              </Link>
            </main>
          );
    }
  } else {
    return <Navigate to="/" />;
  }
}
