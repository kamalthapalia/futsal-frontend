import React from 'react'
import { Outlet } from 'react-router-dom'
import LoggedNavbar from '../LoggedNavbar/LoggedNavbar'

function Dashboard() {
  return (
    <React.Fragment>
      <LoggedNavbar />
      <div style={{marginTop:"50px"}}></div>
      <Outlet />
    </React.Fragment>
  )
}

export default Dashboard