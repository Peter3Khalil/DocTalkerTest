import React, { useState } from "react"
import { cn } from "../../utils/helperFunctions"
import { useSelector } from "react-redux"
import Sidebar from "../Sidebar"
import Header from "../Header"
import Modal from "../Modal"
const DashboardLayout = ({ children }) => {
  return (
    <div className={`flex h-full w-full`}>
      <Sidebar />
      <div className="flex h-full flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden">
        <Header/>
        {children}
      </div>
      
      <Modal />
    </div>
  )
}

export default DashboardLayout
