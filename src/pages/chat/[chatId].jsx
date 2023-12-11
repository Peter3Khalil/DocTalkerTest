import React, { use, useEffect, useRef, useState } from "react"
import Tooltip from "../../components/shared/Tooltip"
import { CiMenuFries } from "react-icons/ci"
import { LuEye } from "react-icons/lu"
import { AiOutlineSend } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { FaRobot } from "react-icons/fa6";
const chat = {
  id: 1,
  name: "Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1Chat link 1 ",
  url: "https://www.google.com",
  messages: [
    {
      id: 1,
      role: "user",
      content: "Hello",
    },
    {
      id: 2,
      role: "assistant",
      content: "Hello, My name is Assistant, How can I help you today?",
    },
    {
      id: 3,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 4,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 5,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 6,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 7,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 8,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 9,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 10,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 11,
      role: "user",
      content: "I have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problemI have a problem",
    },
    {
      id: 12,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 13,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 14,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 15,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 16,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 17,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 18,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 19,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 20,
      role: "assistant",
      content: "What is your problem?",
    },
    {
      id: 21,
      role: "user",
      content: "I have a problem",
    },
    {
      id: 22,
      role: "assistant",
      content: "What is your problem?",
    },
  ],
}
const SingleChat = () => {
  const [message, setMessage] = useState("")

  return (
    <div className="flex flex-col w-full h-full">
      <header className="flex items-center justify-between w-full gap-2 px-2 border-b h-14 shrink-0 bg-background text-foreground dark:border-foreground/40">
        <Tooltip title={"Open Sidebar"}>
          <button type="button" className="text-xl rotate-180">
            <CiMenuFries />
          </button>
        </Tooltip>

        <Tooltip title={chat.name} side="left-[50%] translate-x-[-50%]">
          <h1 className="line-clamp-1 max-w-[200px] overflow-hidden text-ellipsis break-all text-xl font-semibold">
            {chat.name}
          </h1>
        </Tooltip>

        <Tooltip title={"View Document"} side="right-0">
          <button type="button" className="text-xl rotate-180">
            <LuEye />
          </button>
        </Tooltip>
      </header>

      <main className="flex flex-col w-full h-full">
        {/* Chats */}
        <ul className="flex h-[20vh] w-full flex-grow flex-col gap-2 overflow-auto p-3">
          {chat.messages.map((message) => (
            <MessageBox key={message.id} message={message} />
          ))}
        </ul>
        {/* Input */}
        <Form message={message} setMessage={setMessage} />
      </main>
    </div>
  )
}
const Form = ({ message, setMessage }) => {
  const disabled = message.trim() === ""
  const textareaRef = useRef(null)
  useEffect(() => {
    textareaRef.current.style.height = "40px"
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
  }, [message])
  useEffect(() => {
    textareaRef.current.focus()
  }, [])
  return (
    <form className="flex flex-col w-full p-3 shrink-0">
      <div className="flex items-center gap-1">
        <textarea
          type="text"
          className="h-10 bg-inherit dark:border-foreground/40 dark:focus:border-primary max-h-[150px] min-h-[40px] w-full resize-none rounded border p-2 align-middle outline-none focus:border-primary"
          placeholder="Type a message"
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className={`${disabled ? "opacity-40" : ""} text-2xl text-primary`}
          disabled={disabled}
        >
          <AiOutlineSend />
        </button>
      </div>
    </form>
  )
}
const MessageBox = ({ message }) => {
  return (
    <li
      className={`flex w-full items-start rounded p-3 ${
        message.role === "assistant"
          ? "bg-primary text-primary-foreground"
          : "bg-accent text-accent-foreground"
      }`}
    >
      <div className="flex items-start gap-1">
        {message.role.toLowerCase() === "user" ? (
          <FaUserAlt className="text-lg" />
        ) : (
          <FaRobot className="text-lg" />
        )}

        <div className="flex flex-col items-start gap-1">
          <p className="text-lg font-bold leading-none">
            {message.role.toLowerCase() === "user" ? "You" : "DocTalker"}
          </p>
          <p className="break-words break-all text-[14px]">{message.content}</p>
        </div>
      </div>
    </li>
  )
}
export default SingleChat
