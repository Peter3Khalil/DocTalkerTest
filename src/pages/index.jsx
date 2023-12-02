import React from "react"
import { SiAddthis } from "react-icons/si"
import Header from "../components/Header"
import { chats } from "../../FakeData"
import Chats from "../components/Chat/Chats"
const Home = () => {
  return (
    <>
      <SmallScreen />
      <LargeScreen />
    </>
  )
}

const SmallScreen = () => {
  return (
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
  )
}
const LargeScreen = () => {
  return (
    <div className="hidden h-full w-full lg:flex">
      <aside className="flex h-full w-72 shrink-0 flex-col border-r bg-background pb-4">
        <div className="flex h-14 w-full shrink-0 cursor-pointer items-center border-b px-3 text-xl hover:bg-accent hover:text-accent-foreground">
          <SiAddthis />
          <h1 className="ml-2">New Chat</h1>
        </div>

        <div className="h-14 w-full shrink-0 border-b">
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
  )
}

export default Home
