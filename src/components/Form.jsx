import autosize from "autosize";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";

const Form = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef();

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);
  console.log("Form");
  return (
    <form className="w-full p-4">
      <div className="flex h-full w-full items-center rounded">
        <textarea
          ref={textareaRef}
          className="max-h-[150px] flex-1 flex-grow resize-y rounded-es rounded-ss border-2 bg-transparent p-2 text-foreground outline-none focus:border-primary"
          placeholder="Type a message"
          value={value}
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          className="h-full flex-shrink-0 rounded-ee rounded-se bg-primary p-2 disabled:opacity-50"
          disabled={!value.trim()}
        >
          <BiSolidSend className="text-2xl text-primary-foreground" />
        </button>
      </div>
    </form>
  );
};

export default Form;
