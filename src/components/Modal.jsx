import React from "react"
import { useDispatch } from "react-redux"
import { closeModal } from "../redux/slices/modalSlice"
const Modal = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <div  className="fixed left-0  top-0 z-30 flex h-[100vh] w-[100vw] items-center justify-center bg-foreground/40 dark:bg-accent/50 md:p-0">
        <div className="absolute left-0 top-0 w-full h-full bg-inherit z-20" onClick={()=>dispatch(closeModal())}></div>
        <div className="absolute flex items-center justify-center z-20 w-full h-fit px-4">

      {children}
        </div>
    </div>
  )
}

export default Modal
