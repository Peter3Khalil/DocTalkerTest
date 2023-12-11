import React from 'react'
import { RxAvatar } from 'react-icons/rx'

const UserMessage = ({ message }) => {
    return (
      <div className="flex w-full items-start gap-1 px-4 py-2">
        <RxAvatar className="shrink-0 text-2xl" />
        <p className="line-clamp-2 overflow-hidden text-ellipsis break-all text-md font-medium">
          {message}
        </p>
      </div>
    )
  }

export default UserMessage