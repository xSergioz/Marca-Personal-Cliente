import { Link } from "react-router-dom";
import { useContext } from "react";
import '../paginas/Inicio.css';
import Pie from "../componentes/Pie";
import IdiomaContexto from "../contexto/IdiomaContexto";


const Inicio = () => {

    const {idioma} = useContext(IdiomaContexto);

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                    <Link to='/empresas'>
                        <img src="src/assets/empresa.jpg" className="" alt="Empresa"></img>
                        <div className="text-center">
                            <p>{idioma.empresa}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <Link to='/centroeducativo'>
                        <img src="src/assets/school.jpg" className="" alt="Centro educativo"></img>
                        <div className="text-center">
                            <p>{idioma.proyecto}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <Link to='/alumnos'>
                        <img src="src/assets/student.jpg" className="" alt="Alumnos"></img>
                        <div className="text-center">
                            <p>{idioma.alumno}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Pie></Pie>
        </>
    )
}
export default Inicio;