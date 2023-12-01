import React, { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import useUploadDocument from "../hooks/useUploadDocument";

const UploadDocument = () => {
  const {
    file,
    fileInfo,
    fileURL,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleChange,
  } = useUploadDocument();




  return (
    <form
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="flex w-[80%] flex-col items-center gap-2 rounded bg-background p-4  shadow-md"
    >
      <input
        type="file"
        name="file"
        accept=".pdf,.txt,.docx"
        className="hidden"
        onChange={handleChange}
        id="file"
      />
      <h1 className="text-center font-bold">{fileInfo}</h1>
      <label
        htmlFor="file"
        className="cursor-pointer rounded bg-primary px-6 py-2 text-primary-foreground"
      >
        <FaCloudUploadAlt className="mr-2 inline-block" />
        Upload
      </label>
      <p className="text-[12px]">Supported files: .txt,.pdf,.docx</p>
      
    </form>
  );
};

export default UploadDocument;
