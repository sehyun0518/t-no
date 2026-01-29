"use client"

import {
  ChevronDown,
  Plus,
  MoreVertical,
  Folder,
  X,
  Check
} from "lucide-react"
import Link from "next/link"
import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

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

// Sub-component for the "More" dropdown
const MoreMenuContent = ({ 
    onAddSub, 
    onEdit,
    onDelete, 
    menuRef,
    showAddSub = true
}: { 
    onAddSub?: () => void, 
    onEdit: () => void,
    onDelete: (e: React.MouseEvent) => void,
    menuRef: React.RefObject<HTMLDivElement | null>,
    showAddSub?: boolean
}) => (
    <div 
        ref={menuRef}
        className="absolute left-[calc(100%-1rem)] top-0 w-[167.5px] bg-white border border-gray-100 rounded-xl shadow-[0px_4px_40px_rgba(0,0,0,0.1)] py-[10px] z-50 animate-in fade-in slide-in-from-left-2 duration-200"
    >
        {showAddSub && onAddSub && (
            <button 
                onClick={onAddSub}
                className="w-full flex items-center justify-center px-[20px] py-[12px] hover:bg-gray-50 transition-colors text-gray-400 text-[14px] font-medium leading-[1.6]"
            >
                하위 카테고리 추가
            </button>
        )}
        <button 
            onClick={onEdit}
            className="w-full flex items-center justify-center px-[20px] py-[12px] hover:bg-gray-50 transition-colors text-gray-400 text-[14px] font-medium leading-[1.6]"
        >
            수정하기
        </button>
        <button className="w-full flex items-center justify-center px-[20px] py-[12px] hover:bg-gray-50 transition-colors text-gray-400 text-[14px] font-medium leading-[1.6]">
            이동하기
        </button>
        <button 
            onClick={onDelete}
            className="w-full flex items-center justify-center px-[20px] py-[12px] hover:bg-gray-50 transition-colors text-[#FF4A4A] text-[14px] font-medium leading-[1.6]"
        >
            삭제하기
        </button>
    </div>
)

export function Sidebar() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)
  const [isDeleteDialogOpen, setIsDeleteOpen] = useState(false)
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false)
  const [addCategoryMode, setAddCategoryMode] = useState<"top" | "sub">("top")
  const [newCategoryName, setNewCategoryName] = useState("")
  
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null)
  const [editingValue, setEditingValue] = useState("")

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMenu = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenMenuId(openMenuId === id ? null : id)
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenMenuId(null)
    setIsDeleteOpen(true)
  }

  const handleAddCategoryClick = (mode: "top" | "sub") => {
    setAddCategoryMode(mode)
    setOpenMenuId(null)
    setIsAddCategoryOpen(true)
    setNewCategoryName("")
  }

  const handleEditClick = (id: string, currentName: string) => {
    setEditingCategoryId(id)
    setEditingValue(currentName)
    setOpenMenuId(null)
  }

  const handleEditSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setEditingCategoryId(null)
  }

  return (
    <>
    <ShadcnSidebar className="border-r border-gray-100 bg-white top-15 h-[calc(100vh-3.75rem)] w-70 z-10">
      <SidebarHeader className="px-8 py-8 gap-5">
        <Button 
          variant="ghost"
          className="w-full h-auto py-3 px-5 rounded-2xl bg-gray-500 hover:bg-gray-600 text-white justify-start gap-3 shadow-none"
        >
          <IconEyes />
          <span className="font-bold text-base leading-[1.6]">처음 오셨나요?</span>
        </Button>

        <Button
          variant="outline"
          className="w-full h-auto py-3 px-5 rounded-2xl bg-white border-[1.5px] border-gray-100 text-gray-500 hover:bg-gray-50 justify-between font-bold text-base shadow-none"
        >
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 flex items-center justify-center text-gray-500">
               <Folder className="w-4.5 h-4.5 fill-current" /> 
            </div>
            <span className="leading-[1.6]">논문 변환하기</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Button>
      </SidebarHeader>

      <SidebarContent className={cn("px-8", (openMenuId || isAddCategoryOpen || isDeleteDialogOpen) ? "overflow-visible" : "overflow-auto")}>
        <SidebarGroup className="p-0 overflow-visible">
          <SidebarGroupLabel className="p-0 h-auto mb-3 flex items-center justify-between box-border shrink-0 hover:bg-transparent text-gray-500 font-bold text-xl leading-[1.6] overflow-visible">
             카테고리
              <Button 
                size="icon" 
                className="w-9 h-9 rounded-full bg-green-400 hover:bg-green-500 text-gray-500 shadow-none border-none shrink-0"
                onClick={() => handleAddCategoryClick("top")}
              >
                  <Plus className="w-4 h-4" />
              </Button>
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
             <SidebarMenu className="gap-1 pb-10">
                <SidebarMenuItem>
                   <Link href="/categories/recent" className="w-full">
                    <Button 
                        variant="ghost" 
                        className="w-full justify-start py-2.5 h-auto px-2 -mx-2 hover:bg-gray-50 rounded-lg text-gray-500 group gap-2.5"
                    >
                        <IconEyes />
                        <span className="font-bold text-base leading-[1.6]">최근 본 논문</span>
                    </Button>
                   </Link>
                </SidebarMenuItem>

                 <SidebarMenuItem className="flex flex-col gap-1 relative group">
                      <div className="flex items-center w-full">
                        {editingCategoryId === "cat2" ? (
                            <div className="flex-1 flex items-center gap-2 -mx-2 px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm animate-in fade-in zoom-in-95 duration-200">
                                <Input 
                                    autoFocus
                                    value={editingValue}
                                    onChange={(e) => setEditingValue(e.target.value)}
                                    className="h-8 border-none bg-transparent px-0 text-base font-bold text-gray-500 focus:border-none focus:ring-0"
                                />
                                <button onClick={handleEditSave} className="p-1 hover:bg-gray-50 rounded-md transition-colors shrink-0">
                                    <Check className="w-4 h-4 text-green-500" />
                                </button>
                            </div>
                        ) : (
                            <>
                            <Link href="/categories/top" className="flex-1">
                                <Button 
                                    variant="ghost" 
                                    className="w-full justify-start py-2.5 h-auto px-2 -mx-2 hover:bg-gray-50 rounded-lg text-gray-500 group gap-2.5"
                                >
                                    <div className="w-7 h-7 flex items-center justify-center">
                                        <Folder className="w-4.5 h-4.5 text-gray-500 fill-current" />
                                    </div>
                                    <span className="font-bold text-base leading-[1.6]">상위 카테고리</span>
                                </Button>
                            </Link>
                            <MoreVertical 
                                className="w-6 h-6 text-gray-300 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-gray-500 shrink-0"
                                onClick={(e) => toggleMenu(e, "cat2")}
                            />
                            </>
                        )}
                      </div>

                      {openMenuId === "cat2" && (
                        <MoreMenuContent 
                            onAddSub={() => handleAddCategoryClick("sub")} 
                            onEdit={() => handleEditClick("cat2", "상위 카테고리")}
                            onDelete={handleDeleteClick} 
                            menuRef={menuRef} 
                        />
                      )}
                      
                      <div className="flex flex-col gap-1">
                          {["하위 카테고리 1", "하위 카테고리 2", "하위 카테고리 3"].map((sub, i) => (
                            <div key={i} className="relative group/sub w-full flex items-center">
                                <Link href={`/categories/${encodeURIComponent(sub)}`} className="flex-1">
                                    <Button 
                                        variant="ghost" 
                                        className="w-full justify-start px-10 py-2.5 h-auto hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 font-medium text-sm leading-[1.6]"
                                    >
                                        {sub}
                                    </Button>
                                </Link>
                                <MoreVertical 
                                    className="absolute right-2 w-5 h-5 text-gray-300 opacity-0 group-hover/sub:opacity-100 transition-opacity cursor-pointer hover:text-gray-500 shrink-0"
                                    onClick={(e) => toggleMenu(e, `sub-${i}`)}
                                />
                                {openMenuId === `sub-${i}` && (
                                    <MoreMenuContent 
                                        showAddSub={false}
                                        onEdit={() => handleEditClick(`sub-${i}`, sub)}
                                        onDelete={handleDeleteClick} 
                                        menuRef={menuRef} 
                                    />
                                )}
                            </div>
                          ))}
                      </div>
                 </SidebarMenuItem>

                 {[3, 4, 5].map((id) => (
                     <SidebarMenuItem key={id} className="relative group">
                         <div className="flex items-center w-full">
                            {editingCategoryId === `cat${id}` ? (
                                <div className="flex-1 flex items-center gap-2 -mx-2 px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm animate-in fade-in zoom-in-95 duration-200">
                                    <Input 
                                        autoFocus
                                        value={editingValue}
                                        onChange={(e) => setEditingValue(e.target.value)}
                                        className="h-8 border-none bg-transparent px-0 text-base font-bold text-gray-500 focus:border-none focus:ring-0"
                                    />
                                    <button onClick={handleEditSave} className="p-1 hover:bg-gray-50 rounded-md transition-colors shrink-0">
                                        <Check className="w-4 h-4 text-green-500" />
                                    </button>
                                </div>
                            ) : (
                                <>
                                <Link href={`/categories/cat${id}`} className="flex-1">
                                    <Button 
                                        variant="ghost" 
                                        className="w-full justify-start py-2.5 h-auto px-2 -mx-2 hover:bg-gray-50 rounded-lg text-gray-500 group gap-2.5"
                                    >
                                        <div className="w-7 h-7 flex items-center justify-center">
                                            <Folder className="w-4.5 h-4.5 text-gray-500 fill-current" />
                                        </div>
                                        <span className="font-bold text-base leading-[1.6]">상위 카테고리</span>
                                    </Button>
                                </Link>
                                <MoreVertical 
                                    className="w-6 h-6 text-gray-300 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-gray-500 shrink-0"
                                    onClick={(e) => toggleMenu(e, `cat${id}`)}
                                />
                                </>
                            )}
                         </div>

                        {openMenuId === `cat${id}` && (
                            <MoreMenuContent 
                                onAddSub={() => handleAddCategoryClick("sub")} 
                                onEdit={() => handleEditClick(`cat${id}`, "상위 카테고리")}
                                onDelete={handleDeleteClick} 
                                menuRef={menuRef} 
                            />
                        )}
                     </SidebarMenuItem>
                 ))}
             </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>

    <Dialog open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen}>
        <DialogContent className="max-w-[40rem] p-0 overflow-hidden border-none shadow-[0px_4px_40px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center gap-12 px-[60px] py-10 bg-white relative">
                <button 
                    onClick={() => setIsAddCategoryOpen(false)}
                    className="absolute right-10 top-10 p-1 hover:bg-gray-50 rounded-full transition-colors group"
                >
                    <X className="w-7 h-7 text-gray-400 group-hover:text-gray-600" />
                </button>

                <DialogHeader>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">
                            <Folder className="w-11 h-9 text-gray-400 fill-gray-200" />
                        </div>
                        <DialogTitle>{addCategoryMode === "top" ? "카테고리 추가" : "하위 카테고리 추가"}</DialogTitle>
                    </div>
                    <DialogDescription>
                        만들고 싶은 카테고리의 이름을 작성해주세요
                    </DialogDescription>
                </DialogHeader>

                <div className="w-full flex flex-col gap-3">
                    <div className="relative">
                        <Input 
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value.slice(0, 10))}
                            placeholder="카테고리의 이름을 작성해주세요" 
                            className="h-14 bg-gray-50 border-none rounded-xl px-5 text-gray-500 placeholder:text-gray-300 pr-24 focus:bg-white focus:border-gray-200"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 text-[12px] font-medium">
                            {newCategoryName.length}/10 (공백포함)
                        </span>
                    </div>
                    <Button 
                        className={cn(
                            "w-full h-14 font-bold text-base rounded-xl shadow-none transition-colors",
                            newCategoryName.trim() 
                                ? "bg-gray-500 text-white hover:bg-gray-600" 
                                : "bg-gray-100 text-gray-300 cursor-not-allowed"
                        )}
                        onClick={() => {
                            if(newCategoryName.trim()) setIsAddCategoryOpen(false)
                        }}
                    >
                        {addCategoryMode === "top" ? "추가하기" : "완료"}
                    </Button>
                </div>
            </div>
        </DialogContent>
    </Dialog>

    <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="max-w-[40rem] p-0 overflow-hidden border-none shadow-[0px_4px_40px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center gap-12 px-[60px] py-10 bg-white relative">
                <button 
                    onClick={() => setIsDeleteOpen(false)}
                    className="absolute right-10 top-10 p-1 hover:bg-gray-50 rounded-full transition-colors group"
                >
                    <X className="w-7 h-7 text-gray-400 group-hover:text-gray-600" />
                </button>

                <DialogHeader>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">
                            <Folder className="w-11 h-9 text-gray-400 fill-gray-200" />
                        </div>
                        <DialogTitle>카테고리 삭제</DialogTitle>
                    </div>
                    <DialogDescription>
                        해당 파일을 삭제하면 그 안에 영상도 함께 삭제됩니다. <br />괜찮으신가요?
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button 
                        className="w-full h-14 bg-gray-500 hover:bg-gray-600 text-white font-bold text-base rounded-xl shadow-none"
                        onClick={() => setIsDeleteOpen(false)}
                    >
                        삭제하기
                    </Button>
                    <Button 
                        variant="outline"
                        className="w-full h-14 border-[1.5px] border-gray-200 text-gray-400 font-bold text-base rounded-xl hover:bg-gray-50 shadow-none"
                        onClick={() => setIsDeleteOpen(false)}
                    >
                        취소
                    </Button>
                </DialogFooter>
            </div>
        </DialogContent>
    </Dialog>
    </>
  )
}