"use client"

import { Search, Bell, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={cn(
        "w-full h-15 bg-white flex items-center border-b border-gray-100 sticky top-0 transition-all",
        isProfileOpen ? "z-[100]" : "z-50"
    )}>
      <div className="w-full max-w-390 mx-auto px-8 flex items-center justify-between h-full">
        {/* Left Section: Menu/Close & Logo */}
        <div className="flex items-center gap-5">
          <div className="-ml-2">
            <SidebarTrigger className="text-gray-500 hover:bg-gray-100 w-9 h-9 rounded-full transition-colors" />
          </div>
          
          {/* Logo - T-NO */}
          <Link href="/" className="flex items-center gap-1 select-none hover:opacity-80 transition-opacity">
             <span className="font-bold text-xl tracking-tighter text-gray-500">T-NO</span>
          </Link>
        </div>

        {/* Right Section: Icons & Profile */}
        <div className="flex items-center gap-5 relative" ref={dropdownRef}>
          {/* Search */}
          <Link href="/search" className="text-gray-500 hover:bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </Link>

          {/* Notifications */}
          <button className="relative text-gray-500 hover:bg-gray-100 w-9 h-9 flex items-center justify-center rounded-full transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-[0.4rem] right-[0.4rem] w-2 h-2 bg-green-600 rounded-full border border-white" />
          </button>

          {/* User Profile Trigger */}
          <div className="relative">
            <Avatar 
                className={cn(
                    "w-9 h-9 cursor-pointer border border-gray-200 hover:ring-2 hover:ring-gray-100 transition-all relative",
                    isProfileOpen ? "z-[120]" : "z-auto"
                )}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
                <AvatarImage src="/avatar-placeholder.png" alt="User" />
                <AvatarFallback className="bg-gray-100 text-gray-500 text-xs">여울</AvatarFallback>
            </Avatar>

            {/* Profile Dropdown */}
            {isProfileOpen && (
                <>
                    {/* Background Overlay */}
                    <div 
                        className="fixed inset-0 bg-black/15 z-[110] cursor-default"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsProfileOpen(false);
                        }}
                    />
                    <div className="absolute right-0 top-[3.5rem] w-[16.25rem] bg-white border border-gray-100 rounded-xl shadow-[0px_4px_40px_rgba(0,0,0,0.1)] py-2.5 z-[120] animate-in fade-in zoom-in-95 duration-200">
                        {/* User Header */}
                        <div className="px-5 py-3 flex items-center gap-3 border-b border-gray-50 mb-1">
                            <Avatar className="w-[2.875rem] h-[2.875rem] border border-gray-100">
                                <AvatarFallback className="bg-gray-100 text-gray-500 text-sm">여울</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-gray-500 font-bold text-base leading-none">여울</span>
                                <span className="text-gray-300 text-[12px] mt-1.5">yejin2174@naver.com</span>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col">
                            <Link 
                                href="/profile" 
                                className="flex items-center gap-4 px-7 py-3 hover:bg-gray-50 transition-colors group"
                                onClick={() => setIsProfileOpen(false)}
                            >
                                <Settings className="w-5 h-5 text-gray-300 group-hover:text-gray-500 transition-colors" />
                                <span className="text-gray-400 text-[14px] font-medium">내 정보</span>
                            </Link>
                            <button className="flex items-center gap-4 px-7 py-3 hover:bg-gray-50 transition-colors group w-full text-left">
                                <LogOut className="w-5 h-5 text-gray-300 group-hover:text-red-400 transition-colors" />
                                <span className="text-gray-400 text-[14px] font-medium group-hover:text-red-400">로그아웃</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}