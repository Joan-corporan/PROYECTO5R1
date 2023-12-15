import { useContext, useEffect, useState } from "react";
import { DeliveryC } from "../components/DeliveryC";
import axios from "axios";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";

export const Años3a6 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [dataProduct, setDataProduct] = useState(null);
  const [carga,setCarga]=useState(true)
  
  useEffect(() => {
    const fetchDataUrl = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommercebackend-egbf.onrender.com/products/filter/3-6"
        );
        setDataProduct(data);
        setCarga(false)
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataUrl();
  }, []);
  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };
  return (
    <>
      <h1>3 a 6 años</h1>
      {carga ? <Loading/> :
      <ul className="rowProduct">
        {dataProduct?.detail.map((elemeto) => (
          <article className="listD" key={elemeto._id}>
            <li className="divCproduc">
              <div className="divCproducimg">
                <Link to={`/detalle/${elemeto._id}`}>
                  <img src={elemeto.imagenes.pricipal} alt="Imagenes de los produtos"/>
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
