import { Link } from "react-router-dom";

export default function CoursesEditButton() {

    let USER_DATA = JSON.parse(window.localStorage.getItem("SessionID"));

    if (USER_DATA) {
        let despliegue = USER_DATA._permissions === 1 ? "flex" : "none";

        return (
            <div style={{ display: despliegue }} className="editar-cursos">
                <Link to='editcourse'>
                    <button>
                        <h4>Editar Cursos</h4>
                    </button>
                </Link>
            </div>
        );
    }
}