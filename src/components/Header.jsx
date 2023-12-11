import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { IoEyeOff } from "react-icons/io5"
import { MdRemoveRedEye } from "react-icons/md"
import { hideDocument, showDocument } from "../redux/slices/isDocumentOpened"

const Header = () => {
  const { isDocumentOpened } = useSelector((state) => state.isDocumentOpened)
  const dispatch = useDispatch()
  return (
    <header className="flex h-14 w-full shrink-0 items-center justify-between border-b pr-4">
      <h1 className="text-lg font-bold">DocTalker</h1>
      <div>
        {isDocumentOpened ? (
          <IoEyeOff
            className="cursor-pointer text-2xl text-foreground"
            onClick={() => dispatch(hideDocument())}
          />
        ) : (
          <MdRemoveRedEye
            className="cursor-pointer text-2xl text-foreground"
            onClick={() => dispatch(showDocument())}
          />
        )}
      </div>
    </header>
  )
}

export default Header
