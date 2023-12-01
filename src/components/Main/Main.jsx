import React from "react";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import Document from "./Document";
const Main = () => {
  const isDocumentOpened = useSelector((state) => state.isDocumentOpened.isDocumentOpened);
  console.log("Main");
  return (
    <main className="h-full w-full overflow-auto bg-blue-600 px-4 py-2 relative">
      <Chat />
        {isDocumentOpened && <Document />}
    </main>
  );
};

export default Main;
