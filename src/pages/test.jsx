import React, { useEffect, useRef } from "react"

const test = () => {
    const scrollContainerRef = useRef(null)

    useEffect(() => {
      const handleScroll = () => {
        const scrollContainer = scrollContainerRef.current
        const items = Array.from(scrollContainer.querySelectorAll(".item"))
        const middle = scrollContainer.scrollLeft + scrollContainer.clientWidth / 2
        let closest = items[0]
  
        for (const item of items) {
          const start = item.offsetLeft - scrollContainer.scrollLeft
          const end = start + item.clientWidth
  
          if (start <= middle && end >= middle) {
            closest = item
            break
          }
        }
  
        console.log("Active item:", closest.innerHTML)
      }
  
      const scrollContainer = scrollContainerRef.current
      scrollContainer.addEventListener("scroll", handleScroll)
  
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }, [])
    
  return (
    <div className="w-full h-full">
      <header className="fixed flex items-center w-full bg-black h-14">
        <u className="flex items-center justify-between w-full h-full">
            <li className="inline-block px-4 py-2 text-white">Home</li>
            <li className="inline-block px-4 py-2 text-white">About</li>
            <li className="inline-block px-4 py-2 text-white">Contact</li>
        </u>
      </header>
      <div
        className="flex w-full h-full overflow-x-scroll whitespace-nowrap scrollContainer"
        ref={scrollContainerRef}
      >
        <div
          style={{ scrollSnapAlign: "start", scrollSnapStop: "unset" }}
          className="box-border h-full min-w-full p-4 bg-amber-400 item"
        >
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold text-center text-white">
                Home
                </h1>
            </div>
        </div>
        <div
          style={{ scrollSnapAlign: "start", scrollSnapStop: "unset" }}
          className="box-border h-full min-w-full p-4 bg-red-300 item"
        >
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold text-center text-white">
                About
                </h1>
            </div>
        </div>
        <div
          style={{ scrollSnapAlign: "start", scrollSnapStop: "unset" }}
          className="box-border h-full min-w-full p-4 bg-blue-300 item"
        >
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold text-center text-white">
                Contact
                </h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default test
