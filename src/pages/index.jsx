import React from "react"
import UploadFile from "../components/UploadFile"
import DashboardLayout from "../components/DashboardLayout"
import Header from "../components/Header"
const Home = () => {
  return (
    <DashboardLayout>
      <Header toggleDocument={false} />
      <UploadFile />
    </DashboardLayout>
  )
}

export default Home
