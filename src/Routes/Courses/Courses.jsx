import React from "react";

export default function CoursesAbout() {
  return (
    <div className="Courses-About">
      <div class="contenedor-cursos-pagina">
        <div class="cabeza-cur">
          <h1>
            acciones basicas para la atencion de una persona con afectacion de
            la salud
          </h1>
          <div class="cabeza-cur-ficha">
            <p>numero de ficha</p>
            <h3>123456</h3>
          </div>
        </div>
      </div>
      <div class="contenedor-cursos-pagina-1">
        <div class="informacion-cur">
          <hr className="hr-courses" />
          <div class="img-programa-cursos">
            <div class="img-programa-cursos-A">
              <img src="img/logo sena.png" />
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

          <hr />

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
          <hr />
          <h1 className="h1-courses">lugar para ubicacion</h1>
        </div>
        <div class="contenedor-cursos-pagina-2">
          <div class="modalidad-cur">
            <p>modalidad</p>
            <h3>presencial</h3>
          </div>
          <div class="inscripcion-cur">
            <p>inscripcion desde</p>
            <h3>15 de agosto</h3>
            <h3>30 de septiembre</h3>
          </div>
          <div class="inscripcion-cur">
            <p>periodo academico</p>
            <h3>19-08-2022</h3>
            <h3>27-08-2022</h3>
          </div>
          <div class="tiempo-cur">
            <p>periodo academico</p>
            <p>(tiempo de duracion)</p>
            <div class="time-cur">
              <h3>2356</h3>
            </div>
            <p>horas</p>
          </div>
          <div class="otro-tipo-cur">
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
      <div class="cont-cur-all">
        <div class="contenedor-cursos-pagina-3">
          <div class="inscribirse-cur">
            <button>
              <a href="#">!inscribase ahora¡</a>
            </button>
          </div>
          <hr />
          <div class="cont-g-c">
            <div class="guia-cur">
              <button>
                <a href="https://www.google.com/">guia de inscripcion</a>
              </button>
            </div>
            <div class="compartir-cur">
              <p>
                comparte este curso en <b>redes sociales </b>
              </p>
              <div class="imagen-redes-cursos-all">
                <a href="https://www.google.com/">
                  <img src="img/logo sena.png" />
                </a>
              </div>
              <div class="imagen-redes-cursos-all">
                <a href="https://www.google.com/">
                  <img src="img/logo sena.png" />
                </a>
              </div>
              <div class="imagen-redes-cursos-all">
                <a href="https://www.google.com/">
                  <img src="img/logo sena.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
