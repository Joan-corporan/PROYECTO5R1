import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/UserP.css"
import { useContext } from 'react'
import { UserContext } from '../context/user/UserContext'
import { types } from '../context/user/userReducer'
import axios from 'axios'
import jwt from 'jwt-decode'
import { DeliveryC } from '../components/DeliveryC'
import { toast } from "react-toastify";

export const UserPage = () => {
  const [, dispatch]=useContext(UserContext)
  const navigate= useNavigate()

  const inicialValue = {
    username: "",
    lastname:"",
    email: "",
    password: ""
  }
  
  const [formuser, setformUser]= useState(inicialValue)
  const handleChange = (e) =>{
    setformUser({
      ...formuser,
      [e.target.name]: e.target.value
    })
    

  }

  const handlesubmit  = async(e)=>{
    e.preventDefault()
    
    try {
      const {data}= await axios.post('http://localhost:8080/users',formuser,{
        headers:{
          "Content-Type": "application/json"
        }
      })
     localStorage.setItem("userProfile",JSON.stringify(data.token))
      const tokenDecodificado = jwt(data.token)
      dispatch({
        type:types.setUserState,
        payload: tokenDecodificado
      })
   
      setformUser(inicialValue)
      
    } catch (error) {
      console.log(error)
      toast("Algo salio mal al crear el usuario",{
        type: "error",
        autoClose: 3000
      })
    }

  }
  /* ####...............LOGIN .........############# */
  
  const iniciatValueL ={
    email:"",
    password:""
  }
  const [login, setlogin]= useState(inicialValue)
  const handleChangeL =(e)=>{
    setlogin({
      ...login,
      [e.target.name]:e.target.value
    })
  }

  const handelSubmitL = async(e)=>{
    e.preventDefault()
  try {
    const {data}= await axios.post("http://localhost:8080/users/login",login,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    localStorage.setItem("userProfile",JSON.stringify(data.token))
      
    
    const tokenDecodificadoL = jwt(data.token)
    dispatch({
      type: types.setUserState,
      payload: tokenDecodificadoL
    })
    setlogin(iniciatValueL)
    /* window.alert('Usuario logueado') */
    toast("Usuario logueado",{
      type: "success",
      autoClose: 3000
    })
    navigate('/')
  } catch (error) {
    console.log(error)
    dispatch({
      type: types.setUserState,
      payload: error
    })
    toast("Contraseña Incorrecta",{
      type: "error",
      autoClose: 3000
    })
  }
  }

  
  return (
    <>
    {/* ####...............LOGIN .........############# */}
        <div className='dUserC container'>
          <div className='mar'>
            <span className='span'>Ingresar</span>
            <form onSubmit={handelSubmitL}  className='marg'>
            <input required onChange={handleChangeL} type="email" placeholder='Correo Electrónico'name="email" id="email" value={login.email} />
            <input required onChange={handleChangeL} type="password" placeholder='Contraseña' name="password" id="password" value={login.password} />
            <button type='submit'>Ingresar</button>
            </form>
          </div>



          {/* ####...............REGISTER .........############# */}




         
          <div className=' login-separator'>
            <span className='spn'>¿Aún no tienes una cuenta?</span>
            <span className='span'>Regístrate</span>

            <form onSubmit={handlesubmit} className='marg' >
            <input required onChange={handleChange} type="email" placeholder='Correo Electrónico'name="email" id="email" />
            <input required onChange={handleChange} type="password" placeholder='Contraseña' name="password" id="password" />
            <div className='div2cd'>
            <input required onChange={handleChange} type="text" placeholder='Nombre' name="username" id="username" />
            <input required onChange={handleChange} type="text" placeholder='Apellidos' name="lastname" id="lastname" />
            </div>
            <button type='submit'>Crear cuenta</button>
            </form>
          </div>
        </div>
        <DeliveryC/>
    </>
  )
}
