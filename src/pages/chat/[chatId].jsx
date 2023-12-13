import { useRouter } from "next/router"
import React, { useEffect, useRef } from "react"
import { useSelector,useDispatch } from "react-redux"
import DashboardLayout from "../../components/DashboardLayout"
import cn from "../../utils/cn"
import { showDocument ,hideDocument} from "../../redux/slices/isDocumentOpened"

const SingleChat = () => {
  const isDocumentOpened = useSelector((state) => state.isDocumentOpened.isDocumentOpened)
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
            if(entry.target.id === "chat"){
              const chatTap = document.querySelector("#chatTap")
              chatTap.classList.add("visible")
            }else{
              document.querySelector("#chatTap").classList.remove("visible")
              const pdfTap = document.querySelector("#pdfTap")
              pdfTap.classList.add("visible")
            }
            console.log("Visible child:", entry.target.id)
          }
        })
      },
      { root: mainContainer, threshold: 0.5 }
    )

    children.forEach((child) => observerRef.current.observe(child))

    return () => {
      if (observerRef.current) {
        children.forEach((child) => observerRef.current.unobserve(child))
      }
    }
  }, [])
  const goToChat = ()=>{
    const mainContainer = document.querySelector("#main")
    console.log(mainContainer.children[0].offsetWidth)
    console.log(mainContainerRef.current.offsetWidth)
    mainContainerRef.current.scrollTo({left:0,behavior:"smooth"})
  }
  const  goToPDF = ()=>{
    console.log(mainContainerRef.current.offsetWidth)

    mainContainerRef.current.scrollTo({left:mainContainerRef.current.offsetWidth,behavior:"smooth"})
  }
  return (
    <DashboardLayout>
      <nav className="flex items-center w-full h-10 mb-1 shrink-0 lg:hidden">
        <div id="chatTap" onClick={goToChat} className="flex items-center justify-center w-full h-full px-4 border-r cursor-pointer bg-background text-foreground dark:border-foreground/30">Chat</div>
        <div id="pdfTap" onClick={goToPDF} className="flex items-center justify-center w-full h-full px-4 cursor-pointer bg-background text-foreground dark:border-foreground/30">PDF</div>
      </nav>
      <main id="main" ref={mainContainerRef} className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory lg:snap-none lg:overflow-hidden scrollContainer">
        {/* Chat */}
        <section
        id="chat"
          className={cn(
            "h-full min-w-full snap-start overflow-y-auto bg-muted lg:min-w-[50%] lg:max-w-[100%] lg:shrink-0",
            {
              "lg:w-full": !isDocumentOpened,
            },
          )}
        >
          <div
            className={cn("mx-auto h-full w-full  bg-purple-400", {
              "lg:w-[70%]": !isDocumentOpened,
            })}
          >
            <div className="w-full h-full bg-primary"></div>
            <div className="w-full h-[400vh] bg-black"></div>
          </div>
        </section>

        {/* PDF */}
        {isDocumentOpened && (
          <section id="pdf" className="h-full min-w-full snap-start bg-purple-300 lg:min-w-[50%] lg:max-w-[100%] lg:shrink-0">
            PDF
          </section>
        )}
      </main>
    </DashboardLayout>
  )
}

export default SingleChat
