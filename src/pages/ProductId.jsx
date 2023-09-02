import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "../style/ProductDetalle.css";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";

export const ProductId = () => {
  const param = useParams();
  const { id } = param;
  const [carrito, dispatch] = useContext(CarroContext);
  const [productD, setProductD] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products/items/${id}`
        );
        setProductD(data.detail);
      
      } catch (error) {
        console.log(error);
      }
    }; 
    
    fetchUrl();
  }, []);
  const agregarCarrito = (productD) => {
    dispatch({ type: carroTypes.setCarroState, payload: productD });
  };

  return (
    
    <>
      <div className="ContendorCarrusel">
        <div>
          <h1>{productD?.nombre}</h1>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide divWidth">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={productD?.imagenes.pricipal}
                className="d-block w-100"
                alt={"imagenes del producto"}
              />
            </div>
            <div className="carousel-item">
              <img
                src={productD?.imagenes.secundarias[0]}
                className="d-block w-100"
                alt={"imagenes del producto"}
              />
            </div>
            <div className="carousel-item">
              <img
                src={productD?.imagenes.secundarias[1]}
                className="d-block w-100"
                alt={"imagenes del producto"}
              />
            </div>
            <div className="carousel-item">
              <img
                src={productD?.imagenes.secundarias[2]}
                className="d-block w-100"
                alt={"imagenes del producto"}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
        <button className=" btnAgregarCarroDetalle " onClick={() => agregarCarrito(productD)}>
                Agregar al Carrito
              </button>
        </div>
        <div className="PaddingDescripcion">
          <strong>
            <p>{productD?.descripcion}</p>
          </strong>
        </div>
      </div>
    </>
  );
};
