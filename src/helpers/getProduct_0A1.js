import { useEffect, useState } from "react";
import axios from "axios";
import { FETCH_APP_FILTER_01 } from "./env.development";

export const getProduct_0A1 = () => {
    const [DataProd, setDatapro] = useState(null);
    const [carga, setCarga] = useState(true);
  useEffect(() => {
    const fetchData0A1 = async () => {
      try {
        const { data } = await axios.get(FETCH_APP_FILTER_01);
        
        setDatapro(data);
      } catch (e) {
        console.log("Lo sentimos a ocurrido un error", e);
      } finally {
        setCarga(false);
      }
    };
    fetchData0A1();
  }, []);
  return { DataProd, carga };
};
