import React from "react";
import "../style/MainS.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { UserPage } from "../pages/UserPage";
import { Años01 } from "../pages/Años01";
import { Años1a3 } from "../pages/Años1a3";
import { Años3a6 } from "../pages/Años3a6";
import { Años6 } from "../pages/Años6";
import { CarroC } from "../pages/CarroC";
import { Despacho } from "../pages/Despacho";
import { QuienesSP } from "../pages/QuienesSP";
import { SuccessP } from "../pages/SuccessP";
import { ProductId } from "../pages/ProductId";
import { PerfilPage } from "../pages/PerfilPage";

export const MainRouter = () => {
  return (
    <div className="container mdvm">  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="años01" element={<Años01  />} />
        <Route path="años1a3" element={<Años1a3 />} />
        <Route path="años3a6" element={<Años3a6 />} />
        <Route path="años6" element={<Años6 />} />
        <Route path="carroc" element={<CarroC />} />
        <Route path="despacho" element={<Despacho />} />
        <Route path="quienes" element={<QuienesSP />} />
        <Route path="success-purchase" element={<SuccessP />} />
        <Route path="detalle/:id" element={<ProductId />} />
        <Route path="perfil/:id" element={<PerfilPage />} />
      </Routes>
    </div>
  );
};
