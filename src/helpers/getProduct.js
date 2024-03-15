import axios from "axios";
import { useEffect, useState } from "react";
import {FETCH_APP_FILTER_36} from "./env.development.js"

export const getProduct = () => {
  const [DataProd, setDataProduct] = useState(null);
  const [carga, setCarga] = useState(true);
  const url3A6 = FETCH_APP_FILTER_36
  

  useEffect(() => {
    const fetchDataUrl = async () => {
      try {
        const { data } = await axios.get(url3A6);
        setDataProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setCarga(false);
      }
    };
    fetchDataUrl();
  }, []);
  return { DataProd, carga };
};
