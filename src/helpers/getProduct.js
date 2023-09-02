import axios from "axios";

const productoData = "http://localhost:8080/products";
export const getProducts = async () => {
  const { data } = await axios.get(productoData);
  
  return{
    data
  }
  
};
