import React, { useState } from 'react'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'
import { cn } from '../../utils/helperFunctions'

const ChatContainer = () => {
  const [messages, setMessages] = useState([])
    return (
      <div className={cn("relative flex h-full flex-1 flex-col gap-2 pt-4")}>
        <ChatBody messages={messages} />
        <ChatFooter setMessages={setMessages}/>
      </div>
    )
  }
export default ChatContainer