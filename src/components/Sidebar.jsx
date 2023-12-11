import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { close, open } from "../redux/slices/isSidebarOpened"
import { IoIosArrowBack } from "react-icons/io"
import { TbMinusVertical } from "react-icons/tb"
import { RxAvatar } from "react-icons/rx"

const Sidebar = () => {
  const [isHover, setIsHover] = useState(false)
  const { isSidebarOpened } = useSelector((state) => state.isSidebarOpened)
  
  const dispatch = useDispatch()
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  const handleCloseSidebar = () => {
    dispatch(close())
  }
  const handleOpenSidebar = () => {
    dispatch(open())
  }
  return (
    <>
      {isSidebarOpened && (
        <aside className="flex h-full w-[270px] gap-1">
          <div className="relative flex h-full w-full max-w-[250px] flex-col gap-3 bg-foreground pt-2 text-background">
            {/* Top */}
            <section className="h-12 w-full px-2">
              <button className="w-full rounded bg-primary p-2 text-md font-medium hover:bg-primary/70">
                +New Chat
              </button>
            </section>

            {/* Middle */}
            <section className="h-full w-full overflow-auto pl-2">
              <h3 className="px-2 text-lg font-medium text-background/50">
                Chats
              </h3>
              <ul className="h-full w-full pr-2">
                {Array.from({ length: 20 }).map((item, i) => (
                  <li
                    className="w-full cursor-pointer overflow-hidden text-ellipsis rounded p-2 text-sm hover:bg-accent/20"
                    key={i}
                  >
                    ChatChatChatChatChatChatChatChatChatChatChatChatChat{i}
                  </li>
                ))}
              </ul>
            </section>
            {/* Bottom */}
            <section className=" flex w-full shrink-0 items-center p-2">
              <button className="flex w-full items-center rounded p-2 hover:bg-accent/20">
                <RxAvatar className="shrink-0 text-md" />
                <p className=" w-full overflow-hidden text-ellipsis text-sm">
                  peterkhalil@gmail.comshhs
                </p>
              </button>
            </section>

            {isHover && (
              <div className="absolute left-0 top-0 z-10 h-full w-full bg-accent-foreground/70"></div>
            )}
          </div>
          <div className="shrink-0 self-center text-2xl text-foreground/50">
            <IoIosArrowBack
              className={`${
                isHover ? "block" : "hidden"
              } cursor-pointer text-foreground`}
              onMouseLeave={handleMouseLeave}
              onClick={handleCloseSidebar}
            />
            <TbMinusVertical
              className="cursor-pointer "
              style={{ display: isHover ? "none" : "block" }}
              onMouseEnter={handleMouseEnter}
            />
          </div>
        </aside>
      )}
      {!isSidebarOpened && (
        <IoIosArrowBack
          onClick={handleOpenSidebar}
          className="rotate-180 cursor-pointer self-center text-2xl text-foreground/50 hover:text-foreground"
        />
      )}
    </>
  )
}

export default Sidebar
