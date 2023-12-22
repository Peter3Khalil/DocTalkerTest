import React from "react"
import DashboardLayout from "../../components/Layouts/DashboardLayout"
import { cn } from "../../utils/helperFunctions"
import PDFViewer from "../../components/chat/PDFViewer"
import ChatContainer from "../../components/chat/ChatContainer"
const Chat = () => {

  return (
    <DashboardLayout>
      <main
        className={cn(
          "relative flex h-[20vh] w-full flex-grow justify-center overflow-auto",
          {},
        )}
      >
        <ChatContainer />
        <PDFViewer />
      </main>
    </DashboardLayout>
  )
}







export default Chat
