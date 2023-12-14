import React from "react"
import Sidebar from "./Sidebar"

const DashboardLayout = ({children}) => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col flex-grow order-2 h-full bg-accent text-accent-foreground">
       {children}
      </div>
      {/* Sidebar */}
      <Sidebar />
    </div>
  )
}

export default DashboardLayout
