import React, { useState } from "react"
import Sidebar from "./Sidebar"
import { useSelector,useDispatch } from "react-redux"
import { IoMdClose } from "react-icons/io";
import { close } from "../redux/slices/isSidebarOpened"
import Modal from "./Modal"
import { closeModal } from "../redux/slices/modalSlice";
const DashboardLayout = ({children}) => {
  const isModalOpened = useSelector((state) => state.modal.isModalOpened)
  const dispatch = useDispatch()
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col flex-grow order-2 h-full bg-accent text-accent-foreground">
       {children}
      </div>
      {/* Sidebar */}
      <Sidebar />

      {/* Modal */}
      {isModalOpened&&<Modal>
        <div className="w-full flex flex-col pb-4 rounded bg-background md:w-[600px] lg:w-[650px]">
          <section className="w-full h-14 border-b dark:border-foreground/30 flex items-center justify-between px-4">
            <h1 className="text-lg font-bold">Setting</h1>
            <IoMdClose className="text-2xl cursor-pointer" onClick={()=>dispatch(closeModal())}/>
          </section>
          <section className="w-full h-full flex flex-col gap-2">
            <div className="w-full flex items-center justify-between px-4 text-md border-b dark:border-foreground/30 py-2">
              <p>Clear all chats</p>
              <button className="py-2 w-16 rounded bg-destructive text-destructive-foreground font-semibold">Clear</button>
            </div>
            <div className="w-full flex items-center justify-between px-4 text-md">
              <p>Delete account</p>
              <button className="py-2 w-16 rounded bg-destructive text-destructive-foreground font-semibold">delete</button>
            </div>
          </section>
        </div>
        </Modal>}
    </div>
  )
}

export default DashboardLayout
