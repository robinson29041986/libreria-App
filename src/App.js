import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Productos from './views/Productos';
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
        <Route path='products' element={<Productos />} />
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
