import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { HiMenuAlt1 } from "react-icons/hi"
import { close, open } from "../redux/slices/isSidebarOpened"
import { changeTheme } from "../redux/slices/themeSlice"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { IoMdEye,IoMdEyeOff } from "react-icons/io";
import { showDocument, hideDocument } from "../redux/slices/isDocumentOpened"
const Header = ({ title = "New Chat" }) => {
  const isSidebarOpened = useSelector(
    (state) => state.isSidebarOpened.isSidebarOpened,
  )
  const isDocumentOpened = useSelector(
    (state) => state.isDocumentOpened.isDocumentOpened,
  )

  const mode = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch(close())
  }
  const openSidebar = () => {
    dispatch(open())
  }

  const show = () => {
    dispatch(showDocument())
  }
  const hide = () => {
    dispatch(hideDocument())
  }
  return (
    <header className="flex items-center justify-between w-full px-4 border-b h-14 shrink-0 bg-background text-foreground dark:border-foreground/30">
      <div className="flex w-[70%] items-center gap-2">
        <button
          type="button"
          className="text-2xl text-foreground/80"
          title={isSidebarOpened ? "Close Sidebar" : "Open Sidebar"}
          onClick={isSidebarOpened ? closeSidebar : openSidebar}
        >
          <HiMenuAlt1 />
        </button>
        <div className="relative w-[80%]">
          <h1
            className="overflow-hidden text-xl font-semibold text-clip whitespace-nowrap"
            title={title}
          >
            {title}
          </h1>
          <div className="absolute top-0 bottom-0 right-0 w-8 group-hover:from-token-surface-primary bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <button
          type="button"
          className="p-2 text-xl shrink-0 text-foreground/80"
          title="Change theme"
          onClick={() => dispatch(changeTheme())}
        >
          {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
        <button
          type="button"
          className="hidden p-2 text-xl shrink-0 text-foreground/80 lg:block"
          title={isDocumentOpened?"Hide Document":"View Document"}
          onClick={isDocumentOpened ? hide : show}
        >
          {isDocumentOpened ? <IoMdEyeOff /> : <IoMdEye />}
        </button>
      </div>
    </header>
  )
}

export default Header
