import React from "react";
import { useSelector } from "react-redux";
import ChatContainer from "./ChatContainer";
const MiddleContainer = () => {
    const [userMessages, setUserMessages] = useState([]);
    const previewPdf = useSelector((state) => state.previewPdf.previewPdf);
    let chats = userMessages.map((message, index) => (
        <ChatContainer
            userMessage={message}
            key={index}
            setShowSubmitBtn={setShowSubmitBtn}
        />
    ));
  return (
    <section
      className="flex h-full w-full flex-col gap-3 overflow-auto  p-3"
    >
      {previewPdf ? (
        <div className=" h-full w-full bg-black"></div>
      ) : (
        <div className="h-fit w-full" id="chatContainer">{chats}</div>
      )}

      {/* Middle */}
    </section>
  );
};

export default MiddleContainer;
