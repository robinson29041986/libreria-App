import { useState, useEffect } from 'react';
import '../../styles/ProductsList.css';

import axios from 'axios';
import { Edit2, Trash2 } from '@easy-eva-icons/react';
import { Link } from 'react-router-dom';
const PRODUCTS_URL = '/products';


const ProductsList = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    try {
      const resp = await axios.get(PRODUCTS_URL)
      console.log(resp.data);
      setProducts(resp.data);
    } catch (error) {

      console.log(error);

    }
  }

  const delProduct = async (id) => {
    try {
      const resp = await axios.delete(`${PRODUCTS_URL}${id}`)

      if (resp.status === 204) {
        const resp = await axios.get(PRODUCTS_URL);
        setProducts(resp.data)
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <section className="Products">
      <div className="Products-wrapper Container">
        <h1 className="Display Space-bottom-5x">Productos</h1>
        <div className='Products-options'>
          <form className='Products-filter--form'>
            <input
              type="search"
              className='Default-input'
              placeholder='Busqueda....'
            />
          </form>
          <link to='/products/new' className='Btn Btn-primary'> +Crear Nuevo Producto</link>
        </div>
        <div className='Products-list'>
          <div className='Products-list--title'>
            <h2 className='Table-heading'>Lista de Libros</h2>
          </div>
          {
            !products ? (
              <div className='Product-list--notfound'>
                <p>No se encuentran los Libros</p>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((products, index) => (
                      <tr key={index}>
                        <td className='Products-list--name'>{products.name}</td>
                        <td>{products.category.name}</td>
                        <td>{products.price}</td>
                        <td className='Products-list--actions'>
                          <Link to={'/products/' + products.is}>
                            <Edit2 className='Products-list--icon' />
                          </Link>
                          <Trash2
                            className='Products-list--deleteicon'
                            onClick={() => delProduct(products.id)} />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        </div>
      </div>
    </section>
  );
}
export default ProductsList;