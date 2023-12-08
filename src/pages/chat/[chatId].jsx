import React, { use, useEffect, useRef, useState } from "react"
import LayoutOfLargeScreen from "../../components/LayoutOfLargeScreen"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { CiMenuKebab } from "react-icons/ci"
import { BiSolidSend } from "react-icons/bi"
import { MdClear } from "react-icons/md"
import { RxAvatar } from "react-icons/rx"
import { MdRemoveRedEye } from "react-icons/md"

import Form from "../../components/Form"
import PdfViewer from "../../components/PdfViewer"
import { FaRobot } from "react-icons/fa6"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { showDocument } from "../../redux/slices/isDocumentOpened"
import CodeBlock from "../../components/CodeBlock"

const SingleChat = () => {
  const [searchOpened, setSearchOpened] = useState(false)
  const isDocumentOpened = useSelector(
    (state) => state.isDocumentOpened.isDocumentOpened,
  )

  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (searchOpened) document.getElementById("search").focus()
  }, [searchOpened])

  const router = useRouter()
  const { chatId } = router.query
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [chatId])
  return (
    <LayoutOfLargeScreen>
      {loading ? (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <AiOutlineLoading3Quarters className={`animate-spin text-6xl`} />
        </div>
      ) : (
        <div className="flex h-full w-full bg-background">
          <section className="flex h-full w-full flex-grow-0 flex-col gap-3">
            <header className="flex h-14 w-full shrink-0 items-center justify-between border-b px-3">
              {searchOpened ? (
                <>
                  <input
                    type="text"
                    className="h-full w-full bg-transparent outline-none"
                    placeholder="Search"
                    id="search"
                  />
                  <button
                    className="w-12 text-lg"
                    onClick={() => setSearchOpened(false)}
                  >
                    ❌
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <FaRobot className="text-2xl" />
                    <h1 className="w-72 overflow-hidden text-ellipsis font-semibold">
                      {"Chat" + chatId}
                    </h1>
                  </div>
                  <div className="flex items-center gap-6">
                    <button
                      title="Search in chat"
                      onClick={() => setSearchOpened(true)}
                    >
                      🔍
                    </button>
                    <button
                      className={`${
                        isDocumentOpened ? "hidden" : ""
                      } flex items-center gap-1 text-2xl`}
                      onClick={() => dispatch(showDocument())}
                    >
                      <MdRemoveRedEye />
                      <p className="text-[10px] font-bold">View Document</p>
                    </button>
                    <button title="Menu">
                      <CiMenuKebab />
                    </button>
                  </div>
                </>
              )}
            </header>

            {/* Chats */}
            <div
              className={`${
                isDocumentOpened ? "w-full" : "w-full px-32"
              } m-auto flex h-full flex-col overflow-auto`}
            >
              <div className="flex h-full w-full flex-col gap-2 overflow-auto p-3">
                <MessageBox message="loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem" />
                <MessageBox
                  isBot={true}
                  message="loremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloreloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
                />
              </div>
              <Form value={value} setValue={setValue} />
            </div>
          </section>

          {/* PDF */}
          <section
            className={`${
              isDocumentOpened ? "" : "hidden"
            } h-full w-full flex-grow-0`}
          >
            <PdfViewer />
          </section>
        </div>
      )}
    </LayoutOfLargeScreen>
  )
}
const MessageBox = ({ message, isBot = false }) => {
  //write code javascript
  const code = `
  import { createSlice } from "@reduxjs/toolkit";

  const isDocumentOpenedSlice = createSlice({
      name: "isDocumentOpened",
      initialState: {
          isDocumentOpened:true
      },
      reducers: {
          showDocument: (state) => {
              state.isDocumentOpened = true;
          },
          hideDocument: (state) => {
              state.isDocumentOpened = false;
          }
      }
  });
  
  export const {  showDocument,hideDocument} = isDocumentOpenedSlice.actions;
  export default isDocumentOpenedSlice.reducer;

  `
  return (
    <div
      className={`${
        isBot ? "bg-accent/30" : ""
      } flex w-full items-start gap-2 rounded border px-2 py-3`}
    >
      {isBot ? (
        <FaRobot className="shrink-0 text-lg" />
      ) : (
        <RxAvatar className="shrink-0 text-lg" />
      )}
      <div className="flex w-full flex-col gap-3">
        <h1 className="font-bold leading-none">
          {isBot ? "DocTalker" : "You"}
        </h1>
        <p className="break-all text-sm font-medium">
          {/* {message ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."} */}
          <CodeBlock
            language={"javascript"}
            code={code}
          />
        </p>
      </div>
    </div>
  )
}
export default SingleChat
