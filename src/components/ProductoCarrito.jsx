import { useState } from "react";

export const ProductoCarrito = ({ producto, setCarritoDecompra }) => {
  const [contador, setContador] = useState(producto.quantity);

  const aumentar = () => {
    if(contador>=1){
      
    
    setCarritoDecompra((productos) => {
      const productoarray = productos.map((product) => {
        if (producto._id === product._id) {
          return ({
            ...product,
            quantity: contador + 1,
          });
        } else {
          return product;
        }
      });
      return productoarray;
    });
    setContador(contador + 1);
  };
}
  const disminuir = () => {
    if(contador>1){
    setCarritoDecompra((productos) => {
      const productoarray = productos.map((product) => {
        if (producto._id === product._id) {
          return ({
            ...product,
            quantity: contador - 1,
          });
        } else {
          return product;
        }
      });
      return productoarray;
    });
    setContador(contador - 1);
  };
  }
  return (
    <div>
      <li className="dcCrow" key={producto._id}>
        <div className="ContenedorimgCarrito">
          <h2>{producto.nombre}</h2>
          <div >
            <img src={producto.imagenes.pricipal} alt={"imagen del producto"} />
          </div>
          <p>Precio: {producto.precio}</p>
          <p>Cantidad: {contador}</p>
        </div>

        <div className="texalP">
          <p>
            Precio total del producto : ${producto.precio * contador}
          </p>

          <div className="dcCrowL">
            <button className="btnccd" onClick={disminuir}>
              -
            </button>
            <input className="" type="" placeholder={contador} disabled />
            <button className="btnccd" onClick={aumentar}>
              +
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};
