import { Link } from "react-router-dom";

export default function CoursesButton() {

    let USER_DATA = JSON.parse(window.localStorage.getItem("SessionID"));

    if (USER_DATA) {
        let despliegue = USER_DATA._permissions === 1 ? "flex" : USER_DATA._permissions === 2 ? "flex" : "none";

        return (
            <div style={{ display: despliegue }} className="crear-cursos">
                <Link to='createCourse'>
                    <button>
                        <h2>Crear Curso</h2>
                    </button>
                </Link>
            </div>
        );
    }
}