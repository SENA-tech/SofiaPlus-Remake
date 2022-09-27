import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

//Img´s
import { imgs } from "./data";

//Css
import "./courses.css";

export default function CoursesAbout() {

  let permission = JSON.parse(window.localStorage.getItem("SessionID"));
  const [Data, setData] = useState();
  const { courseId } = useParams();

  let inscripcion = () => {
    fetch("https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/data/select", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _token: courseId,
        _key: permission._token
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="Courses-About">
      <div className="contenedor-cursos-pagina">
        <div className="cabeza-cur">
          <h1>
            acciones basicas para la atencion de una persona con afectacion de
            la salud
          </h1>
          <div className="cabeza-cur-ficha">
            <p>numero de ficha</p>
            <h3>123456</h3>
          </div>
        </div>
      </div>
      <div className="contenedor-cursos-pagina-1">
        <div className="informacion-cur">
          <hr className="hr-courses" />
          <div className="img-programa-cursos">
            <div className="img-programa-cursos-A">
              <img
                src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                alt="fondo cursos"
              />
            </div>
          </div>
          <hr className="hr-courses" />
          <h3>nombre del programa:</h3>
          <p>
            acciones basicas para la atencion de una persona con afectacion de
            la salud
          </p>

          <h3>empresa solicitante:</h3>
          <p>servicio nacional de aprendizaje</p>

          <h3>perfil de entrada:</h3>
          <p>no aplica</p>

          <h3>tipo de programa:</h3>
          <p>formación virtual</p>

          <h3>modalidad de formación:</h3>
          <p>virtual</p>

          <hr className="hr-courses" />

          <h3>descripción del programa:</h3>
          <p>1. normatividad</p>
          <p>2. aseguramiento de la escena</p>
          <p>3. bioseguridad</p>
          <p>4. soporte vital basico</p>
          <h3>Requisitos:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            expedita facere omnis qui ratione tenetur nihil illum natus fugiat,
            doloremque ea? Ipsum natus debitis nam quaerat, modi ex vitae
            placeat.
          </p>
          <h3>Habilidades que desarrolla:</h3>
          <p>
            Se requiere que el aprendiz AVA(Ambientes Virtuales de
            Aprendizaje)tenga dominio de las condiciones básicas relacionadas
            con el manejo de herramientas informática syde comunicación:correo
            electrónico, chats, Internet, navegadores, otros sistemasy
            herramientas tecnológicas necesarias para la formación virtual
            Habilidades que desarrolla: -Asistir personas según protocolos de
            primer respondienteynormativa de salud
          </p>
          {/* <hr className="hr-courses"/>
          <h1 className="h1-courses">lugar para ubicacion</h1> */}
        </div>
        <div className="contenedor-cursos-pagina-2">
          <div className="modalidad-cur">
            <p>modalidad</p>
            <h3>presencial</h3>
          </div>
          <div className="inscripcion-cur">
            <p>Inscripción desde</p>
            <h3>15 de agosto</h3>
            <h3>30 de septiembre</h3>
          </div>
          <div className="inscripcion-cur">
            <p>Período académico</p>
            <h3>19-08-2022</h3>
            <h3>27-08-2022</h3>
          </div>
          <div className="tiempo-cur">
            <p>Tiempo académico</p>
            <p>(tiempo de duración)</p>
            <div className="time-cur">
              <h3>2356</h3>
            </div>
            <p>horas</p>
          </div>
          <div className="otro-tipo-cur">
            <h3>otro tipo de informacion requerida</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              illo!
            </p>
            <hr />
            <h3>otro tipo de informacion requerida</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              illo!
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="cont-cur-all">
        <div className="contenedor-cursos-pagina-3">
          <div className="inscribirse-cur">
            <button onClick={() => inscripcion()}>
              <h2>!  Inscribase Ahora  ¡</h2>
            </button>
          </div>
          <hr />
          <div className="cont-g-c">
            <div className="guia-cur">
              <button>
                <Link to="/support">Guía de Inscripción</Link>
              </button>
            </div>
            <div className="compartir-cur">
              <p>
                comparte este curso en <b>redes sociales </b>
              </p>
              <div className="imagen-redes-cursos-all">
                <a href="https://www.google.com/">
                  <img src={imgs.facebook} />
                </a>
              </div>
              <div className="imagen-redes-cursos-all">
                <a href="https://www.google.com/">
                  <img src={imgs.instagram} />
                </a>
              </div>
              <div className="imagen-redes-cursos-all">
                <a href="https://www.google.com/">
                  <img src={imgs.twitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
