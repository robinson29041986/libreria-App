import '../../styles/EditProduct.css';


const EditProduct = () => {
  return (
    <section className="EditProduct">
      <div className="EditProduct-wrapper Container">
        <h1 className='Display Space-bottom-5x'>Editar Producto</h1>
        <div className="EditProduct-details">
          <form className='EditProduct-form'>
            <div className="EditProduct-form--image">
              <label id="Imagen"></label>
              <img src="https://www.nobelcastellar.com/es/images/logo.png" />
            </div>
            <div>
              <div className="EditProduct-form--left">
                <label id="name">Nombre</label>
                <input type="text" />
              </div>
              <div className="EditProduct-form--right">
                <label id="price">Precio</label>
                <input type="number" />
              </div>
            </div>
            <label id="category">Categoria</label>
            <select id="select-category">
              <option value="seleccionar">Seleccionar</option>
            </select>
            <label id="description">Descripcion</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10">
            </textarea>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditProduct;