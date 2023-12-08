import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CiMenuFries } from "react-icons/ci"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { FaEye, FaEyeSlash } from "react-icons/fa"

import { open } from "../redux/slices/isSidebarOpened"
import { dark, light } from "../redux/slices/themeSlice"
import { hideDocument, showDocument } from "../redux/slices/isDocumentOpened"
const Header = () => {
  const dispatch = useDispatch()
  const { mode } = useSelector((state) => state.theme)
  const { isDocumentOpened } = useSelector((state) => state.isDocumentOpened)
  return (
    <header className="flex h-10 w-full shrink-0 items-center justify-between border-b px-4 dark:border-foreground/10">
      <h1 className="hidden text-xl font-bold md:block">DocTalker</h1>

      <button className="md:hidden" onClick={() => dispatch(open())}>
        <CiMenuFries className="rotate-180 text-foreground" />
      </button>
      <button className="text-md font-bold md:hidden">+ New chat</button>
      <div className="flex gap-2">
        {mode === "light" ? (
          <MdDarkMode
            className="cursor-pointer text-lg text-foreground"
            onClick={() => dispatch(dark())}
          />
        ) : (
          <MdLightMode
            className="cursor-pointer text-lg text-foreground"
            onClick={() => dispatch(light())}
          />
        )}
        {isDocumentOpened ? (
          <FaEyeSlash
            className="cursor-pointer text-lg"
            onClick={() => dispatch(hideDocument())}
          />
        ) : (
          <FaEye
            className="cursor-pointer text-lg"
            onClick={() => dispatch(showDocument())}
          />
        )}
      </div>
    </header>
  )
}

export default Header
