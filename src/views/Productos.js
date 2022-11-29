import '../styles/Products.css';

const Productos = () => {
    return (
        <section className="Products">
            <div className="Products-wrapper Container">
                <h1 className="Display">Productos</h1>
                <div className='Products-options'>
                    <button className='Btn Btn-primary'>Crear Nuevo Libro</button>
                </div>
                <div className='Products-list'>
                    <table className='Products-list--table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Categoria</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>El resplandor</td>
                                    <td>Terror</td>
                                    <td>$65.000</td>
                                </tr>
                                <tr>
                                    <td>La Piramide Roja</td>
                                    <td>Ciencia Ficcion</td>
                                    <td>$49.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </table>
                </div>
            </div>
        </section>
    );
}
export default Productos;