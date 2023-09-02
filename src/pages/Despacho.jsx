import React from "react";
import { DeliveryC } from "../components/DeliveryC";
import "../style/Despacho.css"

export const Despacho = () => {
  return (
    <>
      <>
        <div className="DcDp">
          <h1>Despacho</h1>
          <section>
            <p>
              <strong>Envíos a Todo Chile</strong>
            </p>
            <p>
              <strong> Santiago </strong>
              <br />
            Despacho exprés
            <br />
            Compras antes de las 13:00 hrs. Recibe el mismo día.
            <br />
            Después de las 13:00 hrs. recibe día hábil siguiente.
            <br />
            Costo: $3.000  
            </p>


            <p>
            valido solo para las comunas de la ciudad de santiago de lunes a viernes exceptuando dias festivos 
            </p>
            <p>
              <strong>Regiones </strong>
              <br />
              Despacho por <strong>Correos de Chile y Starken</strong>
              <br />
              Tiempo de envío: 1 a 3 días hábiles según comuna.
              <br />
              Costo: según comuna de destino se calcula automáticamente al momento de hacer el pedido
            </p>
           
          </section>
            <h1>Ubicación</h1>
          <section >
            <div className="dcontenedorimg">
              <a href="https://goo.gl/maps/g9xgctdV6baRH3EC6">
                <img src="/public/Ubicacion/ubicacion.png" alt="imagen de google map" />
              </a>
            </div>
          </section>
        </div>
      </>
      <DeliveryC />
    </>
  );
};
