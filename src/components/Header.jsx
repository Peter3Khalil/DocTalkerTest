import React, { useEffect, useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
const Header = () => {
  return (
    <header
      className={`flex h-16 w-full shrink-0 items-center justify-between border-b bg-background px-3`}
    >
      <h1>DocTalker</h1>
      <div className="flex gap-3">
        <button className="text-lg">🔍</button>
        <button className="text-lg">
          <CiMenuKebab />
        </button>
      </div>
    </header>
  )
}

export default Header
