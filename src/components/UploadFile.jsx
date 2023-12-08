import React, { useEffect, useRef, useState } from "react"
import { FaFileUpload } from "react-icons/fa"

const UploadFile = () => {
  const fileInputRef = useRef()
  const [fileInfo, setFileInfo] = useState(null)
  const [displayFileName, setDisplayFileName] = useState(null)

  const validateFile = (file) => {
    
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = async(e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      fileInputRef.current.files = e.dataTransfer.files
      //validateFile
      const file = e.dataTransfer.files[0]
      const fileType = file.type
      const validFileTypes = ["application/pdf", "text/plain"]
      if (validFileTypes.includes(fileType)) {
        setFileInfo(file.name)
        await handleSubmit(e)
      } else {
        alert("Invalid file type. Please select a PDF or TXT file.")
      }
    }
  }
  const handleSubmit = async (e) => {
  e.preventDefault();
  // Access files
  const file = fileInputRef.current.files[0];
  // Create a FormData instance
  const formData = new FormData();
  // Append the file to the formData
  formData.append('file', file);
  // Send the file to the server
  try {
    const response = await fetch('https://your-server.com/upload', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // If the upload was successful, clear the file input
    fileInputRef.current.value = '';
    setFileInfo(null);
    alert('File uploaded successfully');
  } catch (error) {
    console.error('Error:', error);
    alert('File upload failed');
  }
};


  const handleChange = async(e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0]
      const fileType = file.type
      const validFileTypes = ["application/pdf", "text/plain"]
      if (validFileTypes.includes(fileType)) {
        setFileInfo(file.name)
        await handleSubmit(e)
      } else {
        alert("Invalid file type. Please select a PDF or TXT file.")
      }
    }
  }
  useEffect(() => {
    if (fileInfo && fileInfo.length > 30) {
      setDisplayFileName(
        `${fileInfo.substr(0, 20)}...${fileInfo.substr(fileInfo.length - 10)}`,
      )
    } else {
      setDisplayFileName(fileInfo)
    }
  }, [fileInfo])
  return (
    <form
      className="flex flex-col items-center rounded border-[3px] border-dashed p-6 shadow-md"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      datatype="multipart/form-data"
    >
      <input
        type="file"
        className="hidden w-full"
        id="input"
        ref={fileInputRef}
        onChange={handleChange}
      />
      <label
        htmlFor="input"
        className="flex  h-[300px] w-[300px] cursor-pointer flex-col items-center justify-center gap-4 rounded"
      >
        <FaFileUpload className="text-5xl" />
        <p className="overflow-hidden text-ellipsis  whitespace-nowrap text-lg font-[700]">
          {fileInfo !== null
            ? displayFileName
            : "Click or drag and drop to upload"}
        </p>
        <ul className="flex gap-2 text-[12px] uppercase text-foreground/50">
          <li className="rounded border p-1">PDF</li>
          <li className="rounded border p-1">Txt</li>
        </ul>
      </label>
    </form>
  )
}

export default UploadFile
