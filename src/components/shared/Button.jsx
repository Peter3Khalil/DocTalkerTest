import React from "react"
import { cn } from "../../utils/helperFunctions"

const Button = ({ children, onClick, className, disabled=false,type = "button", ...props }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cn("p-2 flex items-center justify-center  outline-none w-full  rounded hover:bg-primary/90 bg-primary text-primary-foreground ",className)}>
      {children}
    </button>
  )
}

export default Button
