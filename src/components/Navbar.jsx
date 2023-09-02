import React, { useState } from "react";
import "../style/NavStyle.css";
import { Link, NavLink,  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";
import { types } from "../context/user/userReducer";

export const Navbar = () => {
  const [, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    

    dispatch({ type: types.setLogout });
    navigate("/");
  };
  const [user] = useContext(UserContext);
  const [navbar, setNavbar] = useState(false);

  const getEffect = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", getEffect);

  return (
    <>
      <header>
        <div className="ctl">
          <div className="displayN">
            <NavLink className="nsvgbg" to="https://www.instagram.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </NavLink>
          </div>

          <div>
            <NavLink className="nAvCL" to="/">
              <img src="/public/imgL/logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="CnMm2">
            
            <div>
              
            </div>
            <div className="dropdown ">
              <button
                className="btn padding  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                className="paddingsvg"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
              </svg> 
              </button>
              <ul className="dropdown-menu">
                <li>
                   <Link className="dropdown-item" to="perfil">
                   {user ? "Perfil" :<></> }
                  </Link>
                </li>
                <li>
                <NavLink className="dropdown-item " to="user">
                {user ? "" : "Iniciar Sesión"}
                  </NavLink>
                </li>
                <li>
                 <Link className="dropdown-item" to={"/"} onClick={handleLogout}>{user ?  "Cerrar Sesión" : ""}</Link>
                </li>
              </ul>
            </div>
            
            <Link className="nombreUser" to="perfil">

              {user ? user.user.username :<></> }
            </Link>
            
            <NavLink className="nsvgbg" to="carroc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
              >
                <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
              </svg>
            </NavLink>
          </div>
        </div>

        <nav className={navbar ? "navbar activado" : "navbar"}>
          <input type="checkbox" id="check" />
          <div className="CnMm">
            <label htmlFor="check" className="mostrar-menu">
              &#8801;
            </label>
          </div>

          <div className="dul spikes menu ">
            <NavLink to="/" className="li">
              INICIO
            </NavLink>
            <NavLink to="años01" className="li">
              0-1 AÑOS
            </NavLink>
            <NavLink to="años1a3" className="li">
              1-3 AÑOS
            </NavLink>
            <NavLink to="años3a6" className="li">
              3-6 AÑOS
            </NavLink>
            <NavLink to="años6" className="li">
              6+ AÑOS
            </NavLink>
            <label htmlFor="check" className="esconder-menu">
              &#215;
            </label>
          </div>
        </nav>
      </header>
    </>
  );
};
