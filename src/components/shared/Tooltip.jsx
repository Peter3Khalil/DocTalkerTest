import React, { useState } from "react"

const Tooltip = ({ children,title,side="left-0 bottom-[-25px]" }) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className="relative flex content-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <p className={`absolute ${side} whitespace-nowrap max-w-[150px] overflow-hidden text-ellipsis z-10 w-fit text-sm rounded border bg-background px-2 py-1 text-foreground`}>
          {title}
        </p>
      )}
    </div>
  )
}

export default Tooltip
