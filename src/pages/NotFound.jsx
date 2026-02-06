import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navigate = useNavigate()
  return (
    <div>
        <h1>Epp me, Epp me, user dey carry me go where I no know</h1>
        

        <button className='btn btn-dark' onClick={()=>navigate('/', {replace:true})}>Go Home</button>
    </div>
  )
}

export default NotFound