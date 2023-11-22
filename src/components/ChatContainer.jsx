import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loading } from "../redux/slices/isLoading";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import TypeWriter from "./TypeWriter";

function ChatContainer({
  userMessage,
  setShowSubmitBtn,
  key,
  setHeightOfContainer,
}) {
  return (
    <div className="flex w-full flex-col gap-3" key={key}>
      <UserMessage userMessage={userMessage} />
      <BotMessage
        userMessage={userMessage}
        setShowSubmitBtn={setShowSubmitBtn}
        setHeightOfContainer={setHeightOfContainer}
      />
    </div>
  );
}

const className = {
  messageBox: "w-fit max-w-[75%] break-words rounded-md p-3",
};

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
function BotMessage({ userMessage, setShowSubmitBtn, setHeightOfContainer }) {
  const [isLoading, setIsLoading] = useState(false);
  const [botMessage, setBotMessage] = useState("");
  const message =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate explicabo, earum in voluptatem temporibus assumenda minus sequi aut voluptatum at natus, a sit nam sapiente harum, rerum magnam. Eveniet dolor eum, voluptatum ducimus ratione consequuntur amet molestias labore quia ad suscipit veritatis dolorum laudantium rerum veniam. Quae modi, at nihil exercitationem doloremque voluptatibus soluta saepe esse sapiente tempora? Magni voluptatem quam nam enim reprehenderit blanditiis at saepe tempora consequatur dolorum porro quae quidem iste, quaerat itaque dignissimos facere sunt praesentium, fugit nisi autem pariatur maiores asperiores! Ad fuga porro quidem quae tenetur quo consectetur totam eius? Consequatur ut neque assumenda?" +
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate explicabo, earum in voluptatem temporibus assumenda minus sequi aut voluptatum at natus, a sit nam sapiente harum, rerum magnam. Eveniet dolor eum, voluptatum ducimus ratione consequuntur amet molestias labore quia ad suscipit veritatis dolorum laudantium rerum veniam. Quae modi, at nihil exercitationem doloremque voluptatibus soluta saepe esse sapiente tempora? Magni voluptatem quam nam enim reprehenderit blanditiis at saepe tempora consequatur dolorum porro quae quidem iste, quaerat itaque dignissimos facere sunt praesentium, fugit nisi autem pariatur maiores asperiores! Ad fuga porro quidem quae tenetur quo consectetur totam eius? Consequatur ut neque assumenda?";

  useEffect(() => {
    setIsLoading(true);
    setShowSubmitBtn(false);
    setTimeout(() => {
      setBotMessage(message);
      setIsLoading(false);
      setShowSubmitBtn(true);
    }, 2000);
  }, [userMessage]);
  return (
    <>
      {
        <div className="flex flex-row-reverse items-start gap-1">
          {/* Avatar */}
          <div className="h-6 w-6 rounded-full bg-foreground/10"></div>
          <div className={clsx(className.messageBox, "bg-foreground/10 ")}>
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              <TypeWriter
                message={botMessage}
                speed={20}
                setHeightOfContainer={setHeightOfContainer}
              />
            )}
          </div>
        </div>
      }
    </>
  );
}

export default ChatContainer;
