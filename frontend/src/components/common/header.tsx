"use client"

import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="w-full h-15 bg-white flex items-center border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full max-w-390 mx-auto px-5 flex items-center justify-between h-full">
        {/* Left Section: Menu/Close & Logo */}
        <div className="flex items-center gap-5">
          <div className="-ml-2">
            <SidebarTrigger className="text-gray-500 hover:bg-gray-100 w-9 h-9 rounded-full transition-colors" />
          </div>
          
          {/* Logo - T-NO (Stylized based on project context) */}
          <div className="flex items-center gap-1 select-none">
             {/* Using text representation for reliability over temporary image assets */}
             <span className="font-bold text-xl tracking-tighter text-gray-500">T-NO</span>
             {/* Note: The design might have a specific vector logo. 
                 For now, we use text. If an SVG asset is available in public/, it should be used here. */}
          </div>
        </div>

        {/* Right Section: Icons & Profile */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button className="text-gray-500 hover:bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>

          {/* Notifications */}
          <button className="relative text-gray-500 hover:bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-[0.4rem] right-[0.4rem] w-2 h-2 bg-green-600 rounded-full border border-white" />
          </button>

          {/* User Profile */}
          <Avatar className="w-9 h-9 cursor-pointer border border-gray-200">
            <AvatarImage src="/avatar-placeholder.png" alt="User" />
            <AvatarFallback className="bg-gray-100 text-gray-500 text-xs">US</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
