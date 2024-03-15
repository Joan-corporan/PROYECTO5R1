import { useContext } from "react";
import { DeliveryC } from "../components/DeliveryC";
import { CarroContext } from "../context/Carrito/carroContext";
import { carroTypes } from "../context/Carrito/carroReducer";
import { Loading } from "../components/Loading";
import { CardsProduc } from "../components/CardsProduc";
import { getProduct } from "../helpers/getProduct";


export const Años3a6 = () => {
  const [carrito, dispatch] = useContext(CarroContext);
  const {DataProd,carga}=getProduct()

  const agregarCarrito = (elemeto) => {
    dispatch({ type: carroTypes.setCarroState, payload: elemeto });
  };
  return (
    <>
      <h1>3 a 6 años</h1>
      {carga ?  <Loading/> :<CardsProduc agregarCarrito={agregarCarrito}  DataProd={DataProd}/>
      }
      
      <DeliveryC />
    </>
  );
};
