import React, { useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
import { SiAddthis } from "react-icons/si"
import Header from "../components/Header"
import { chats } from "../../FakeData"
const Home = () => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col bg-background text-foreground lg:hidden">
        {/* Small Screen */}
        <Header />
        <main className="h-full w-full overflow-auto">
          <Chats chats={chats} />
        </main>
        <button className="fixed bottom-4 right-4 z-20 text-4xl">
          <SiAddthis />
        </button>
        {/* ******************* */}
      </div>

      {/* Large Screen */}
      <div className="hidden h-full w-full lg:flex">
        <aside className="flex h-full w-72 shrink-0 flex-col border-r bg-background pb-4">
          <div className="flex shrink-0 h-14 w-full cursor-pointer items-center border-b px-3 text-xl hover:bg-accent hover:text-accent-foreground">
            <SiAddthis />
            <h1 className="ml-2">New Chat</h1>
          </div>

          <div className="h-14 w-full border-b shrink-0">
            <input
              type="text"
              className="h-full w-full bg-transparent px-3 outline-none"
              placeholder="Search"
            />
          </div>
            <Chats chats={chats} />
        </aside>
        <main className="h-full w-full bg-background"></main>
      </div>
    </>
  )
}
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
const ChatItem = ({ chat }) => {
  const { id, name, messages, isStar, documentURL } = chat
  const [showMenu, setShowMenu] = useState(false)
  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <li className="flex h-14 w-full cursor-pointer items-center justify-between gap-2 border-b px-3 hover:bg-accent hover:text-accent-foreground">
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
    </li>
  )
}

export default Home
