import React, { useEffect, useRef, useState } from "react"
import { BiSolidSend } from "react-icons/bi"

const Form = ({value,setValue}) => {
  const textareaRef = useRef()

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleOnFocus = (e) => {
    const inputContainer = document.querySelector(".inputContainer")
    inputContainer.classList.add("border-primary")
  }
  const handleOnBlur = (e) => {
    const inputContainer = document.querySelector(".inputContainer")
    inputContainer.classList.remove("border-primary")
  }
  const clear = () => {
    setValue("")
  }
  useEffect(() => {
    textareaRef.current.focus()
  }, [])
  return (
    <form className="min-h-[4rem] w-full shrink-0 border-t px-3 py-4">
      <div className="inputContainer flex h-full w-full items-center rounded border">
        <div className="flex h-full w-full pr-2">
          <textarea
            className="h-full w-full resize-none bg-inherit px-3 py-2 outline-none"
            placeholder="Type a message"
            ref={textareaRef}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            value={value}
            id="textarea"
          />
          <button
            type="button"
            className={`${value ? "block" : "hidden"}`}
            onClick={clear}
          >
            ❌
          </button>
        </div>

        <button
          type="button"
          className={`${
            value.trim() ? "" : "opacity-50"
          } h-full rounded-ee rounded-se bg-primary px-2 text-3xl text-primary-foreground`}
          disabled={!value.trim()}
        >
          <BiSolidSend />
        </button>
      </div>
    </form>
  )
}

export default Form
