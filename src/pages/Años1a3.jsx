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
  const [cargando, setCargando]=useState(true)
  useEffect(() => {
    const fetchDataUrl = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommercebackend-egbf.onrender.com/products/filter/1-3"
        );
        setDataPro(data);
       
      } catch (error) {
        console.log(error);
      }
      finally{
        setCargando(false)

      }
    };
    fetchDataUrl();
  }, []);
  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };
  return (
    <>
      <h1>1 a 3 años</h1>
      {cargando ? <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }
      <DeliveryC />
    </>
  );
};
