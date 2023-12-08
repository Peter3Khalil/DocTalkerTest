import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CgProfile } from "react-icons/cg"
import { VscNewFile } from "react-icons/vsc"
import { IoIosArrowBack } from "react-icons/io"

import Link from "next/link"
import { close, open } from "../redux/slices/isSidebarOpened"
const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { isSidebarOpened } = useSelector((state) => state.isSidebarOpened)
  const dispatch = useDispatch()
  return (
    <div
      className={`${
        isSidebarOpened ? "" : "-translate-x-full md:absolute"
      } absolute z-20 flex h-full w-full transition-transform duration-500 ease-in-out md:static md:flex md:w-[270px] md:items-center`}
    >
      <aside
        className={`relative z-10 flex h-full w-full flex-col gap-4 overflow-auto bg-foreground pt-2 text-background dark:bg-background dark:text-foreground md:shrink-0 md:flex-col`}
      >
        {/* Top */}
        <div className="w-full px-2">
          <button className="flex  w-full shrink-0 justify-center rounded p-2 text-md font-semibold subpixel-antialiased hover:bg-muted/20">
            <div className="flex items-center gap-1">
              <VscNewFile className="inline-block" />
              <span>New chat</span>
            </div>
          </button>
        </div>

        {/* Middle */}
        <section className="h-full w-full overflow-auto pr-2">
          <div className="flex h-full w-full flex-col gap-1 pl-2 text-sm font-normal">
            <h1 className="px-2 text-md font-medium text-muted/50">Chats</h1>
            <ul>
              {Array.from({ length: 20 }).map((_, i) => (
                <li
                  key={i}
                  className="relative w-full rounded p-2 hover:bg-muted/20"
                >
                  <Link href={"/chat/5"}>
                    <p className=" overflow-hidden whitespace-nowrap">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta, voluptates. Perferendis cupiditate nostrum sit ut
                      corporis quasi aspernatur! Mollitia distinctio repudiandae
                      cupiditate velit architecto recusandae quis eveniet.
                      Nihil, modi? Est.
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom */}
        <section className="flex  w-full shrink-0 items-center justify-center p-2 text-md font-medium ">
          <div className="flex w-full cursor-pointer items-center rounded p-2 hover:bg-muted/20">
            <CgProfile className="shrink-0" />
            <span className="ml-2 overflow-hidden">
              peterkhalilc544d54d@gmail.com
            </span>
          </div>
        </section>

        {/* Appear above sidebar when hove over arrow */}
        <div
          className={`absolute left-0 top-0 z-0 h-full w-full bg-foreground/50 dark:bg-background/50 ${
            isHovered ? "block" : "hidden"
          }`}
        ></div>
        
      </aside>
      {isSidebarOpened ? (
        <button
          className="hidden md:block"
          onClick={() => dispatch(close())}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Close sidebar"
        >
          <IoIosArrowBack className="text-xl font-bold text-foreground/50 hover:text-foreground" />
        </button>
      ) : (
        <button
        className="hidden md:block"
        onClick={() => dispatch(open())}
        title="open sidebar"
      >
        <IoIosArrowBack className="rotate-180 text-xl font-bold text-foreground/50 hover:text-foreground" />
      </button>
      )}

      <div onClick={()=>dispatch(close())}  className={` h-full w-32 bg-foreground/50 dark:bg-background/50 md:hidden`}></div>
    </div>
  )
}

export default Sidebar
