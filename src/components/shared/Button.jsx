import React from "react"
import { cn } from "../../utils/helperFunctions"

const Button = ({ children, onClick, className, type = "button", ...props }) => {
  return (
    <button type={type} onClick={onClick} className={cn("p-2 w-full h-fit rounded hover:bg-primary/90 bg-primary text-primary-foreground", className)}>
      {children}
    </button>
  )
}

export default Button
