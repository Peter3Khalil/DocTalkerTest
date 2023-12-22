import React, { memo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { closeSidebar } from "../../redux/slices/sidebar"
import { cn } from "../../utils/helperFunctions"
import Link from "next/link"
import Button from "../shared/Button"
import { chats } from "../../../public/dummyData"
import ChatList from "./ChatList"
import { CgProfile } from "../shared/Icons"
import Modal from "../Modal"
import { openModal } from "../../redux/slices/modal"
const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeSidebar())
  }
  console.log("Sidebar")
  return (
    <aside
      className={cn(
        "absolute left-0 top-0 z-10 flex h-full w-full shrink-0 overflow-y-auto overflow-x-hidden transition-transform duration-500 ease-in-out  md:static md:w-[250px]",
        {
          "translate-x-0": isOpen,
          "-translate-x-full md:fixed": !isOpen,
        },
      )}
    >
      {/* Sidebar content */}
      <div
        className={
          "flex h-full flex-1 flex-col overflow-x-hidden whitespace-nowrap bg-foreground pt-3 text-background dark:bg-background dark:text-foreground "
        }
      >
        <section className="mb-4 w-full shrink-0 px-2">
          <Link href={"/"}>
            <Button className={"text-md font-bold"}>+ New Chat</Button>
          </Link>
        </section>

        <section className=" flex h-full w-full flex-col gap-1 overflow-y-auto pl-2">
          <h2 className="px-2 text-sm font-medium opacity-50">Chats</h2>
          <ChatList chats={chats} />
        </section>

        <Profile />
      </div>

      {/* Overlay */}
      <div
        className="h-full w-32 bg-foreground/20 md:hidden"
        onClick={handleClose}
      ></div>
    </aside>
  )
}

const Profile = () => {
  const dispatch = useDispatch()
  return (
    <>
      <section className="mt-2 hidden h-16 w-full shrink-0 items-center bg-inherit px-2 md:flex">
        <div onClick={()=>dispatch(openModal())} className="flex w-full cursor-pointer items-center gap-1 rounded p-2 text-md hover:bg-muted/20 dark:hover:bg-muted-foreground/20">
          <CgProfile className="shrink-0 text-xl" />
          <p className="overflow-hidden">
            peterkhalilpeterkhalilpeterkhalilpeterkhalilpeterkhalilpeterkhalilpeterkhalilv@gmail.com
          </p>
        </div>
      </section>
    </>
  )
}
export default memo(Sidebar)
