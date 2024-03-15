import "../style/CarroS.css";

import { DeliveryC } from "../components/DeliveryC";
import { useContext, useEffect, useState } from "react";
import { ProductoCarrito } from "../components/ProductoCarrito";
import axios from "axios";
import { CarroContext } from "../context/Carrito/carroContext";

export const CarroC = () => {
  const [carrito, dispatch] = useContext(CarroContext);
 

  const paymentUrl = "https://ecommercebackend-egbf.onrender.com/payment/create-payment";

  const comprar = async () => {
    const items = carritoDeCompra;

    const { data } = await axios.post(paymentUrl, items, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    window.location.href = data.detail.response.init_point;
  };

  const [carritoDeCompra, setCarritoDecompra] = useState(carrito.carrito);
  console.log(carritoDeCompra)

  const [precioTota, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(
      carritoDeCompra.reduce((total, producto) => {
        return total + producto.precio * producto.quantity;
      }, 0)
    );
  }, [carritoDeCompra]);

  

  return (
    <>
      <div className="vhCC">
        <hr />
        <div className="dcdcC">
          <div className="dcCrW">
            <h1>CArro de Compras</h1>

            <ul>
              {carritoDeCompra?.map((producto) => (
                <ProductoCarrito
                  key={producto._id}
                  producto={producto}
                  setCarritoDecompra={setCarritoDecompra}
                  setPrecioTotal={setPrecioTotal}
                />
              ))}
            </ul>
            <h4>Total Carrito: {precioTota}</h4>

            <div>
              {precioTota == 0 ? null : <button className="btnPagar" onClick={comprar}>
                Pagar
              </button>}
              
            </div>
          </div>
        </div>
      </div>
      <DeliveryC />
    </>
  );
};
