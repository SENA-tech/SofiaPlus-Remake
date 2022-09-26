import { Link, useParams } from "react-router-dom";
import "./EditCourse.css";

import useGetCourses from "../../Services/createCourses.services";

export default function EditCourse({ nombreC }) {

  const {
    tipo,
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
    updatefecth
  } = useGetCourses();

  const { ID } = useParams();

  return (
    <main className="Courses-Form">
      <div className="editCourse">
        <div className="edit-header">
          <h1 id="form-title">Editar Curso de {nombreC}</h1>
        </div>
        <div className="edit-body">
          <div className="edit-body-1">
            <div className="mb-3-edit">
              <label htmlFor="NombreCurso" className="form-label">
                Nombre del Curso
              </label>
              <input
                onChange={(ev) => inputNombre(ev)}
                required
                type="text"
                className="EditInputs"
                name="nameC"
                id="NombreCurso"
                placeholder="NombreCurso"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="instructor" className="form-label">
                Identificacion de Instructor
              </label>
              <input
                onChange={(ev) => inputInstructor(ev)}
                required
                type="number"
                className="EditInputs"
                name="teacherC"
                id="instructor"
                placeholder="instructor"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="Type" className="form-label">
                Tipos de Modalidad
              </label>
              <select
                onChange={(ev) => inputTipo(ev)}
                value={tipo}
                required
                name="typeC"
                className="EditInputs"
                id="correo electronico"
              >
                <option value="1">Carrera Presencial</option>
                <option value="2">Curso Corto Presencial</option>
                <option value="3">Carrera Virtual</option>
                <option value="4">Curso Corto Virtual</option>
                <option value="5">Ingles</option>
              </select>
            </div>
            <div className="mb-3-edit">
              <label htmlFor="Image" className="form-label">
                Imagen de Portada
              </label>
              <input
                onChange={(ev) => inputImage(ev)}
                required
                type="text"
                className="EditInputs"
                name="Image"
                id="Image"
                placeholder="Image"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="Descripcion" className="form-label">
                Descripcion
              </label>
              <input
                onChange={(ev) => inputDescripcion(ev)}
                required
                type="text"
                name="descriptionC"
                className="EditInputs"
                id="Descripcion"
                placeholder="Descripcion"
              />
            </div>
          </div>
          <div className="edit-body-2">
            <div className="mb-3-edit">
              <label htmlFor="Requisitos" className="form-label">
                Requisitos
              </label>
              <input
                onChange={(ev) => inputRequisitos(ev)}
                required
                type="text"
                name="requirementsC"
                className="EditInputs"
                id="Requisitos"
                placeholder="Requisitos"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="Habilidades" className="form-label">
                Habilidades
              </label>
              <input
                onChange={(ev) => inputHabilidades(ev)}
                required
                type="text"
                name="skillsC"
                className="EditInputs"
                id="Habilidades"
                placeholder="Habilidades"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="nombres" className="form-label">
                Fecha Inicio
              </label>
              <input
                onChange={(ev) => inputInicio(ev)}
                type="date"
                className="EditInputs"
                name="startC"
                id="nombres"
                placeholder="Nombre Completos"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="apellidos" className="form-label">
                Fecha FIn
              </label>
              <input
                onChange={(ev) => inputFin(ev)}
                type="date"
                className="EditInputs"
                name="endC"
                id="apellidos"
                placeholder="Apellidos Completos"
              />
            </div>
            <div className="mb-3-edit">
              <label htmlFor="Duracion" className="form-label">
                Duracion
              </label>
              <input
                onChange={(ev) => inputDuracion(ev)}
                type="number"
                className="EditInputs"
                name="durationC"
                id="Duracion"
              />
            </div>
          </div>
        </div>
        <div className="edit-btn">
          <Link to="/search" aria-label="exit to login form">
            <input
              onClick={() => updatefecth(ID)}
              type="submit"
              value="Editar Curso"
              className="btn-primary-edit"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
