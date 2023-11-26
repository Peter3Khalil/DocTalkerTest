import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
const Body = () => {
  const previewPdf = useSelector((state) => state.previewPdf.previewPdf);
  console.log("Body");
  return (
    <section className="relative flex h-full w-full flex-col gap-3">
      <div className="h-full w-full bg-slate-400">
        {previewPdf ? (
          <div className="h-full w-full overflow-auto">pdf</div>
        ) : (
          <div className="h-full w-full overflow-auto">Chat</div>
        )}
      </div>
      <div className="w-full px-3">
        <InputContainer />
      </div>
    </section>
  );
};

const InputContainer = memo(() => {
  console.log("InputContainer");
  const handleOnFocus = () => {
    const inputContainer = document.querySelector(".input-container");
    inputContainer.classList.add("focus");
  };
  const handleOnBlur = () => {
    const inputContainer = document.querySelector(".input-container");
    inputContainer.classList.remove("focus");
  };
  return (
    <div className="input-container flex h-16 w-full items-center gap-2 rounded-full px-3 border">
      <input
        className="peer h-full w-full rounded-full text-lg outline-none"
        placeholder="Ask any Question"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <button>
      <FaPlay className="text-2xl" onClick={()=>console.log("Peter")}/>
        </button>
    </div>
  );
});

export default Body;
