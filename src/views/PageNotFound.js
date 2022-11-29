/* Error 404 */
import { Link } from "react-router-dom";
import '../styles/PageNotFound.css';


const NotFound = () => {
    return (
        <section className="NotFound">
            <div className="NotFound-wrapper Container">
                <h1 className='NotFound-h1'>¡Error 404!</h1>
                <p className='NotFound-txt'>¡Ups! la página que estás buscando no existe...</p>
                <Link to="/" className="Btn Btn-primary">Volver al inicio</Link>
            </div>

        </section>
    )
}

export default NotFound;