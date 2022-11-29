import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import {
  Archive,
  Bell,
  LogIn,
  People,
  PersonAdd,
  ShoppingCart,
  Settings2,
  LogOut,
  Person
} from "@easy-eva-icons/react";
import avatar from '../navegacion/avatar1.png';
import Logo from '../../assets/logo.png';
import '../navegacion/NavBar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  let menuRef = useRef();

  const toggle = () => {
    setOpen(!open)
  }


  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
      }


    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler)

    }

  });

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {

    setAuth({});
    navigate('/login');
  }

  return (
    <header className="Header">
      <div className="Header-row Container">
        <div className="Header-column--left">
          <Link to="/">
            <img src={Logo} alt="Logo" className="Header-logo"></img>
          </Link>
          <nav className="Header-nav">
            <ul className="Header-ul">
              <li className="Header-li">
                <NavLink to="/login" className="Header-nav--link"><LogIn className="Header-icon--nav" />Login</NavLink>
              </li>
              <li className="Header-li">
                <NavLink to="/register" className="Header-nav--link"><PersonAdd className="Header-icon--nav" />Register</NavLink>
              </li>
              <li className="Header-li">
                <NavLink to="/products" className="Header-nav--link"><Archive className="Header-icon--nav" /> Productos</NavLink>
              </li>
              <li className="Header-li">
                <NavLink to="/usuarios" className="Header-nav--link"><People className="Header-icon--nav" /> Usuarios</NavLink>
              </li>
              <li className="Header-li">
                <NavLink to="/carrito" className="Header-nav--link"><ShoppingCart className="Header-icon--nav" />Carrito</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Header-column--right">
          <div className="Header-notificacion">
            <NavLink to="/notifications">
              <Bell className="Header-icon" />
            </NavLink>
            <div className="Header-notificacion--punto"></div>
          </div>
          <div className="Header-usernav" ref={menuRef} onClick={toggle}>
            <img className="Header-usernav--img" src={avatar} alt="Avatar"></img>
            <ul className={`Header-popup ${open ? 'isActive' : ''}`}>
              <li className="Header-popup--li">
                <NavLink to="/perfil" className="Header-popup--link"> <Person className="Header-icon--link" />Perfil</NavLink>
              </li>
              <li className="Header-popup-li">
                <NavLink to="/ajustes" className="Header-popup--link"> <Settings2 className="Header-icon--link" />Ajustes</NavLink>
              </li>
              <hr className="Header-popup--hr" />
              <li className="Header-popup--li">
                <button className="Btn-logout" onClick={logout}><LogOut className="Header-icon--link" />Salir</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;