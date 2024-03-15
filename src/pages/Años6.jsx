import { useContext, useEffect, useState } from "react";
import { DeliveryC } from "../components/DeliveryC";
import axios from "axios";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";
import { getProduct6 } from "../helpers/getProduct6";

export const Años6 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const {carga, DataProd}=getProduct6()
  
  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };
  return (
    <>
      <h1>Más 6 años</h1>
      {carga ? <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }
      <DeliveryC />
    </>
  );
};
