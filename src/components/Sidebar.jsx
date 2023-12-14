import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import cn from "../utils/cn"
import { IoMdClose } from "react-icons/io"
import { MdKeyboardArrowLeft } from "react-icons/md"
import Link from "next/link"
import { close } from "../redux/slices/isSidebarOpened"
import { btnStyle } from "./UploadFile"
import { useRouter } from "next/router"
const Sidebar = (props) => {
  const isSidebarOpened = useSelector(
    (state) => state.isSidebarOpened.isSidebarOpened,
  )
  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch(close())
  }
  const router = useRouter()
  const { chatId } = router.query
  return (
    <aside
      {...props}
      className={cn(
        "absolute left-0 order-1 flex h-full w-full shrink-0 transition-transform duration-300 ease-in-out md:static md:w-[250px]",
        {
          "translate-x-0": isSidebarOpened,
          "-translate-x-full md:fixed": !isSidebarOpened,
        },
      )}
    >
      <div className="flex h-full w-full flex-col bg-foreground text-background dark:bg-background dark:text-foreground">
        <section className="flex w-full items-center justify-center px-2 py-3">
          <Link
            href={"/"}
            className={cn(btnStyle, " w-full text-md")}
            title="New Chat"
          >
            + New Chat
          </Link>
        </section>

        <section className="flex w-full flex-grow flex-col overflow-auto px-2 gap-1">
          <h2 className="text-muted/70 dark:text-muted-foreground/70 text-sm px-2">Chats</h2>
          <ul className=" chats flex h-full w-full flex-col gap-2 overflow-auto pr-2">
            {Array.from({ length: 70 }).map((_, i) => (
              <li
                key={i}
                className={cn(
                  "relative w-full rounded px-2 py-1 hover:bg-muted/20 dark:hover:bg-muted",
                  {
                    "bg-primary hover:bg-primary dark:hover:bg-primary":
                      chatId == i,
                  },
                )}
              >
                <Link href={`/chat/${i}`}>
                  <p className="h-full w-full overflow-hidden whitespace-nowrap text-sm ">
                    ChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChatChat{" "}
                    {i}
                  </p>
                </Link>
                {chatId != i && (
                  <div className="absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l from-foreground/50 to-transparent  dark:from-background/50"></div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="h-16 w-full shrink-0 bg-black"></section>
      </div>

      <div
        className="flex h-full w-32 shrink-0 items-start bg-transparent p-2 md:hidden"
        onClick={closeSidebar}
      >
        <button
          title="Close sidebar"
          type="button"
          className="border border-foreground text-2xl"
          onClick={closeSidebar}
        >
          <IoMdClose />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
