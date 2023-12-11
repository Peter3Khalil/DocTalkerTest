import React, { useState } from "react"

const Tooltip = ({ children,title }) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className="relative flex content-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <p className="absolute  bottom-[-25px] left-0 h-fit z-10 w-fit text-sm whitespace-nowrap rounded border bg-background px-2 py-1 text-foreground">
          {title}
        </p>
      )}
    </div>
  )
}

export default Tooltip
