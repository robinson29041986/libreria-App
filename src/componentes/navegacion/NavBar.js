import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Bell } from "@easy-eva-icons/react";
import { Settings2 } from "@easy-eva-icons/react";
import { LogOut } from "@easy-eva-icons/react";
import { Person } from "@easy-eva-icons/react";

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

        document.addEventListener("mousedown, handler");

        return () => {
            document.removeEventListener("mousedown", handler)

        }

    });


    return (
        <header className="Header">
            <div className="Header-row Container">
                <div className="Header-column">
                    <img className="logo" src="https://www.andeslibreria.com/img/cms/andeslibreria.com.png" alt="Anhelo del Saber.com"></img>
                    <nav className="Header-nav">
                        <ul className="Header-ul">
                            <li className="Header-li"><NavLink exact to="/Inicio">Inicio</NavLink></li>
                            <li className="Header-li"><NavLink exact to="/Productos">Productos</NavLink></li>
                            <li className="Header-li"><NavLink exact to="/Usuarios">Usuarios</NavLink></li>
                            <li className="Header-li"><NavLink exact to="/Inventario">Inventario</NavLink></li>

                        </ul>
                    </nav>
                </div>
                <div className="Header-column">
                    <div className="Header-notificacion">
                        <Bell className="Header-notificacion--icon" />
                        <div className="Header-notificacion--punto"></div>
                    </div>
                    <div className="Header-avatar">
                        <img class="avatar-img" src="https://fabrx.co/preview/muse-dashboard/assets/img/avatar1.png" alt="Avatar"></img>
                        <ul className="Header-avatar-ul">
                            <li className="Header-avatar-li"> <Person className="Header-avatar--icono" />  <NavLink exact to="/Perfil">Mi  Perfil</NavLink></li>
                            <li className="Header-avatar-li"> <Settings2 className="Header-avatar--icono" />  <NavLink exact to="/Ajustes">Ajustes</NavLink></li>
                            <hr className="Header-avatar--hr" />
                            <li className="Header-avatar-li">  <LogOut className="Header-avatar--icono" />   <NavLink exact to="/Salir">Salir</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;