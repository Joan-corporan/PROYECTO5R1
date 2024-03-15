import { useContext, useEffect, useState } from "react";
import { DeliveryC } from "../components/DeliveryC";
import axios from "axios";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";

export const Años1a3 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [DataProd, setDataPro] = useState(null);
  const [carga, setCarga]=useState(true)

  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };
  return (
    <>
      <h1>1 a 3 años</h1>
      {carga ? <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }
      <DeliveryC />
    </>
  );
};
