import ChatItem from "./ChatItem"

const Chats = ({ chats }) => {
    return (
      <div className="flex h-full w-full flex-col overflow-auto">
        <div className="flex h-14 w-full shrink-0 cursor-pointer items-center justify-between border-b px-3 hover:bg-accent hover:text-accent-foreground">
          <h1 className="flex items-center">
            <span className="mr-1 text-sm">⭐</span>Stars
          </h1>
          <span className="text-sm">5</span>
        </div>
  
        <ul className="h-full w-full">
          {chats.map((item, i) => (
            <ChatItem key={i} chat={item} />
          ))}
        </ul>
      </div>
    )
  }

export default Chats