import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const PdfViewer = ({url="https://doctalker-app.s3.amazonaws.com/Simple%20Gantt%20chart1.xlsx3"}) => {
  const { isDocumentOpened } = useSelector((state) => state.isDocumentOpened)
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div
    className="absolute left-0 top-0 z-20 h-full w-full lg:static"
    style={{ display: isDocumentOpened ? "block" : "none" }}
  >
    {isLoading && <div className="w-full h-full bg-background text-foreground flex justify-center items-center">Loading...</div>}

    <iframe
      onLoad={() => setIsLoading(false)}
      sandbox="allow-scripts allow-same-origin"
      src={`https://docs.google.com/gview?url=${url}&embedded=true`}
      style={{
        opacity: isLoading ? "0" : "100%",
      }}
      className="h-full w-full transition-all duration-1000 ease-in-out lg:static"
    ></iframe>
  </div>
  )
}

export default PdfViewer