import React from "react"

import Sidebar from "./Sidebar"
const LayoutOfLargeScreen = ({children}) => {
  return (
    <div className="hidden h-full w-full lg:flex">
     <Sidebar/>
      <main className="h-full w-full">{children}</main>
    </div>
  )
}

export default LayoutOfLargeScreen
