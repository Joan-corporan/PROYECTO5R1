import React from "react";
import "../style/SuccessPage.css";

export const SuccessP = () => {
  return (
    <>
      <div className="contenedorSucces">
        <div className="ContenedorMensaje">
          <div className="contenedorImgSuccess">
            <img
              src="https://res.cloudinary.com/dfxpgwzls/image/upload/v1693525955/Successimg_nrml1p.webp"
              alt="Success image"
            />
          </div>
          <h1>¡ Tu compra ha sido exitosa !</h1>
        </div>
      </div>
    </>
  );
};
