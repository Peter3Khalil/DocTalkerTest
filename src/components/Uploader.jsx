import React, { useEffect, useState } from "react"
import { FaCloudUploadAlt, FaFilePdf, MdDeleteForever } from "./shared/Icons"
import Button from "./shared/Button"
import { cn } from "../utils/helperFunctions"

//TODO: Send file to server
//TODO: Check if file handwritten => if yes then show a message that "Cannot processing this file"
const Uploader = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState({
    sizeError: false,
    typeError: false,
  })
  const MaxFileSize = 5 // 5MB

  const handleOnchange = (e) => {
    if (!e.target.files[0]) return
    if (!validateFile(e.target.files[0])) return

    setFile(e.target.files[0])
  }

  const handleOnDragOver = (e) => {
    e.preventDefault()
  }
  const handleOnDrop = (e) => {
    e.preventDefault()
    if (!e.dataTransfer.files[0]) return
    if (!validateFile(e.dataTransfer.files[0])) return

    setFile(e.dataTransfer.files[0])
  }
  const validateFile = (file) => {
    setError({
      sizeError: false,
      typeError: false,
    })
    if (file.type !== "application/pdf") {
      setError({ typeError: true })
      return false
    } else if (file.size > MaxFileSize * 1024 * 1024) {
      setError({ sizeError: true })
      return false
    }
    return true
  }

  useEffect(() => {
    if (error.sizeError || error.typeError) {
      setFile(null)
    }
    
  }, [error])

  return (
    <form className="flex w-full flex-col items-center gap-3">
      <input
        type="file"
        className="hidden"
        accept="application/pdf"
        onChange={handleOnchange}
        id="input"
      />
      <label
        onDragOver={handleOnDragOver}
        onDrop={handleOnDrop}
        htmlFor="input"
        className="flex w-full cursor-pointer flex-col items-center gap-2 rounded border-2 border-dashed border-primary bg-accent p-6 text-accent-foreground dark:border-foreground/50"
      >
        <FaCloudUploadAlt className="text-4xl text-primary" />
        <p className="text-md font-semibold text-accent-foreground">
          Drag and Drop here
        </p>
        <div className="flex w-full items-center gap-2">
          <Line />
          <span className="text-sm">or</span>
          <Line />
        </div>
        <h1 className="text-lg font-bold text-primary dark:text-accent-foreground">
          Browse
        </h1>
      </label>
      {/* Hints */}
      <div className="flex w-full flex-col items-center">
        <p
          className={cn(
            "text-xs text-accent-foreground transition-colors duration-300 ease-in-out",
            {
              "text-destructive dark:text-red-400": error.sizeError,
            },
          )}
        >
          File size should be less than{" "}
          <span className="font-bold">{MaxFileSize}MB</span>
        </p>
        <p
          className={cn(
            "text-xs text-accent-foreground transition-colors duration-300 ease-in-out",
            {
              "text-destructive dark:text-red-400": error.typeError,
            },
          )}
        >
          Supported Type: <span className="font-bold">PDF</span>
        </p>
      </div>

      {/* File */}
     {file &&<FileComponent file={file} setFile={setFile}/>}
      <Button
        disabled={!file}
        className={"disabled:bg-muted disabled:text-muted-foreground"}
      >
        Upload
      </Button>
    </form>
  )
}
const Line = () => {
  return <div className="h-[1px] w-full rounded bg-accent-foreground/20"></div>
}

const FileComponent = ({ file,setFile }) => {
  return (
    <div className={cn("flex transition-all duration-300 ease-in-out w-full items-center justify-between rounded bg-accent p-2 text-sm")}>
      <div className="flex items-center gap-1">
        <FaFilePdf className="text-lg leading-none text-primary" />
        <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap break-all leading-none text-accent-foreground md:w-[150px]">
          {file.name}
        </p>
      </div>
      <button
      type="button"
        onClick={() => setFile(null)}
        className="text-xs text-destructive dark:text-red-400"
      >
        <MdDeleteForever className="text-lg leading-none" />
      </button>
    </div>
  )
}

export default Uploader
