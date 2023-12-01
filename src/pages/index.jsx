import React from "react"
import { CiMenuKebab } from "react-icons/ci"
import { SiAddthis } from "react-icons/si"
import Header from "../components/Header"

const Home = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background text-foreground">
      <Header />
      <main className="h-full w-full overflow-auto">
        <Chats />
      </main>
      <button className="fixed bottom-4 right-4 text-4xl">
        <SiAddthis />
      </button>
    </div>
  )
}
const Chats = ({ chats }) => {
  return (
    <div className="h-full w-full">
      <div className="h-14 w-full shrink-0 border-b flex items-center justify-between px-3 cursor-pointer hover:bg-accent hover:text-accent-foreground">
        <h1 className="flex items-center"><span className="text-sm mr-1">⭐</span>Stars</h1>
       <span className="text-sm">5</span>
      </div>
      <ul className="w-full">
      {Array.from({ length: 20 }).map((item,i) => (
        <ChatItem key={i}/>
      ))}
      </ul>
    </div>
  )
}
const ChatItem = ({ chat }) => {
  return (
    <li className="flex w-full gap-2 cursor-pointer items-center justify-between border-b px-3 h-14 cursor-pointer hover:bg-accent hover:text-accent-foreground">
      <div className="flex items-center gap-2 w-[90%]">
        <div className="h-8 w-8 rounded-full bg-black shrink-0"></div>
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus quia dolorem, ratione quo fuga aspernatur beatae consequuntur. Doloremque odio distinctio facere illo adipisci nihil iure maiores aliquid tempora alias.</h1>
      </div>
      <CiMenuKebab className=""/>
    </li>
  )
}
export default Home
