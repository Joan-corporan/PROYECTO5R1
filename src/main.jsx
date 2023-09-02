import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user/UserProvider.jsx";
import { CarroProvider } from "./context/Carrito/CarroProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/*  <React.StrictMode> */}
    <UserProvider>
      <CarroProvider>
        <App />
      </CarroProvider>
    </UserProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
