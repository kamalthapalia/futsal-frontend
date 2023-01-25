import React from 'react'
import { Outlet } from 'react-router-dom'
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar'
import Footer from '../../../components/Footer/Footer'

function Dashboard() {
  return (
    <React.Fragment>
      <LoggedNavbar />
      <div style={{marginTop:"50px"}}></div>
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Dashboard