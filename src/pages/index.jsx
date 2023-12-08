import React from "react"
import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
const Home = () => {
  const { isDocumentOpened } = useSelector((state) => state.isDocumentOpened)
  const url = "https://doctalker-app.s3.amazonaws.com/Lecture_2_Search.pdf3"
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
          
            <iframe src={`https://docs.google.com/gview?url=${url}&embedded=true`} style={{display: isDocumentOpened?"block":"none" }}  className="absolute z-10 h-full w-full bg-red-200 lg:static">
            </iframe>
         
        </div>
      </div>
    </div>
  )
}

export default Home
