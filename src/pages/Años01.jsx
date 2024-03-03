import React, { useContext, useEffect, useState } from "react";

import { DeliveryC } from "../components/DeliveryC";
import "../style/AñosP0a1.css";
import axios from "axios";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";

export const Años01 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [DataProd, setDatapro] = useState(null);
  const [carga,setCarga]=useState(true)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommercebackend-egbf.onrender.com/products/filter/0-1"
        );
        setDatapro(data);
        
      } catch (error) {
        console.log(error);
      }
      finally{
        setCarga(false)

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
      {carga ? <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }

      <DeliveryC />
    </>
  );
};
