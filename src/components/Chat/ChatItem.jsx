import React, { useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
import { CiChat1 } from "react-icons/ci";
import Link from "next/link"
const ChatItem = ({ chat ,onClick,isActive}) => {
  const { id, name, messages, isStar, documentURL } = chat
  const [showMenu, setShowMenu] = useState(false)
  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <li className="w-full">
      <Link
        href={`/chat/${id}`}
        onClick={()=>onClick(id)}
        className={`${isActive?"bg-primary text-primary-foreground":"hover:bg-accent hover:text-accent-foreground"} flex h-14 w-full cursor-pointer items-center justify-between gap-2 border-b px-3`}
      >
        <div className="flex w-[90%] items-center gap-2">
          <CiChat1 className="text-2xl shrink-0"></CiChat1>
          <div className="overflow-hidden whitespace-nowrap">
            <h1 className="overflow-hidden text-ellipsis text-sm font-bold">
              {name || "Chat name"}
            </h1>
            {/* Last message */}
            <p className="overflow-hidden text-ellipsis text-[12px]  font-[500] ">
              {messages[messages.length - 1].content}
            </p>
          </div>
        </div>
        <button className="relative text-lg" onClick={handleOnClick}>
          <CiMenuKebab />
          {showMenu && (
            <div className="absolute right-0 top-0 z-10 h-16 w-12 rounded bg-slate-300"></div>
          )}
        </button>
      </Link>
    </li>
  )
}

export default ChatItem
