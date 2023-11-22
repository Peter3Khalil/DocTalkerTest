import clsx from "clsx";
import React, { use, useEffect, useRef, useState } from "react";
import { IoMdSend, IoMdMenu } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

import TypeWriter from "../components/TypeWriter";
import ChatContainer from "../components/ChatContainer";

const Home = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [heightOfContainer, setHeightOfContainer] = useState(0);
  const inputRef = useRef(null);
  const isDone = useSelector((state) => state.typingDone.isDone);
  const [showSubmitBtn, setShowSubmitBtn] = useState(true);
  const onSubmit = (e) => {
    if (e.key === "Enter" && isDone && inputRef.current.value) {
      handleOnclick();
    }
  };

  const handleOnclick = (e) => {
    if (inputRef.current.value) {
      setUserMessages([...userMessages, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  let chats = userMessages.map((message, index) => (
    <ChatContainer
      userMessage={message}
      key={index}
      setShowSubmitBtn={setShowSubmitBtn}
      setHeightOfContainer={setHeightOfContainer}
    />
  ));

  const containerRef = useRef(null);
  const handleScroll = (e) => {
    let scrollHeight = containerRef.current.scrollHeight;
    containerRef.current.scrollTo({ top: scrollHeight, behavior: "smooth" });
  };
  useEffect(() => {
    handleScroll();
  }, [heightOfContainer]);
  return (
    <div className="flex h-[calc(100vh-60px)] md:h-screen w-full flex-col text-foreground">
      {/* Top */}
      <section className="flex h-16 w-full items-center justify-between bg-background px-2 shadow-sm">
        <IoMdMenu className="cursor-pointer bg-transparent text-2xl" />
        <h1>New Chat</h1>
        <IoEyeSharp className="cursor-pointer bg-transparent text-2xl" />
        {/* Top */}
      </section>

      {/* Middle */}
      <section
        className="flex h-full w-full flex-col gap-3 overflow-auto p-3"
        ref={containerRef}
        id="chatContainer"
      >
        {chats}
        {/* Middle */}
      </section>

      {/* Bottom */}
      <section className="w-full px-5">
        <div className=" mb-6 flex w-full items-center rounded-md border-2 pr-2">
          <input
            placeholder="Ask any question"
            ref={inputRef}
            onKeyDown={onSubmit}
            className="h-[40px] max-h-[200px] w-full resize-none bg-transparent px-2 outline-none"
          />
          {isDone && showSubmitBtn && (
            <IoMdSend
              className="cursor-pointer bg-transparent text-4xl"
              onClick={handleOnclick}
            />
          )}
        </div>
        {/* Bottom */}
      </section>
    </div>
  );
};

export default Home;
