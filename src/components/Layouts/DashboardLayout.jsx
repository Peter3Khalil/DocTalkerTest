"use client"
import React, { useState } from "react"
import { cn } from "../../utils/helperFunctions"
import { useSelector } from "react-redux"
import Sidebar from "../sidebar/Sidebar"
import Header from "../Header"
import Modal from "../Modal"
import ProtectedRoutes from "../ProtectedRoutes"
const DashboardLayout = ({ isChatPage = true, children }) => {
  return (
    <ProtectedRoutes>
      <div className={`flex h-full w-full`}>
        <Sidebar />
        <div className="flex h-full flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden bg-background">
          <Header isChatPage={isChatPage} />
          {children}
        </div>

        <Modal />
      </div>
    </ProtectedRoutes>
  )
}

export default DashboardLayout
