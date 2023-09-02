import React from "react";
import "../style/Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="fCs">
      <div className="fbgC">
        <div className="container fcdR">
          <NavLink className="dfr" to="quienes">
            Quienes Somos
          </NavLink>
          <NavLink className="dfr" to="despacho">
            Despacho
          </NavLink>
          <NavLink className="dfr" to="despacho">
            Ubicacion
          </NavLink>
          

        </div>
        <div className="container fbgCC ">

         
          <div className="fbgC2">
            
            
            <ul>
              <h2>Sucursales:</h2>
              <li>
                <p>
                Av. Providencia 0000 Local 000, Galería Zona Franca. Metros Los Leones
                </p>
              </li>
              <li>
                <p>
                Mall Apumanque Local 000. Las Condes
                </p>
              </li>
              <li>
                <p>
                Mall Vivo Panorámico, Local 000, Providencia
                </p>
              </li>
            </ul>
          </div>

          <div>
           <h2>Horario de atención:</h2>
            <ul>

              <li>
                <p>Providencia: Lunes a Viernes de 10:00 a 19:00 hrs. Sabados de 10:30 a 14:30 hrs.</p>
                </li>
              <li>
                <p>
                Apumanque: Lunes a sabados de 10:00 a 20:00 hr. Domingo de 11:00 a 19:00 hrs.
                </p>
              </li>
              <li>
                <p>
                Vivo Panorámico: Lunes a Sábados de 10:00 a 20:00 hrs. Domingos de 11:00 a 17:00 hrs.
                </p>
              </li>
              
            </ul>
          </div>
 <div className="divFooterContac">
            <h2>Contactos:</h2>
            <ul>
              <li>
                <p>+56987654321</p>
              </li>
              <li>
                <p>
                  store@jtoys.cl
                </p>
                </li>
              <li>
              <NavLink className='nsvgbg nsvgbgF' to='https://www.instagram.com/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"  viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </NavLink>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
};
