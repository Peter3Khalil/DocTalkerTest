import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import DashboardLayout from "../../components/DashboardLayout"
import { FaUser,FaRobot } from "react-icons/fa"
import cn from "../../utils/cn"
import Header from "../../components/Header"
import Form from "../../components/Form"
const url =
  "https://doctalker-app.s3.amazonaws.com/Simple%20Gantt%20chart1.xlsx3"

const SingleChat = () => {
  const [message, setMessage] = useState("")
  const isDocumentOpened = useSelector(
    (state) => state.isDocumentOpened.isDocumentOpened,
  )
  const mainContainerRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    const mainContainer = mainContainerRef.current
    const children = Array.from(mainContainer.children)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelector("#pdfTap").classList.remove("visible")
            if (entry.target.id === "chat") {
              const chatTap = document.querySelector("#chatTap")
              chatTap.classList.add("visible")
            } else {
              document.querySelector("#chatTap").classList.remove("visible")
              const pdfTap = document.querySelector("#pdfTap")
              pdfTap.classList.add("visible")
            }
          }
        })
      },
      { root: mainContainer, threshold: 0.5 },
    )

    children.forEach((child) => observerRef.current.observe(child))

    return () => {
      if (observerRef.current) {
        children.forEach((child) => observerRef.current.unobserve(child))
      }
    }
  }, [])
  const goToChat = () => {
    const mainContainer = document.querySelector("#main")
    mainContainerRef.current.scrollTo({ left: 0, behavior: "smooth" })
  }
  const goToPDF = () => {
    mainContainerRef.current.scrollTo({
      left: mainContainerRef.current.offsetWidth,
      behavior: "smooth",
    })
  }
  return (
    <DashboardLayout>
      <Header />
      <nav className="flex h-10 w-full shrink-0 items-center lg:hidden">
        <div
          id="chatTap"
          onClick={goToChat}
          className="flex h-full w-full cursor-pointer items-center justify-center border-r border-foreground/30 bg-muted px-4 text-muted-foreground"
        >
          Chat
        </div>
        <div
          id="pdfTap"
          onClick={goToPDF}
          className="flex h-full w-full cursor-pointer items-center justify-center bg-muted px-4 text-muted-foreground"
        >
          PDF
        </div>
      </nav>

      <main
        id="main"
        ref={mainContainerRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-scroll bg-accent text-accent-foreground lg:snap-none lg:overflow-hidden"
      >
        {/* Chat */}
        <section
          id="chat"
          className={cn(
            "h-full min-w-full flex-1 snap-start flex flex-col overflow-y-auto bg-muted lg:min-w-[50%] lg:max-w-[100%]  lg:shrink-0",
            {
              "lg:w-full": !isDocumentOpened,
            },
          )}
        >
          <div
            className={cn("mx-auto flex h-full w-full flex-col gap-3 p-3", {
              "lg:w-[60%]": !isDocumentOpened,
            })}
          >
            <div className="w-full h-full overflow-auto pr-2">
              {Array.from({ length: 70 }).map((_, i) => (
                 <MessageBox key={i} message="Hello" isBot={i%2===0}/>
              ))}
            </div>
           <Form value={message} setValue={setMessage}/>
          </div>
        </section>

        {/* PDF */}

        <section
          id="pdf"
          className={cn(
            "h-full min-w-full snap-start lg:min-w-[50%] lg:max-w-[100%] lg:shrink-0",
            {
              hidden: !isDocumentOpened,
            },
          )}
        >
          <iframe
            sandbox="allow-scripts allow-same-origin"
            src={`https://docs.google.com/gview?url=${url}&embedded=true`}
            className="h-full w-full"
          ></iframe>
        </section>
      </main>
    </DashboardLayout>
  )
}

const MessageBox = ({ message = "", isBot = false }) => {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-2 rounded bg-inherit p-3 text-inherit",
        {
          "bg-background text-foreground": isBot,
        }
      )}
    >
      {isBot?<FaRobot className="shrink-0 text-xl"/>:<FaUser className="shrink-0 text-xl" />}
      <div className="flex flex-grow flex-col ">
        <p className="text-sm font-bold capitalize">{isBot?"DocTalker":"You"}</p>
        <p className="break-all text-sm">
          {message}
        </p>
      </div>
    </div>
  )
}
export default SingleChat
