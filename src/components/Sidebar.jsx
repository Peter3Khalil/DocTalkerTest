import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import cn from "../utils/cn"
import { FaUser } from "react-icons/fa"
import Link from "next/link"
import { close } from "../redux/slices/isSidebarOpened"
import { btnStyle } from "./UploadFile"
import { useRouter } from "next/router"
import { openModal } from "../redux/slices/modalSlice"
const Sidebar = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" })
  const isSidebarOpened = useSelector(
    (state) => state.isSidebarOpened.isSidebarOpened,
  )

  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch(close())
  }
  const handleOpenModal = () => {
    dispatch(openModal())
    if (isMobile) dispatch(close())
  }
  return (
    <aside
      {...props}
      className={cn(
        "absolute left-0 order-1 flex h-full  w-[250px] shrink-0 transition-transform duration-300 ease-in-out md:static",
        {
          "z-10 translate-x-0": isSidebarOpened,
          "-z-10 -translate-x-full md:fixed": !isSidebarOpened,
        },
      )}
    >
      <div className="flex h-full w-full flex-grow flex-col bg-foreground text-background dark:bg-background dark:text-foreground">
        <section className="flex items-center justify-center px-2 py-3">
          <Link
            href={"/"}
            className={cn(btnStyle, " w-full text-md")}
            title="New Chat"
          >
            + New Chat
          </Link>
        </section>

        <section className="flex flex-col gap-1 overflow-auto px-2">
          <h2 className="px-2 text-sm text-muted/70 dark:text-muted-foreground/70">
            Chats
          </h2>
          <ul className=" chats flex h-full   flex-col gap-2 overflow-auto pr-2">
            {Array.from({ length: 70 }).map((_, i) => (
              <ChatItem key={i} chatName={`chat ${i}`} chatId={i} />
            ))}
          </ul>
        </section>

        <section className="relative flex w-full shrink-0 items-center justify-center p-3">
          <div
            className="flex w-full cursor-pointer items-center gap-1 rounded p-2 hover:bg-primary/30"
            onClick={handleOpenModal}
          >
            <FaUser className="shrink-0 text-xl text-primary" />
            <p className="line-clamp-1 whitespace-nowrap text-md">
              Peterkhalil@gmail.comPeterkhalil@gmail.comcomcomcomcomcomcomcomcomcomcomcomcomcomcomcom
            </p>
          </div>
        </section>
      </div>

      <div
        className="flex h-full w-32 shrink-0 items-start bg-transparent p-2 md:hidden"
        onClick={closeSidebar}
      ></div>
    </aside>
  )
}

const ChatItem = ({ chatName, chatId }) => {
  const router = useRouter()
  const { chatId: id } = router.query
  const isActive = chatId == id

  return (
    <li
      key={chatId}
      className={cn("relative w-full rounded px-2 py-2", {
        "bg-primary": isActive,
        "hover:bg-primary/30 hover:text-primary-foreground dark:hover:bg-primary/30 dark:hover:text-primary-foreground":
          !isActive,
      })}
    >
      <Link className="h-full w-full" href={`/chat/${chatId}`}>
        <p className="h-full w-full overflow-hidden text-clip whitespace-nowrap text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores
          voluptatibus cumque vel necessitatibus odio alias provident aspernatur
          doloremque quos. Distinctio suscipit minus ab eveniet autem velit
          libero, deserunt dolorem eaque adipisci eum explicabo officiis unde
          magni ea rerum voluptatem dolores tempora totam vero dignissimos animi
          fugit! Repudiandae enim quidem hic rem eveniet ullam ad in veritatis
          accusantium voluptate molestiae maxime quos temporibus reiciendis,
          repellendus quasi ducimus cumque fugiat animi odit obcaecati fugit
          adipisci ut. Provident, laboriosam. Eaque ab ut, similique voluptas
          dolorem ullam mollitia quas alias molestiae rerum, ipsam odio
          temporibus officiis. Accusamus officiis impedit dolor quia provident
          ratione, consectetur, necessitatibus amet, modi quas voluptates
          minima? Fuga eum ipsum, possimus alias repellat explicabo esse maiores
          recusandae placeat quod ipsam natus repudiandae cumque debitis dolore
          optio itaque velit quidem, aliquam obcaecati ratione error?
          Perferendis, sed eveniet nemo vel illo error atque accusamus quo
          repellat natus veniam minima ab exercitationem sit ullam, quas
          similique modi ad ex aliquid aperiam id neque dolor. Molestias,
          consequatur repellat delectus qui dolore assumenda odio rerum beatae
          mollitia eos laudantium tempora ab voluptatibus ea adipisci error est
          accusantium explicabo nobis eum deserunt. Vitae beatae voluptate rem
          reprehenderit enim nobis eligendi! Laudantium dolores porro sit fugit
          quas?
        </p>
      </Link>
      {!isActive && (
        <div className="absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l from-foreground/50 to-transparent dark:from-background/50"></div>
      )}
    </li>
  )
}
export default Sidebar
