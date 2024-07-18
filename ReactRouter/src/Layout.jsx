import React from 'react'
import Headers from './components/Headers/Headers'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Headers></Headers>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Layout
