import React, { useEffect, useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
const Header = () => {
  const [visible, setVisible] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)
  const handleScroll = () => {
    const position = window.scrollY
    setScrollPos(position)
    setVisible(scrollPos > position)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPos])
  return (
    <header
      className={`sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between border-b-4 bg-background px-3 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <h1>DocTaker</h1>
      <div className="flex gap-3">
        <button className="text-lg">🔍</button>
        <button className="text-lg"><CiMenuKebab/></button>
      </div>
    </header>
  )
}

export default Header
