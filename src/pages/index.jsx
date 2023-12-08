import React, { useState } from "react"
import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
const Home = () => {
  const { isDocumentOpened } = useSelector((state) => state.isDocumentOpened)
  const url = "https://doctalker-app.s3.amazonaws.com/Simple%20Gantt%20chart1.xlsx3"
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="flex h-full w-full flex-col overflow-hidden md:flex-row">
      <Sidebar />
      <div className="relative flex h-full w-full flex-col">
        <Header />
        <div className="relative flex h-full w-full">
          <main className="flex h-full w-full flex-grow flex-col">
            <section className="h-full w-full flex-grow overflow-auto bg-slate-400 "></section>
            <div className="h-12 w-full shrink-0 bg-white"></div>
          </main>

          {/* PDF Viewer */}

          {isLoading && <div>Loading...</div>
          }
            <iframe onLoad={()=>setIsLoading(false)}   sandbox="allow-scripts allow-same-origin" src={`https://docs.google.com/gview?url=${url}&embedded=true`} style={{display: isDocumentOpened?"block":"none",opacity:isLoading?"0":"100%" }}  className="absolute transition-all duration-1000 ease-in-out z-10 h-full w-full bg-red-200 lg:static">
            </iframe>
         
        </div>
      </div>
    </div>
  )
}

export default Home
