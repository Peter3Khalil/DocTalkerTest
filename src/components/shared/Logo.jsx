import React from "react"
import { cn } from "../../utils/helperFunctions"

const Logo = (props) => {
  return (
    <span {...props} className="font-bold">
      
      <Doc className="mr-1"/>
      Talker
    </span>
  )
}
export const Doc = ({className}) => {
  return (
    <span className={cn("rounded bg-primary p-1 text-primary-foreground font-bold",className)}>
      Doc
    </span>
  )
}
export default Logo
