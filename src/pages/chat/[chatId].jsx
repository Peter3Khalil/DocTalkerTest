import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Chat from "../../components/Main/Chat";
import Document from "../../components/Main/Document";
import Form from "../../components/Form";
import { useSelector } from "react-redux";

const SingleChat = () => {
  const isDocumentOpened = useSelector((state) => state.isDocumentOpened.isDocumentOpened);
  return (
    <DashboardLayout>
      <div className="flex h-full w-full flex-col md:flex-row relative justify-center">
        <div className={`h-full w-full bg-blue-300 ${isDocumentOpened?"absolute z-10 left-0 top-0 md:static":"hidden"}`}></div>

        <div className="h-full w-full md:max-w-[55%] flex flex-col gap-3 px-2 pt-3">
          <div className="w-full h-full overflow-auto">
            <Chat />
          </div>
          <Form />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SingleChat;
