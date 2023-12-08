import React from "react"
import { useDispatch } from "react-redux"
import { hideDocument } from "../redux/slices/isDocumentOpened"
import { IoEyeOff } from "react-icons/io5";

const PdfViewer = () => {
  const dispatch = useDispatch()
  const url = "https://doctalker-app.s3.amazonaws.com/Lecture_2_Search.pdf3"
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex h-14 justify-end shrink-0 border-b px-3">
        <button className="text-xl flex gap-1 items-center" onClick={()=>dispatch(hideDocument())}>
          <IoEyeOff/>
          <p className="text-[12px] font-bold">hide</p>
        </button>
      </div>
      <iframe src={url} className="h-full w-full"></iframe>
    </div>
  )
}

export default PdfViewer
