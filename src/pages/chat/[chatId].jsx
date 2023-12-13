import { useRouter } from "next/router"
import React, { use, useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import DashboardLayout from "../../components/DashboardLayout"
import cn from "../../utils/cn"
import { showDocument ,hideDocument} from "../../redux/slices/isDocumentOpened"

const SingleChat = () => {
  const isDocumentOpened = useSelector((state) => state.isDocumentOpened.isDocumentOpened)
  
  return (
    <DashboardLayout>
      <main className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory lg:snap-none lg:overflow-hidden scrollContainer">
        {/* Chat */}
        <section
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
          <section className="h-full min-w-full snap-start bg-purple-300 lg:min-w-[50%] lg:max-w-[100%] lg:shrink-0">
            PDF
          </section>
        )}
      </main>
    </DashboardLayout>
  )
}

export default SingleChat
