import { useRouter } from "next/router"
import React from "react"
import { cn } from "../../utils/helperFunctions"
import Link from "next/link"
const ChatItem = ({ chatName, chatId }) => {
  const router = useRouter()
  const { chatId: activeChatId } = router.query
  const isActive = activeChatId == chatId
  return (
    <li
      className={cn(
        "mb-1 w-full overflow-hidden whitespace-nowrap break-all rounded",
        {
          "hover:bg-muted/20 dark:hover:bg-muted-foreground/20": !isActive,
          "bg-primary": isActive,
        },
      )}
    >
      <Link href={`/chat/${chatId}`}>
        <p className="overflow-hidden p-2 text-md leading-none">{chatName}</p>
      </Link>
    </li>
  )
}
export default ChatItem
