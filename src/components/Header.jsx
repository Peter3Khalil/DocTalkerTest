import React, { memo } from "react"
import { useSelector,useDispatch } from "react-redux"
import { toggleSidebar } from "../redux/slices/sidebar"
import { CgProfile } from "react-icons/cg"
import { RiMenu2Fill } from "react-icons/ri"
import { MdLightMode,MdDarkMode } from "react-icons/md";
import { toggleTheme } from "../redux/slices/theme"
const Header = () => {
  const dispatch = useDispatch()
  console.log("Header")
  return (
    <header className="sticky top-0 z-[1] flex h-14 w-full shrink-0 items-center justify-between bg-accent/95 px-4">
      <div className="flex items-center gap-2">
        <button className="text-2xl" onClick={() => dispatch(toggleSidebar())}>
          <RiMenu2Fill />
        </button>
        <h1 className="text-xl font-bold">DocTalker</h1>
      </div>
      <div className="relative flex items-center gap-3">
        <ThemeSwitcher />
        <button className="relative text-2xl  md:hidden" title="Profile">
          <CgProfile />
        </button>
      </div>
    </header>
  )
}

const ThemeSwitcher = () => {
  const mode = useSelector(state => state.theme.mode)
  const dispatch = useDispatch()
  console.log("ThemeSwitcher")

  return (
    <button
      className="relative text-2xl"
      title="Toggle Theme"
      onClick={() => dispatch(toggleTheme())}
    >
      {
        mode =="light"?<MdLightMode />:<MdDarkMode />
      }
    </button>
  )
}
export default memo(Header)
