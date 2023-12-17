import React, { useContext, useEffect, useState } from "react";

import { DeliveryC } from "../components/DeliveryC";
import "../style/AñosP0a1.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";

export const Años01 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [datapro, setDatapro] = useState(null);
  const [carga,setCarga]=useState(true)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommercebackend-egbf.onrender.com/products/filter/0-1"
        );
        setDatapro(data);
        setCarga(false)
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
      
      <h1>0 a 1 años</h1>
    {carga ? <Loading/> :
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
      </ul>}

      <DeliveryC />
    </>
  );
};
