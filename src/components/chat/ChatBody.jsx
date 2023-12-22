import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import MessageBox from "./MessageBox"
import { cn } from "../../utils/helperFunctions"

const ChatBody = ({ messages }) => {
  const isDocumentOpen = useSelector((state) => state.document.isOpen)
useEffect(() => {
    const chatBody = document.getElementById("chatBody")
    chatBody.scrollTop = chatBody.scrollHeight
}, [messages])
  return (
    <div id="chatBody" className={cn("flex h-full w-full justify-center overflow-auto px-4")}>
      <div
        className={cn("flex h-full w-full flex-col gap-2", {
          "lg:max-w-[60%]": !isDocumentOpen,
        })}
      >
        {messages.map((message, index) => (
          <MessageBox key={index} message={message} />
        ))}
      </div>
    </div>
  )
}

export default ChatBody
