import '../../styles/NewProduct.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
const CATEGORIES_URL = '/categories'
const PRODUCTS_URL = '/products';

const newProduct = () => {

  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {

    const getCategories = async () => {
      const response = await axios.get(CATEGORIES_URL);
      setCategories(response.data);
    }

    getCategories()
      .catch(console.error);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(PRODUCTS_URL,
        JSON.stringify({ name, description, price, category_id: category }),
        {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          withCredentials: true
        }
      );

      console.log(JSON.stringify(respnse?.data));

      setName('');
      setDescription('');
      setPrice('');

    } catch (error) {
      if (!error?.response) {

        console.log(error?.response);
      }
    }
  }
  return (
    <section className="NewProduct">
      <div className="NewProduct-wrapper Container">
        <h1 className='Display Space-bottom'>Crear Nuevo Producto</h1>
        <div className='NewProduct-widget'>
          <form onSubmit={handleSubmit}
            method='post'
            encType='multipart/form-data'
            className='New-Product--form'>
            <label htmlFor='image'>Imagen</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              accept='image/*'
              required
            />
            <label htmlFor='name'>Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id='name'
              placeholder='Nombre'
            />
            <label htmlFor='category'>Categoria</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} id="selector">
              {categories.map((categories, index) => (
                <option value={categories.id} key={index}>{categories.name}</option>
              ))}
            </select>
            <label htmlFor='price'>Precio</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="price"
              placeholder='Precio'
            />
            <label htmlFor='description'>Descripcion</label>
            <textarea
              value={description}
              onChange={(e) => (e.target.value)}
              id='description'
              rows="5" cols="35"
              placeholder='Descripción'
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default newProduct;