import React, { useEffect, useRef, useState } from "react"
import { FaCloudUploadAlt, FaFileUpload } from "react-icons/fa"
import { IoIosSettings } from "react-icons/io"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import cn from "../utils/cn"
import { useRouter } from "next/router"
export const btnStyle =
  "px-4 py-2 text-lg font-bold text-center rounded cursor-pointer hover:bg-primary/80  bg-primary text-primary-foreground"
const UploadFile = () => {
  const [file, setFile] = useState(null)
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const supportedFileTypes = ["pdf"]
  const fileRef = useRef(null)
  const notify = () => toast.success('File Uploaded and processed successfully', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleOnsubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    setIsProcessing(true)
    try {
      const res = await fetch("http://localhost:5000/upload/upload", {
        method: "POST",
        headers:{
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5MWQ4NTZlMTg1Y2FhYTlkZWRmYzAiLCJpYXQiOjE3MDI0MzY2NzEsImV4cCI6MTcwMjYwOTQ3MX0.kC3rSzJffb77JIVO1Vk1CS1lZ_Xn1Pegkf26gM0z9p4"
        },
        body: formData,
      })
      const data = await res.json()
      console.log(data)
      if(data.error){
        setIsProcessing(false)
        toast.error(data.error, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          return
      }
      if (data) {
        const response = await fetch("http://localhost:5000/upload/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5MWQ4NTZlMTg1Y2FhYTlkZWRmYzAiLCJpYXQiOjE3MDI0MzY2NzEsImV4cCI6MTcwMjYwOTQ3MX0.kC3rSzJffb77JIVO1Vk1CS1lZ_Xn1Pegkf26gM0z9p4"

          },
          body: JSON.stringify({ id: data.chatId }),
        })
        const result = await response.json()
        if (result) {
          setIsProcessing(false)
          notify()
          setTimeout(() => {
            router.push(`/chat/${data.chatId}`)
          }, 2000)
          setFile(null)
        }
      }
    } catch (error) {
      console.log(error.message)
      setIsProcessing(false)
    }
  }
  return (
    <main className="flex items-center justify-center w-full h-full px-4">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      {isProcessing && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-muted/50">
          <div className="flex h-[400px] w-[400px] flex-col items-center justify-center rounded border bg-background">
            <IoIosSettings className="text-4xl leading-none animate-spin text-primary" />
            <p className="text-xl font-bold text-foreground">Processing</p>
          </div>
        </div>
      )}

      {!isProcessing && (
        <div className="flex h-[400px] w-full flex-col items-center justify-center gap-4 rounded border-2 border-accent-foreground/20 border-dashed bg-muted/20 p-6 md:w-[400px]">
          {file ? (
            <FaFileUpload className="text-4xl leading-none text-primary" />
          ) : (
            <FaCloudUploadAlt className="text-4xl leading-none text-primary" />
          )}
          <p className="w-full overflow-hidden text-xl font-bold text-center text-ellipsis whitespace-nowrap text-foreground">
            {file ? file.name : "Choose a file to chat with"}
          </p>
          <form className="flex items-center gap-2" onSubmit={handleOnsubmit}>
            <input
              id="file"
              type="file"
              accept=".pdf,.txt,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
            {file && (
              <button type="submit" className={btnStyle}>
                Upload
              </button>
            )}
            <label
              htmlFor="file"
              className={cn(btnStyle, {
                "bg-background text-foreground/50 hover:bg-muted hover:text-muted-foreground":
                  file,
              })}
            >
              {file ? "Change" : "Choose a file"}
            </label>
          </form>
          <div className="flex items-center gap-1">
            <span className="text-sm text-foreground/70">
              Supported file:
            </span>
            <ul className="flex items-center gap-2 text-[10px] ">
              {supportedFileTypes.map((type) => (
                <li key={type} className="flex items-center justify-center px-2 py-1 uppercase rounded bg-muted">
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  )
}

export default UploadFile
