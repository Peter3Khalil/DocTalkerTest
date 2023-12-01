import React, { use, useEffect, useState } from "react"

const test = () => {
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
    <div className="flex h-[400vh] w-full flex-col bg-background md:flex-row md:bg-slate-500 lg:bg-red-500 relative">
      <div className="h-72 w-full bg-red-300"></div>
      <div className="h-72 w-full bg-red-300"></div>
      <div className="h-72 w-full bg-red-300"></div>
      <div className="h-72 w-full bg-red-300"></div>
      <div className="h-72 w-full bg-red-300"></div>
      <div className="h-72 w-full bg-red-300"></div>
      <div
        className={`fixed left-[50%] translate-x-[-50%] top-0 h-12 w-72 rounded-md bg-slate-400 transition-transform duration-500 ease-in-out ${
          visible ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      ></div>
    </div>
  )
}

export default test
