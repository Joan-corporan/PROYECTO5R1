import { useContext, useEffect, useState } from "react";
import { DeliveryC } from "../components/DeliveryC";
import axios from "axios";
import { Link } from "react-router-dom";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";

export const Años3a6 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [DataProd, setDataProduct] = useState(null);
  const [carga,setCarga]=useState(true)
  
  useEffect(() => {
    const fetchDataUrl = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommercebackend-egbf.onrender.com/products/filter/3-6"
        );
        setDataProduct(data);
        
        
      } catch (error) {
        console.log(error);
      }
      finally{
        setCarga(false)
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
      {carga ? <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }
      
      <DeliveryC />
    </>
  );
};
