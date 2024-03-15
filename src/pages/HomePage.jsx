import { useContext } from "react";
import "../style/HomeP.css";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";
import { InformacionHomePage } from "../components/InformacionHomePage";
import { Carrusel } from "../components/Carrusel";
import { GetProductHomePage } from "../helpers/GetProductHomePage";

export const HomePage = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const{DataProd, carga} = GetProductHomePage()

  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };
  return (
    <>
      <Carrusel/>
        {carga ? <Loading/> : 
      <CardsProduc DataProd={DataProd} agregarCarrito={agregarCarrito}/>}
      <InformacionHomePage/>
    </>
  );
};
