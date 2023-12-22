import React from 'react'
import  { useSelector } from 'react-redux'
import { cn } from '../../utils/helperFunctions'
const PDFViewer = () => {
  const isDocumentOpen = useSelector((state) => state.document.isOpen)
  return (
    <div
      className={cn("h-full flex-1 bg-primary", {
        hidden: !isDocumentOpen,
      })}
    ></div>
  )
}

export default PDFViewer