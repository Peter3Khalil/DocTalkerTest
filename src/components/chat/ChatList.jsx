import React from 'react'
import ChatItem from './ChatItem'

const ChatList = ({chats}) => {
    return (
      <ul className=" w-full overflow-y-auto pr-1" id="chatList">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chatName={chat.name} chatId={chat.id} />
        ))}
      </ul>
    )
  }

export default ChatList