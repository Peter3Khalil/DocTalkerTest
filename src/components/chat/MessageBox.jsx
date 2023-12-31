import React, {  useEffect, useState } from 'react'
import { cn } from '../../utils/helperFunctions'
import { Doc } from '../shared/Logo'
import { FaUser } from '../shared/Icons'

const MessageBox = ({ message, isBot = false }) => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true)
    }, 100)

  }, [])
    return (
      <div className={cn("flex transition-all duration-300 ease-in-out w-full items-center opacity-0 rounded  bg-accent px-4 py-3 text-accent-foreground",{
        "bg-primary text-primary-foreground":!isBot,
        "opacity-100":isDisplayed,
      })}>
        <div className="flex items-start gap-1">
          {isBot ? (
            <h3 className="text-[10px]">
              <Doc className="rounded-md"/>
            </h3>
          ) : (
            <FaUser className="shrink-0" />
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-md font-bold leading-none">
              {isBot ? "Talker" : "You"}
            </h1>
            <p className="break-all text-sm">
              {message}
            </p>
          </div>
        </div>
      </div>
    )
  }

export default MessageBox