import React from "react"
import DashboardLayout from "../components/Layouts/DashboardLayout"
import Image from "next/image"
import Logo from "../components/shared/Logo"
import Button from "../components/shared/Button"
import { FaCloudUploadAlt } from "react-icons/fa"
const Home = () => {
  return (
    <DashboardLayout>
      <main className="flex h-full flex-1 items-center justify-center px-4 lg:p-0">
        <div className=" relative flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">
            Welcome to <Logo />
          </h1>
          <form className="w-full">
            <input type="file" className="hidden" id="input"></input>
            <label
              htmlFor="input"
              className="border-2 dark:border-foreground/50 border-primary border-dashed flex w-full cursor-pointer flex-col items-center rounded bg-accent p-6 text-accent-foreground"
            >
              <FaCloudUploadAlt className="text-4xl text-primary" />
              <p className="text-md font-semibold">Drag and Drop here</p>
              <span className="text-sm">or</span>
              <h1 className="text-lg font-bold text-primary dark:text-accent-foreground">
                Browse
              </h1>
            </label>
          </form>
        </div>
      </main>
    </DashboardLayout>
  )
}

export default Home
