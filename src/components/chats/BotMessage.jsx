import React, { useState } from "react"
import { FaRobot } from "react-icons/fa"
import { LuCopy } from "react-icons/lu"
import { FaCheck } from "react-icons/fa";
const BotMessage = ({ message,requesting }) => {
    const [isCopied, setIsCopied] = useState(false)
    const copy = () => {
        navigator.clipboard.writeText(message).then(() => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 1000)
        })
    }
  return (
    <div className="relative flex w-full items-start gap-1 rounded border-2 border-primary/70 bg-foreground px-4 py-5 text-background">
      <button style={{display:requesting?"none":"block"}} onClick={copy} className="absolute right-2 top-2 text-sm">
        {isCopied?<FaCheck className="text-primary"/>:<LuCopy />}
      </button>
      <FaRobot className="shrink-0 text-xl" />
      {message === "Thinking..." ? (
        <p className="animate-pulse text-md font-medium">{message}</p>
      ) : (
        <p className="text-md font-medium">{message}</p>
      )}
    </div>
  )
}

export default BotMessage
