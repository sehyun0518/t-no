"use client"

import {
  ChevronDown,
  Plus,
  MoreVertical,
  Video,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Custom Eye Icon from Figma design
function IconEyes({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-7 h-7 shrink-0", className)}>
      <div className="absolute bg-gray-200 h-3.5 left-[0.29rem] rounded-full top-[0.44rem] w-[0.54rem]" />
      <div className="absolute bg-gray-200 h-3.5 left-[0.92rem] rounded-full top-[0.44rem] w-[0.54rem]" />
      <div className="absolute bg-gray-500 left-[0.97rem] rounded-full w-[0.39rem] h-[0.39rem] top-3.5" />
      <div className="absolute bg-gray-500 left-[0.34rem] rounded-full w-[0.39rem] h-[0.39rem] top-3.5" />
    </div>
  )
}

export function Sidebar() {
  return (
    <ShadcnSidebar className="border-r border-gray-100 bg-white top-[3.75rem] h-[calc(100vh-3.75rem)] w-[17.5rem]">
      <SidebarHeader className="px-5 py-8 gap-5">
        {/* New Here? Badge */}
        <Button 
          variant="ghost"
          className="w-full h-auto py-3 px-5 rounded-[0.75rem] bg-gray-500 hover:bg-gray-600 text-white justify-start gap-3 shadow-none"
        >
          <IconEyes />
          <span className="font-bold text-base leading-[1.6]">처음 오셨나요?</span>
        </Button>

        {/* Convert Video Button */}
        <Button
          variant="outline"
          className="w-full h-auto py-3 px-5 rounded-[0.75rem] bg-white border-[1.5px] border-gray-100 text-gray-500 hover:bg-gray-50 justify-between font-bold text-base shadow-none"
        >
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 flex items-center justify-center text-gray-500">
               <Video className="w-[1.125rem] h-[1.125rem] fill-current" /> 
            </div>
            <span className="leading-[1.6]">영상 변환하기</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-5">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="p-0 h-auto mb-3 flex items-center justify-between box-border shrink-0 hover:bg-transparent text-gray-500 font-bold text-xl leading-[1.6]">
             카테고리
              <Button 
                size="icon" 
                className="w-9 h-9 rounded-full bg-green-400 hover:bg-green-500 text-gray-500 shadow-none border-none shrink-0"
              >
                  <Plus className="w-4 h-4" />
              </Button>
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
             <SidebarMenu className="gap-1 pb-10">
                {/* Category Item 1 */}
                <SidebarMenuItem>
                   <Button 
                    variant="ghost" 
                    className="w-full justify-between py-2.5 h-auto px-2 -mx-2 hover:bg-gray-50 rounded-lg text-gray-500 group"
                  >
                      <div className="flex items-center gap-2.5">
                          <IconEyes />
                          <span className="font-bold text-base leading-[1.6]">상위 카테고리</span>
                      </div>
                      <MoreVertical className="w-6 h-6 text-gray-300 p-0.5 group-hover:text-gray-500" />
                  </Button>
                </SidebarMenuItem>

                 {/* Expanded Category with Subitems */}
                 <SidebarMenuItem className="flex flex-col gap-1">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between py-2.5 h-auto px-2 -mx-2 hover:bg-gray-50 rounded-lg text-gray-500 group"
                      >
                          <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 flex items-center justify-center">
                                  <Video className="w-4.5 h-4.5 text-gray-500 fill-current" />
                              </div>
                              <span className="font-bold text-base leading-[1.6]">상위 카테고리</span>
                          </div>
                          <MoreVertical className="w-6 h-6 text-gray-300 p-0.5 group-hover:text-gray-500" />
                      </Button>
                      
                      {/* Subitems */}
                      <div className="flex flex-col gap-1">
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start px-10 py-2.5 h-auto hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 font-medium text-sm leading-[1.6]"
                          >
                              하위 카테고리
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start px-10 py-2.5 h-auto hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 font-medium text-sm leading-[1.6]"
                          >
                              하위 카테고리
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start px-10 py-2.5 h-auto bg-gray-100 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 font-medium text-sm leading-[1.6]"
                          >
                              하위 카테고리
                          </Button>
                      </div>
                 </SidebarMenuItem>

                 {/* More Categories */}
                 {[1, 2, 3].map((_, i) => (
                     <SidebarMenuItem key={i}>
                         <Button 
                           variant="ghost" 
                           className="w-full justify-between py-2.5 h-auto px-2 -mx-2 hover:bg-gray-50 rounded-lg text-gray-500 group"
                         >
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 flex items-center justify-center">
                                    <Video className="w-4.5 h-4.5 text-gray-500 fill-current" />
                                </div>
                                <span className="font-bold text-base leading-[1.6]">상위 카테고리</span>
                            </div>
                            <MoreVertical className="w-6 h-6 text-gray-300 p-0.5 group-hover:text-gray-500" />
                        </Button>
                     </SidebarMenuItem>
                 ))}
             </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  )
}