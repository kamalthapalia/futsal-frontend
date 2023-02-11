import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <React.Fragment>
        <Navbar/>
        <Outlet />

    </React.Fragment>
  )
}

export default HomePage