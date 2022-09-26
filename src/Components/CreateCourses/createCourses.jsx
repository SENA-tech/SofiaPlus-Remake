import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

//Custom Hooks
import useGetCourses from "../../Services/createCourses.services";

//CSS
import "./createCourses.css";

export default function CoursesCreate() {
  const {
    tipo,
    datafecth,
    inputDescripcion,
    inputDuracion,
    inputFin,
    inputHabilidades,
    inputImage,
    inputInicio,
    inputInstructor,
    inputNombre,
    inputRequisitos,
    inputTipo,
  } = useGetCourses();

  let permission = JSON.parse(window.localStorage.getItem("SessionID"));

  if (window.localStorage.getItem("SessionID")) {
    if (permission._permissions === 1 || 2) {
      return (
        <main className="Courses-Form">
          <div className="row">
            <div className="col-md-8">
              <div>
                <div className="card-header">
                  <h1 id="form-title">Crear Cursos</h1>
                </div>
                <div className="card-body">
                  <br />
                  <div className="mb-3">
                    <label htmlFor="NombreCurso" className="form-label">
                      Nombre del Curso
                    </label>
                    <input
                      onChange={(ev) => inputNombre(ev)}
                      required
                      type="text"
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
                      onChange={(ev) => inputInstructor(ev)}
                      required
                      type="number"
                      className="LoginInputs"
                      name="teacherC"
                      id="instructor"
                      placeholder="instructor"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Type" className="form-label">
                      Tipos de Modalidad
                    </label>
                    <select
                      onChange={(ev) => inputTipo(ev)}
                      value={tipo}
                      required
                      name="typeC"
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
                      onChange={(ev) => inputImage(ev)}
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
                      onChange={(ev) => inputDescripcion(ev)}
                      required
                      type="text"
                      name="descriptionC"
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
                      onChange={(ev) => inputRequisitos(ev)}
                      required
                      type="text"
                      name="requirementsC"
                      className="LoginInputs"
                      id="Requisitos"
                      placeholder="Requisitos"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Habilidades" className="form-label">
                      Habilidades
                    </label>
                    <input
                      onChange={(ev) => inputHabilidades(ev)}
                      required
                      type="text"
                      name="skillsC"
                      className="LoginInputs"
                      id="Habilidades"
                      placeholder="Habilidades"
                    />
                  </div>
                  <div className="mb-8">
                    <div className="mb-3-names">
                      <label htmlFor="nombres" className="form-label">
                        Fecha Inicio
                      </label>
                      <input
                        onChange={(ev) => inputInicio(ev)}
                        type="date"
                        className="LoginInputs"
                        name="startC"
                        id="nombres"
                        placeholder="Nombre Completos"
                      />
                    </div>
                    <div className="mb-3-names">
                      <label htmlFor="apellidos" className="form-label">
                        Fecha FIn
                      </label>
                      <input
                        onChange={(ev) => inputFin(ev)}
                        type="date"
                        className="LoginInputs"
                        name="endC"
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
                      onChange={(ev) => inputDuracion(ev)}
                      type="number"
                      className="LoginInputs"
                      name="durationC"
                      id="Duracion"
                    />
                  </div>
                  <Link to="/search" aria-label="exit to login form">
                    <input
                      onClick={() => datafecth()}
                      type="submit"
                      value="Crear Curso"
                      className="btn-primary"
                    />
                  </Link>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  } else {
    return <Navigate to="/" />;
  }
}
