import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import ChatContainer from "./ChatContainer";
const Body = () => {
  const previewPdf = useSelector((state) => state.previewPdf.previewPdf);
  console.log("Body");
  let mes = 
"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta soluta, officia totam sint, sit quo saepe at pariatur, quod quibusdam perferendis quis explicabo provident repudiandae earum placeat corporis fuga."
return (
    <section className="flex-1 flex h-full w-full flex-col gap-3 md:pb-4">
      <div className="h-full w-full">
        {previewPdf ? (
          <div className="h-full w-full overflow-auto">pdf</div>
        ) : (
          <div className="h-full w-full overflow-auto">
            <div className="w-full h-[200vh] bg-black"></div>
            <div className="w-full h-full bg-red-500"></div>
          </div>
        )}
      </div>
      <div className="w-full h-14 px-3">
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
    <div className="input-container flex h-full w-full items-center gap-2 rounded-full border px-3">
      <input
        className="peer h-full w-full rounded-full text-lg outline-none"
        placeholder="Ask any Question"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <button>
        <FaPlay className="text-2xl" onClick={() => console.log("Peter")} />
      </button>
    </div>
  );
});

export default Body;
