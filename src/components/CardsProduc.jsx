import React from 'react'
import { Link } from 'react-router-dom'
import "../style/HomeP.css"

export const CardsProduc = ({DataProd, agregarCarrito}) => {
  return (
    <ul className="rowProduct">
        {DataProd?.detail.map((elemeto) => (
          <article className="listD" key={elemeto._id}>
            <li className="divCproduc">
              <div className="divCproducimg">
                <Link to={`/detalle/${elemeto._id}`}>
                  <img src={elemeto.imagenes.pricipal} alt="Imagenes de productos" />
                </Link>
              </div>
              <p className="nombreProduct">{elemeto.nombre}</p>
              <p> ${elemeto.precio} </p>

              <button
                className="btnAgregar"
                onClick={() => agregarCarrito(elemeto)}
              >
                Agregar al Carrito
              </button>
            </li>
          </article>
        ))}
      </ul>
  )
}
