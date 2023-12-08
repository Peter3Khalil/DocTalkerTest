import { use, useEffect, useState } from "react"
import ChatItem from "./ChatItem"
import { useRouter } from "next/router"

const Chats = ({ chats }) => {
  const [currentChat, setCurrentChat] = useState(null)
  const handleOnClick = (chat) => {
    setCurrentChat(chat)
  }
  
    return (
      <div className="flex h-full w-full flex-col overflow-auto">
        <div className="flex h-14 w-full shrink-0 cursor-pointer items-center justify-between border-b px-3 hover:bg-accent hover:text-accent-foreground">
          <h1 className="flex items-center">
            <span className="mr-1 text-sm">⭐</span>Stars
          </h1>
          <span className="text-sm">5</span>
        </div>
  
        <ul className="h-full w-full">
          {chats.map((chat, i) => (
            <ChatItem key={i} chat={chat} isActive={chat.id===currentChat}  onClick={handleOnClick}/>
          ))}
        </ul>
      </div>
    )
  }

export default Chats