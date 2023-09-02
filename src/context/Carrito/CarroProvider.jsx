import  { useReducer } from 'react'
import { CarroContext } from './carroContext'
import carroReducer from './carroReducer'
const initCarrito={
    carrito:[]
}
export const CarroProvider = ({children}) => {
    const [carrito, dispatch]= useReducer(carroReducer, initCarrito)
  return (
    <CarroContext.Provider value={[carrito, dispatch,]} >
        {children}
    </CarroContext.Provider>
  )
}
