import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-14 w-full rounded-xl bg-white px-5 py-4 text-base font-medium text-gray-500 placeholder:text-gray-300 transition-all outline-none border-[1.5px] border-gray-200",
        "focus:border-gray-400",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
