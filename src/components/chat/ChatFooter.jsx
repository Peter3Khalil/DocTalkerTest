import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { cn } from '../../utils/helperFunctions'
import { IoSend } from '../shared/Icons'

const ChatFooter = ({setMessages}) => {
    const isDocumentOpen = useSelector((state) => state.document.isOpen)
    const [message, setMessage] = useState("")
    const textareaRef = useRef(null)
    const handleOnchange = (e) => {
      setMessage(e.target.value)
    }
    const handleOnSubmit = (e) => {
      e.preventDefault()
      if (message.trim() === "") return
      setMessages((prev) => [...prev,  message ])
      setMessage("")
    }
    const handleAutoResize = (e) => {
     
    }
    useEffect(() => {
      textareaRef.current.style.height = "60px"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }, [message])
    return (
      <div
        className={cn("flex w-full shrink-0  items-center justify-center p-2", {
          "mx-auto lg:max-w-[60%]": !isDocumentOpen,
        })}
      >
        <form onSubmit={handleOnSubmit} className="relative flex min-h-[10px] w-full items-center rounded border">
          <textarea
            className="max-h-[200px] h-[60px] w-full resize-none bg-inherit box-border py-2 pl-2 pr-14 text-md outline-none"
            placeholder="Type a message"
            
            id="message"
             ref={textareaRef}
            value={message}
            onChange={handleOnchange}
          />
          <button
            className="absolute right-0 top-[50%] flex h-8 w-8 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded bg-primary text-lg text-primary-foreground"
            title="Send"
            type='submit'
          >
            <IoSend />
          </button>
        </form>
      </div>
    )
  }

export default ChatFooter