import React, { useCallback, useRef, useState } from "react"
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
import formFields from "../../../public/formFields"
import InputField, { PasswordField } from "../../components/InputField"
import { useForm } from "react-hook-form"
import { SignupSchema } from "../../utils/validationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { DevTool } from "@hookform/devtools"

//TODO: Validate form
//TODO: Check loading state

const Signup = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(null)
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "onTouched",
  })
  const { errors, isValid } = formState
  const onSubmit = (data) => {
    setIsLoading(true)
    signup(data).then((res) => {
      setIsLoading(false)
      if(res.message){
        setServerError(res.message)
        return
      }
      setServerError(null)
      localStorage.setItem("token", res.token)
      router.push("/")
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
        {
          !isLoading&&
        <p className="text-sm text-destructive">{serverError}</p>
        }
        <form
          className="flex w-full flex-col items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {formFields.map((field) => {
            if (field.type === "password")
              return (
                <PasswordField
                  register={register}
                  label={field.label}
                  name={field.name}
                  errorMsg={errors[field.name]?.message}
                  id={field.id}
                  placeholder={field.placeholder}
                />
              )
            return (
              <InputField
                register={register}
                label={field.label}
                name={field.name}
                errorMsg={errors[field.name]?.message }
                id={field.id}
                placeholder={field.placeholder}
              />
            )
          })}
          <Button
            type="submit"
            className={cn("w-full", {
              "cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground":
                !isValid || isLoading,
            })}
            disabled={!isValid}
          >
           {isLoading?<AiOutlineLoading3Quarters className="animate-spin text-2xl"/>:"Signup"} 
          </Button>
        </form>

        <Link href={"/auth/login"}>
          <p className="text-md text-primary">
            Already have an account? <span className="font-bold">Login</span>
          </p>
        </Link>
      </div>
    </main>
  )
}

export default Signup
