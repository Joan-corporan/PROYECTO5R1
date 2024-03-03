import { useContext, useEffect, useState } from "react";
import { DeliveryC } from "../components/DeliveryC";
import axios from "axios";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";

export const Años6 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const [DataProd, setProductd] = useState(null);
  const [carga,setCarga]=useState(true)
  useEffect(() => {
    const getdatapro = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommercebackend-egbf.onrender.com/products/filter/6"
        );
        setProductd(data);
        
      } catch (error) {
        console.log(error);
      }
      finally{
        setCarga(false)

      }
    };
    getdatapro();
  }, []);
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
