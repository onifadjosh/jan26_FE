import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex' style={{height:"100vh", width:'100%'}}>
        <div className='sidebar bg-dark' style={{width:'20%', height:'100%', }}>
            <Link to={'settings'} className='text-light'>Settings</Link>
        </div>


        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout