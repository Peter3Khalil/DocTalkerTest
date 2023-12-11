import React from "react"
import { CiMenuFries } from "react-icons/ci"
import Tooltip from "../components/shared/Tooltip"
import { FaFileUpload } from "react-icons/fa";
const Home = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <header className="flex items-center w-full gap-2 px-2 border-b h-14 shrink-0 bg-background text-foreground dark:border-foreground/40">
        <Tooltip title={"Open Sidebar"}>
          <button
            onClick={() => console.log("peter")}
            type="button"
            className="text-xl rotate-180"
          >
            <CiMenuFries />
          </button>
        </Tooltip>
        <Tooltip title={"Home"}>
          <h1 className="text-xl font-semibold">New Chat</h1>
        </Tooltip>
      </header>
      <main className="flex flex-col items-center justify-center w-full h-full gap-2">
        <h1 className="text-xl font-semibold text-center text-foreground">
          Start a new chat by uploading a file
        </h1>

        <form className="w-[80%] flex flex-col gap-1">
          <input id="file" type="file" className="hidden" />
          <label htmlFor="file" className="flex items-center justify-center w-full gap-1 p-3 text-xl font-semibold text-center border-2 border-dashed rounded cursor-pointer border-primary-foreground text-primary-foreground bg-primary">
            <FaFileUpload />
            <h1 >
              Upload a file
            </h1>
          </label>
          <ul className="flex items-center self-center gap-1 mt-1 text-sm uppercase">
            <li className="px-2 py-1 border rounded">Txt</li>
            <li className="px-2 py-1 border rounded">PDF</li>
          </ul>
        </form>
      </main>
    </div>
  )
}

export default Home
