import React, { useContext, useEffect, useState } from "react";
import { DeliveryC } from "../components/DeliveryC";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";
import { getProduct_0A1 } from "../helpers/getProduct_0A1";

export const Años01 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const {DataProd, carga} = getProduct_0A1();

  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };

  return (
    <>
      
      <h1>0 a 1 años</h1>
      {carga ? <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }

      <DeliveryC />
    </>
  );
};
