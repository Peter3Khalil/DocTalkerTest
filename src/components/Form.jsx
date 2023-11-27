import autosize from "autosize";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { MdClear } from "react-icons/md";

const Form = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef();

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnkeyUp = (e) => {
    textareaRef.current.style.height = "50px";
    let height = e.target.scrollHeight;
    textareaRef.current.style.height = `${height}px`;
  };
  const handleOnFocus = (e) => {
      const inputContainer = document.querySelector(".inputContainer");
      inputContainer.classList.add("border-primary");
  }
  const handleOnBlur = (e) => {
      const inputContainer = document.querySelector(".inputContainer");
      inputContainer.classList.remove("border-primary");
  }
  const clear = ()=>{
      setValue("");
      textareaRef.current.style.height = "50px";
  }
  console.log("Form");
  return (
    <form className="flex w-full items-center p-4">
      <div className="w-full flex items-center rounded-es rounded-ss border-2 inputContainer pr-2">
        <textarea
        id="textarea"
          ref={textareaRef}
          className="h-[50px] max-h-[150px] flex-1 resize-none  bg-transparent p-2 text-foreground outline-none"
          placeholder="Type a message"
          value={value}
          onChange={handleOnChange}
          onKeyUp={handleOnkeyUp}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        ></textarea>
        <button type="button" className={`${value?"block":"hidden"}`}>
          <MdClear className="text-xl opacity-30 text-foreground" onClick={clear}/>
        </button>
      </div>
      <button
        type="button"
        className="h-full flex-shrink-0 rounded-ee rounded-se bg-primary p-2 disabled:opacity-50"
        disabled={!value.trim()}
      >
        <BiSolidSend className="text-2xl text-primary-foreground" />
      </button>
    </form>
  );
};

export default Form;
