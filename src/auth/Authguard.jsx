import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Authguard = ({isAuth, redirectPath="/login", children}) => {
    if(!isAuth){
        return <Navigate to={redirectPath} replace={true}/>
    }

   return children?children:<Outlet/>
}

export default Authguard