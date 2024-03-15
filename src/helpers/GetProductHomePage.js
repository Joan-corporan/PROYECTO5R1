import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH_APP_HOME_PAGE } from "./env.development";


export const GetProductHomePage = () => {
  const [DataProd, setDatapro] = useState(null);
  const [carga, setCarga] = useState(true);


    useEffect(() => {
        const fetchdata = async () => {
          try {
            const { data } = await axios.get(FETCH_APP_HOME_PAGE);
            setDatapro(data);
          } catch (error) {
            console.error(error);
          }
          finally{
            setCarga(false)
    
          }
        };
        fetchdata();
      }, []);
      return{DataProd, carga}
    }
     
    
