"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const Layout = ({children}) => {
  const mode= useSelector(state=>state.theme.mode)
  return (
    <div className={mode} id="mainContainer">
    {children}
  </div>
  )
}

export default Layout