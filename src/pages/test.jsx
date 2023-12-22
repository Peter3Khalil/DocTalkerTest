import React, { useState } from 'react'
import { useEffect } from 'react'
import { deleteAccount, processPdf, query, signup, updateAccount, uploadPdf } from '../utils/apis'
//email:exma@gmail.com
//password:s2s22ss6s
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0ZjAwM2I0MGEyNjI4MDlkOWYyNzAiLCJpYXQiOjE3MDMyMTEwMTEsImV4cCI6MTcwMzM4MzgxMX0.ynYJdaAL4t7xlGKmF0WatBd-V76hFYpMB02lGywaZ3I"
const test = () => {
    const [file, setFile] = useState(null)
    const handleOnChange =  (e) => {
        setFile(e.target.files[0])
    }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = await uploadPdf({ token, file })
   const res =  await processPdf({ token, chatId: data.chatId })
    console.log(data.chatId)
    console.log(res)
  }

  useEffect(()=>{
    query({ token ,chatId:"6584f7aca675764b2589cd21",query:"give me summrization about this pdf"}).then(res=>{console.log(res)})
  },[])
  return (
    <div>
        <h1>test</h1>
        {/* Form to upload file */}
        <form onSubmit={handleOnSubmit}>
            <input type="file" name="file" onChange={handleOnChange}/>
            <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default test