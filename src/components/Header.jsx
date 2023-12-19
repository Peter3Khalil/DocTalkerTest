import React, { memo } from "react"
import { useSelector,useDispatch } from "react-redux"
import { CgProfile,MdLightMode,MdDarkMode,RiMenu2Fill } from "./shared/Icons"
import { toggleSidebar } from "../redux/slices/sidebar"
import { toggleTheme } from "../redux/slices/theme"
import Logo from "./shared/Logo"
const Header = () => {
  const dispatch = useDispatch()
  console.log("Header")
  return (
    <header className="sticky top-0 z-[1] flex h-14 w-full shrink-0 items-center justify-between border-b dark:border-foreground/20 px-4">
      <div className="flex items-center gap-2">
        <button className="text-2xl" onClick={() => dispatch(toggleSidebar())}>
          <RiMenu2Fill />
        </button>
        <h1 className="text-xl">

        <Logo/>
        </h1>
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
