import React, { useEffect, useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
const Header = () => {
  const [searchOpened, setSearchOpened] = useState(false)
  useEffect(() => {
    if (searchOpened) document.getElementById("search").focus()
  }, [searchOpened])
  return (
    <header
      className={`relative flex h-16 w-full shrink-0 items-center justify-between border-b bg-background px-3`}
    >
      <h1>DocTalker</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setSearchOpened(true)}
          className={`text-lg ${searchOpened ? "hidden" : "block"}`}
        >
          🔍
        </button>
        <button className="text-lg">
          <CiMenuKebab />
        </button>
      </div>
      {searchOpened && (
        <div className="absolute left-0 top-0 flex h-full  w-full items-center bg-background">
          <input
            type="text"
            className="h-full w-full px-3 outline-none"
            placeholder="Search"
            id="search"
          />
          <button
            className="w-12 text-lg"
            onClick={() => setSearchOpened(false)}
          >
            ❌
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
