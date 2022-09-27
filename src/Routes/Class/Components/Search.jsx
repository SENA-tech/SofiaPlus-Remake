
import useSearch from "../../../Services/searchCourses.services";

export default function Search({ returned, INPUT, setParams }) {
    const { datafecth, inputSearch, filterfecth, select, inputFilter } = useSearch();
    return (
        <div className="formulario-busqueda-filtros">
            <div className="formulario-busqueda-filtros-box">
                <div className="text-filtros">
                    <h2>¿Qué desea estudiar?</h2>
                </div>
                <div className="buscador-css">
                    <div className="icon-searh" onClick={() => {
                        returned();
                        datafecth();
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 
                            0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 
                            4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 
                            14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </div>
                    <div className="input-search-css">
                        <input value={INPUT} onChange={ev => {
                            inputSearch(ev);
                            returned();
                            datafecth();
                        }} type="text" name="busqueda" placeholder="busqueda" />
                    </div>
                </div>
                <div className="filtros-boton-style">
                    <select value={select} onChange={(ev) => {
                        inputFilter(ev);
                        setParams({
                            filter: ev.target.value
                        })
                        filterfecth();
                        returned();
                    }} name="filtertype" id="filtro-de-tipo">
                        <option className="filtro-css" value="1">Carrera Presencial</option>
                        <option className="filtro-css" value="2">Curso Corto Presencial</option>
                        <option className="filtro-css" value="3">Carrera Virtual</option>
                        <option className="filtro-css" value="4">Curso Corto Virtual</option>
                        <option className="filtro-css" value="5">Ingles</option>
                    </select>
                </div>
            </div>
        </div>
    )
}