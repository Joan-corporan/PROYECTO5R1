// HOC // HIGHER ORDER COMPONENT : ESTO ES UN COMPONENTE DE ORDEN ALTO, ESTE COMPONENETE VA A RECIBIR OTROS COMPONENTES DENTRO
import { UserContext } from "./UserContext"
import { useReducer } from "react"
import userReducer from './userReducer'
import jwtDecode from "jwt-decode"
const userProfile=()=>{
  const token = JSON.parse(localStorage.getItem("userProfile"))
 if(token){
  const decoded = jwtDecode(token)
  return {user:decoded }
}
return null
}
export const UserProvider = ({children}) => {
   const [ user, dispatch]= useReducer (userReducer, null, userProfile) 
  return (
    <UserContext.Provider value={[user, dispatch,]} >
        {children}
    </UserContext.Provider>
    
  )
}
