import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <h1>Logo</h1>
        <Navbar />
        <h3>Kuch Data yahan par</h3>
        <Outlet />
        <h3>Footer</h3>
    </div>
  )
}

export default Layout