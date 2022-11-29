import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import '../styles/Login.css';
import Logo from '../assets/logo.png'

import axios from '../api/axios';
const LOGIN_URL = '/login';

const Login = () => {
  /* Definiciones a utilizar (hooks)*/
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  /* Mensaje de error */
  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  /* Funcion del envío del formulario */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, password }),

        {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          withCredentials: false
        }
      );

      /* Recibimos el token */
      const token = response?.data?.token

      /* Parámetros de autencticación */
      setAuth({ email, password, token });
      setEmail('');
      setPassword('');
      setSuccess(true);

    } catch (error) {
      if (!error?.response) {
        setErrMsg('El servidor no responde.');
      } else if (error.response?.status === 400) {
        setErrMsg('El correo o la contraseña no son válidos.');
      } else if (error.response?.status === 401) {
        setErrMsg('No autorizado');
      } else {
        setErrMsg('Inicio de sesión fallido');
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h3>Sesión iniciada</h3>
        </section>
      ) : (
        <section className="Login">
          <div className="Login-wrapper Container">
            <div className="Login-logo">
              <Link to="/">
                <img src={Logo} alt="Logo"></img>
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="Login-form">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                /* autoComplete="off" */
                placeholder="Correo eléctronico"
                id="email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                required
              />
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              <button type="submit" className="Btn Btn-primary">Iniciar sesión</button>
              <Link to="/register">Registrarse</Link>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
