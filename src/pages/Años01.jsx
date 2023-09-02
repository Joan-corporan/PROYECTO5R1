import React, { useContext, useEffect, useState } from "react";

import { DeliveryC } from "../components/DeliveryC";
import "../style/AñosP0a1.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";

export const Años01 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [datapro, setDatapro] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/products/filter/0-1"
        );
        setDatapro(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };

  return (
    <>
      <ul className="rowProduct">
        {datapro?.detail.map((elemeto) => (
          <article className="listD" key={elemeto._id}>
            <li className="divCproduc">
              <div className="divCproducimg">
                <Link to={`/detalle/${elemeto._id}`}>
                  <img src={elemeto.imagenes.pricipal} alt="imagenes de los productos" />
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

      <DeliveryC />
    </>
  );
};
