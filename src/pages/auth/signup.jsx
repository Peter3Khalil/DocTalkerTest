import React, { useRef, useState } from "react"
import Logo from "../../components/shared/Logo"
import Button from "../../components/shared/Button"
import Link from "next/link"
import {
  IoEyeOff,
  IoEyeSharp,
  AiOutlineLoading3Quarters,
} from "../../components/shared/Icons"
import { cn } from "../../utils/helperFunctions"
import { signup } from "../../utils/apis"
import { useRouter } from "next/router"

//TODO: Validate form
//TODO: Check loading state

const Signup = () => {
  const formRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [errorMsg, setErrorMsg] = useState(null)
  const onSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = Object.fromEntries(new FormData(formRef.current))
    signup(data)
      .then((res) => {
        if (res.message) {
          setErrorMsg(res.message)
          setIsLoading(false)
          return
        }
        setIsLoading(false)
        router.push("/auth/login")
      })
      .catch((err) => {
        setIsLoading(false)
        setErrorMsg(err.response.data.message)
      })
  }
  return (
    <main className="flex h-full w-full items-center justify-center px-6">
      <div className="flex w-[400px] flex-col items-center gap-4 rounded p-2 ">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-bold">
            Welcome to <Logo />
          </h1>
          <p className="text-gray-600">Please signup to continue</p>
        </div>

        <form
          className="flex w-full flex-col items-center gap-4"
          onSubmit={onSubmit}
          ref={formRef}
        >
          <InputField
            name={"firstName"}
            text="First Name"
            id="fname"
            placeholder="FirstName"
          />
          <InputField
            name="lastName"
            text="Last Name"
            id="lname"
            placeholder="Last Name"
          />
          <InputField
            type="email"
            text="Email"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            errorMsg={errorMsg}
          />
          <PasswordField />
          {isLoading ? (
            <Button
              className={"cursor-not-allowed bg-muted text-muted-foreground"}
            >
              <AiOutlineLoading3Quarters className="animate-spin" />
            </Button>
          ) : (
            <Button type="submit">Signup</Button>
          )}
        </form>
        <Link href={"/auth/login"}>
            <p className="text-primary text-md">Already have an account? <span className="font-bold">Login</span></p>
        </Link>
      </div>
    </main>
  )
}
const InputField = ({
  type = "text",
  text,
  id,
  placeholder,
  name,
  required = true,
  children,
  onChange,
  errorMsg,
  ...props
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <label
        htmlFor={id}
        className="block w-full cursor-pointer text-md capitalize text-foreground/70"
      >
        {text}
      </label>
      <div className="relative flex w-full flex-col">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={cn(
            "w-full rounded border p-2  outline-none focus:ring-1 focus:ring-primary",
            {
              "pr-10": type == "password",
            },
          )}
          required={required}
          {...props}
          name={name}
          onChange={onChange}
        />
        {errorMsg && (
          <p className="mt-1 text-sm font-semibold text-destructive">
            {errorMsg}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}

const PasswordField = ({ onChange }) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <InputField
      type={showPassword ? "text" : "password"}
      text="Password"
      id="password"
      placeholder="Password"
      name="password"
      onChange={onChange}
    >
      <button
        title={showPassword ? "Hide" : "Show"}
        type="button"
        onClick={togglePassword}
        className="absolute right-2 top-[50%] translate-y-[-50%] text-foreground/70 hover:text-foreground/90"
      >
        {showPassword ? <IoEyeOff /> : <IoEyeSharp />}
      </button>
    </InputField>
  )
}
export default Signup
