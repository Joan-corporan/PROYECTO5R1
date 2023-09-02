import { useContext, useEffect, useState } from "react";
import "../style/HomeP.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";

export const HomePage = () => {
  const [datapro, setDatapro] = useState(null);
  const [carrito, dispatch] = useContext(CarroContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/products");
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
      <div id="carouselExampleIndicators" className="carousel slide espdc">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://dojiw2m9tvv09.cloudfront.net/17766/4/bannerescritorio9149.png?398&time=1693641852"
              className="d-block w-100"
              alt="anuncio delivery"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dojiw2m9tvv09.cloudfront.net/17766/4/bannerescritorio9149.png?398&time=1693641852"
              className="d-block w-100"
              alt="Nueva Coleccion Bebé"
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

      <div className="dvproD">
        <h2>Para Todas las Edades </h2>
        <ul className="rowProduct">
          {datapro?.detail.map((elemeto) => (
            <article className="listD" key={elemeto._id}>
              <li className="divCproduc">
                <div className="divCproducimg">
                  <Link to={`/detalle/${elemeto._id}`}>
                    <img src={elemeto.imagenes.pricipal} />
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
      </div>

      <div className="Dartic">
        <div className="artic1">
          <h4>Envíos a todo Chile</h4>
          <p>
            Envios a Todo Chile con Starken y<br /> Correos de Chile.
          </p>
        </div>
        <div className="artic2">
          <h4>Tienda en Cornershop</h4>
          <p>
            Entregas Durante el mismo día. <br /> Juguetería J-Toys.
          </p>
        </div>
        <div className="artic3">
          <h4>Recibe hoy</h4>
          <p>Para compras antes de las 13:00 hrs.</p>
          <br />
        </div>
      </div>
    </>
  );
};
