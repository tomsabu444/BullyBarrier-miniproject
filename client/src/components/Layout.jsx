import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

function Layout({ children }) {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <div>{children}</div>
    </>
  )
}

export default Layout