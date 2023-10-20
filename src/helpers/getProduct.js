import axios from "axios";

const productoData = "https://ecommercebackend-egbf.onrender.com/products";
export const getProducts = async () => {
  const { data } = await axios.get(productoData);
  
  return{
    data
  }
  
};
