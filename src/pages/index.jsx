import React from "react"
import { CiMenuKebab } from "react-icons/ci"
import { SiAddthis } from "react-icons/si"
import Header from "../components/Header"

const Home = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-background text-foreground">
      <Header/>
      <main className="flex h-full w-full flex-col">
        <div className="h-14 w-full shrink-0 border">Stars</div>
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
    <ul className="h-full w-full">
      {Array.from({ length: 20 }).map((item) => (
        <ChatItem />
      ))}
    </ul>
  )
}
const ChatItem = ({ chat }) => {
  return (
    <li className="flex items-center justify-between border-b px-3 py-2">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-black"></div>
        <h1>ChatName</h1>
      </div>
      <CiMenuKebab />
    </li>
  )
}
export default Home
