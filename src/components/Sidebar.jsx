import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import cn from "../utils/cn"
import { IoMdClose } from "react-icons/io";
import {MdKeyboardArrowLeft} from "react-icons/md"
import Link from "next/link"
import { close } from "../redux/slices/isSidebarOpened"
import { btnStyle } from "./UploadFile";
const Sidebar = (props) => {
  const isSidebarOpened = useSelector((state) => state.isSidebarOpened.isSidebarOpened)
  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch(close())
  }
  return (
    <aside {...props} className={cn("absolute flex left-0 order-1 transition-transform duration-300 ease-in-out h-full w-full shrink-0 md:static md:w-[250px]",{
      "translate-x-0":isSidebarOpened,
      "-translate-x-full md:fixed":!isSidebarOpened,
    })}>
      <div className="flex flex-col w-full h-full bg-foreground text-background dark:bg-background dark:text-foreground">
        <section className="flex items-center justify-center w-full px-2 py-3">
          <Link href={"/"} className={cn(btnStyle," w-full text-md")} title="New Chat" >
            +New Chat
          </Link>
        </section>

        
        <section></section>

        
        <section></section>
      </div>
      
      
      <div className="flex items-start w-32 h-full p-2 bg-transparent shrink-0 md:hidden" onClick={closeSidebar}>
        <button title="Close sidebar" type="button" className="text-2xl border border-foreground" onClick={closeSidebar}>
          <IoMdClose  />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
