import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

const DashboardLayout = ({children}) => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col order-2 w-full h-full">
        {/* Header */}
        <Header />
        {/* Upload file */}
       {children}
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  )
}

export default DashboardLayout
