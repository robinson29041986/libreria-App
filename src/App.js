import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import ProductsList from './views/products/ProductsList';
import CreateNewProduct from './views/products/CreateNewProduct';
import EditProduct from './views/products/EditProduct';
import Usuarios from './views/Usuarios'
import Carrito from './views/Carrito'
import PageNotFound from './views/PageNotFound';
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='products/' element={<ProductsList />} />
        <Route path='products/new' element={<CreateNewProduct />} />
        <Route path='products/:id' element={<EditProduct />} />
        <Route path='usuarios' element={<Usuarios />} />
        <Route path='carrito' element={<Carrito />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
