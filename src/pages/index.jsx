import React, { use, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import PdfViewer from "../components/PdfViewer"
const Home = () => {


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
          <PdfViewer />
        </div>
      </div>
    </div>
  )
}

export default Home
