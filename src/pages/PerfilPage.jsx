import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PerfilPage = () => {
    const params =useParams()
    const {id} = params
    const [perfil,setPerfil]=useState(null)
    useEffect(()=>{
        const getPerfil =async()=>{
            try {
                const {data}= await axios.get(`http://localhost:8080/perfil/${id}`)
                setPerfil(data)
                console.log(perfil)
                console.log(perfil)
            } catch (error) {
                console.log(error)
                
            }
        }
        getPerfil()

    },[])
  return (
    <div>PerfilPage</div>
  )
}
