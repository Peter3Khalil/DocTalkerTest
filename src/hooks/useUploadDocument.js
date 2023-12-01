import React, { useEffect, useState } from "react";

const useUploadDocument = () => {
  const [file, setFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(
    "Drag and drop a file here, or click to select a file",
  );
  const [fileURL, setFileURL] = useState(null);

  const upload = (e) => {
    const file = e.target.files[0];
    const validTypes = [
      "application/pdf",
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (validTypes.includes(file.type)) {
      setFile(file);
      setFileInfo(`Uploaded file: ${file.name}`);
      setFileURL(URL.createObjectURL(file));
    } else {
      alert("Invalid file type");
    }
  };
  const handleChange = (e) => {
    upload(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    upload(e);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(file);
  }, [file]);
  return {file, fileInfo, fileURL, handleChange, handleDrop, handleDragOver, handleDragLeave};
};

export default useUploadDocument;
