import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH_APP_FILTER_6 } from "./env.development";

export const getProduct6 = () => {
  const [DataProd, setProductd] = useState(null);
  const [carga, setCarga] = useState(true);
  useEffect(() => {
      const getData = async ()=> {
    try {
        const {data} = await axios.get(FETCH_APP_FILTER_6)
        setProductd(data);
      }
     catch (e) {
      console.log("Error al obtener los productos", e);
    } finally {
      setCarga(false);
    }
}
    getData()
  },[]);
  return {
    carga, DataProd
  }
};
