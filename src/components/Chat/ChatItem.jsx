import React, { useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
import Link from "next/link"
const ChatItem = ({ chat }) => {
  const { id, name, messages, isStar, documentURL } = chat
  const [showMenu, setShowMenu] = useState(false)
  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <li className="w-full">
      <Link
        href={`/chat/${id}`}
        className="flex h-14 w-full cursor-pointer items-center justify-between gap-2 border-b px-3 hover:bg-accent hover:text-accent-foreground"
      >
        <div className="flex w-[90%] items-center gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-black"></div>
          <div className="overflow-hidden whitespace-nowrap">
            <h1 className="overflow-hidden text-ellipsis text-lg font-bold">
              {name || "Chat name"}
            </h1>
            {/* Last message */}
            <p className="overflow-hidden text-ellipsis text-sm text-foreground/50">
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
