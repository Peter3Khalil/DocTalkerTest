import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ProtectedRoutes = ({children}) => {
  const [isAuth, setIsAuth] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem("token")
      if(!token){
        router.push("/auth/login")
        return
      }
      setIsAuth(true)

    }, [])
    
  return (
    <>{isAuth? children:"Redirecting..."}</>
  )
}

export default ProtectedRoutes