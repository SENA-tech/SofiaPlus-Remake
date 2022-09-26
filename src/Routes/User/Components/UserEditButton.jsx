import { Link } from "react-router-dom";

export default function EditProfile({ ident, data, id }) {

    let USER_DATA = JSON.parse(window.localStorage.getItem("SessionID"));

    if (USER_DATA) {
        let despliegue = USER_DATA._permissions === 1 ? "flex" : "none";

        if (data === USER_DATA._key && id === USER_DATA._token) {
            despliegue = 'flex'
        } else {
            despliegue = 'none'
        }

        return (
                <div style={{ display: despliegue }} className="editar-cursos">
                    <Link to='edit' >
                        <button>
                            <h4>Editar Perfil</h4>
                        </button>
                    </Link>
                </div>
            );
    }
}