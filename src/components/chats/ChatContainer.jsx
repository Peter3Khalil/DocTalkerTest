import React, { use, useEffect, useState } from "react"
import UserMessage from "./UserMessage"
import BotMessage from "./BotMessage"
import { AiOutlineSend } from "react-icons/ai"
import { FaRegStopCircle } from "react-icons/fa"
let controller = null
const ChatContainer = () => {
  const [message, setMessage] = useState("")
  const [chats, setChats] = useState([])
  const [requesting, setRequesting] = useState(false)
  const [stopScrolling, setStopScrolling] = useState(false)
  const disabled = !message.trim() || requesting

  const stop = () => {
    if (controller) {
      controller.abort()
      controller = null
      setRequesting(false)
    }
  }

  const handleOnclick = async (e) => {
    e.preventDefault()
    setMessage("")
    setStopScrolling(false)
    setChats([...chats, { user: message, bot: "Thinking..." }])
    try {
      controller = new AbortController()
      const signal = controller.signal
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        stream: true,
      }

      setRequesting(true)
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
          },
          body: JSON.stringify(data),
          signal,
        },
      )
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let result = ""
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        let decodedValue = decoder.decode(value)
        const lines = decodedValue.split("\n")
        const parsedLines = lines
          .map((line) => line.replace(/^data:/, "").trim())
          .filter((line) => !line == "" && line !== "[DONE]")
          .map((line) => JSON.parse(line))

        parsedLines.forEach((parsedLine) => {
          const { choices } = parsedLine
          const { delta } = choices[0]
          const { content } = delta
          if (content) {
            result += content
          }
        })
        setChats([...chats, { user: message, bot: result }])
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch request was cancelled")
        setChats((prev) => [
          ...chats,
          {
            user: message,
            bot:
              prev[prev.length - 1].bot === "Thinking..."
                ? "Request Canceled"
                : prev[prev.length - 1].bot,
          },
        ])
      } else {
        console.log(error.message)
      }
    }
    setRequesting(false)
  }

  useEffect(() => {
    // Auto scroll
    if (!stopScrolling) {
      const chatContainer = document.getElementById("chatContainer")
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
    // Stop auto scroll when user scroll up

    const chatContainer = document.getElementById("chatContainer")
    let lastScrollTop = 0 // Add this line to keep track of the last scroll position

    const handleScroll = () => {
      let st = chatContainer.scrollTop
      if (st < lastScrollTop) {
        // scroll up
        setStopScrolling(true)
      }
      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    }

    chatContainer.addEventListener("scroll", handleScroll)

    return () => {
      chatContainer.removeEventListener("scroll", handleScroll)
    }
  }, [chats])

  useEffect(() => {
    const messageInput = document.getElementById("messageInput")
    messageInput.focus()
  },[])
  return (
    <section className="mx-auto flex w-full max-w-[60%] flex-col rounded">
      {/* Chat */}
      <div
        className="flex h-[20vh] flex-grow flex-col gap-2 overflow-auto p-2"
        id="chatContainer"
      >
        {chats.length === 0 && (
          <div className="w-full h-full  flex flex-col justify-center content-center">
            <h1 className="text-center text-xl font-bold text-foreground">DocTalker</h1>
            <p className="text-center text-foreground font-bold">How can I help you today?</p>
          </div>
        )}

        {chats.map((chat, index) => (
          <>
            <UserMessage key={index + Date.now()} message={chat.user} />
            <BotMessage
              key={index}
              message={chat.bot}
              requesting={requesting}
            />
          </>
        ))}
      </div>

      <form className="flex shrink-0 gap-1 border-t px-2 py-3">
        <input
          type="text"
          id="messageInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Let's discuss..."
          className="h-12 flex-grow rounded-full border bg-background px-4 text-foreground outline-none focus:border-primary"
        />

        {requesting ? (
          <button className={`text-2xl text-primary`} onClick={stop}>
            <FaRegStopCircle />
          </button>
        ) : (
          <button
            className={`${disabled ? "opacity-50" : ""} text-2xl text-primary`}
            onClick={handleOnclick}
            disabled={disabled}
          >
            <AiOutlineSend />
          </button>
        )}
      </form>
    </section>
  )
}

export default ChatContainer
