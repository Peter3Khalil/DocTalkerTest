import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

export const cn = (...args) => {
  return twMerge(clsx(...args))
}

export function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Copying to clipboard was successful!")
    },
    function (err) {
      console.error("Could not copy text: ", err)
    },
  )
}

