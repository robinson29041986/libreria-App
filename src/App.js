
import './styles/App.css';
import NavBar from './componentes/navegacion/NavBar.js';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import Usuarios from './paginas/Usuarios';
import Inventario from './paginas/Inventario';
import PageNotFound from './paginas/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/Inicio' element={<Inicio />} />
          <Route exact path='/Productos' element={<Productos />} />
          <Route exact path='/Usuarios' element={<Usuarios />} />
          <Route exact path='/Inventario' element={<Inventario />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
