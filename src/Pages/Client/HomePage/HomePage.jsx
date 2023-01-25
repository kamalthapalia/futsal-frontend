import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function HomePage({loginstatus}) {
  return (
    <React.Fragment>
        <Navbar userloginstatus={loginstatus}/>
        <Outlet />

    </React.Fragment>
  )
}

export default HomePage