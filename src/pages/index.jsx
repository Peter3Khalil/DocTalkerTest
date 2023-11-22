import clsx from "clsx";
import React, { use, useEffect, useRef, useState } from "react";
import { IoMdSend, IoMdMenu } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import TypeWriter from "../components/TypeWriter";

const className = {
  messageBox: "w-fit max-w-[75%] break-words rounded-md p-3",
};

const Home = () => {
  const [userMessages, setUserMessages] = useState([]);
  const inputRef = React.useRef(null);
  const isDone = useSelector((state) => state.typingDone.isDone);
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      handleOnclick();
    }
  };

  const handleOnclick = (e) => {
    //set user message
    setUserMessages([...userMessages, inputRef.current.value]);
    //set bot message
    //clear input
    inputRef.current.value = "";
    console.log(userMessages);
  };

  let chats = userMessages.map((message, index) => (
    <Chat userMessage={message} key={index} />
  ));
  return (
    <div className="flex h-screen w-full flex-col text-foreground">
      {/* Top */}
      <section className="flex h-16 w-full items-center justify-between bg-background px-2 shadow-sm">
        <IoMdMenu className="cursor-pointer bg-transparent text-2xl" />
        <h1>New Chat</h1>
        <IoEyeSharp className="cursor-pointer bg-transparent text-2xl" />
        {/* Top */}
      </section>

      {/* Middle */}
      <section className="flex h-full w-full flex-col gap-3 overflow-auto p-3">
        {chats}
        {/* Middle */}
      </section>

      {/* Bottom */}
      <section className="w-full px-2 pb-3">
        <div className=" flex w-full items-center rounded-md border-2 pr-2">
          <input
            placeholder="Ask any question"
            ref={inputRef}
            onKeyDown={onSubmit}
            className="h-[40px] max-h-[200px] w-full resize-none bg-transparent px-2 outline-none"
          />
          {isDone && (
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
function Chat({ userMessage, key }) {
  const [botMessage, setBotMessage] = useState("");
  const ApiKey = "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";
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  };
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
    body: JSON.stringify(data),
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?id=1")
      .then((response) => response.json())
      .then((data) => {
        setBotMessage(data[0].title);
      })
      .catch((error) => console.log(error));
  }, [userMessage]);

  return (
    <div className="flex w-full flex-col gap-3" key={key}>
      <UserMessage userMessage={userMessage} />
      <BotMessage botMessage={botMessage} />
    </div>
  );
}
function UserMessage({ userMessage }) {
  return (
    <>
      {userMessage && (
        <div className="flex items-start gap-1">
          <div className="h-6 w-6 rounded-full bg-primary"></div>
          <div
            className={clsx(
              className.messageBox,
              "bg-primary text-primary-foreground",
            )}
          >
            {userMessage}
          </div>
        </div>
      )}
    </>
  );
}
function BotMessage({ botMessage }) {
  return (
    <>
      {botMessage && (
        <div className="flex flex-row-reverse items-start gap-1">
          {/* Avatar */}
          <div className="h-6 w-6 rounded-full bg-foreground/10"></div>
          <div  className={clsx(className.messageBox, "bg-foreground/10 ")}>
            <TypeWriter message={botMessage} speed={20}/>
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
