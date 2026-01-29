"use client"

import { useState } from "react"
import { ArrowUpDown, Trash2, X, ChevronDown } from "lucide-react"
import { PaperCard } from "@/components/paper/paper-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CategoryDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("전체")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const categoryName = decodeURIComponent(params.id || "카테고리")

  const tabs = ["전체", "인공지능", "딥러닝", "머신러닝"]

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const isEditMode = selectedIds.length > 0

  return (
    <div className="flex flex-col items-center justify-start min-h-full bg-white pt-20 px-4">
      <div className="w-full max-w-[60rem] flex flex-col gap-10 pb-20">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center gap-3">
                <h1 className="text-[1.75rem] font-bold text-gray-500 leading-[1.6]">
                    {categoryName}
                </h1>
                <div className="bg-gray-100 px-2.5 py-1 rounded-lg h-8 flex items-center justify-center min-w-[2.5rem]">
                    <span className="text-gray-300 font-bold text-base">20</span>
                </div>
            </div>

            {/* Filter & Sort Bar / Bulk Action Tab (Figma Node 1:13955) */}
            <div className={cn(
                "flex items-center justify-between border-b border-gray-50 pb-4 h-[3.25rem] transition-all duration-300",
                isEditMode && "border-gray-100"
            )}>
                {!isEditMode ? (
                    <>
                    {/* Normal Mode: Tabs */}
                    <div className="flex gap-5 items-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "text-xl transition-all relative pb-2",
                                    activeTab === tab 
                                        ? "font-bold text-gray-500 border-b-2 border-gray-500" 
                                        : "font-medium text-gray-300 hover:text-gray-400"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Sort dropdown toggle */}
                    <div className="flex items-center gap-1 cursor-pointer group">
                        <span className="text-sm font-medium text-gray-400 group-hover:text-gray-500 transition-colors">
                            최근등록순
                        </span>
                        <ArrowUpDown className="w-4 h-4 text-gray-400 group-hover:text-gray-500 transition-colors" />
                    </div>
                    </>
                ) : (
                    <>
                    {/* Edit Mode: Bulk Actions (Figma Style) */}
                    <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                        <Button 
                            className="h-9 px-6 rounded-full bg-gray-500 hover:bg-gray-600 text-white font-medium text-sm shadow-none"
                            onClick={() => setSelectedIds([1, 2, 3, 4, 5, 6].map(String))}
                        >
                            전체선택
                        </Button>
                        <span className="text-sm font-medium text-gray-400">
                            {selectedIds.length}개 선택
                        </span>
                    </div>

                    <div className="flex items-center gap-2.5 animate-in fade-in slide-in-from-right-2 duration-300">
                        {/* Category Dropdown for Move */}
                        <div className="border border-gray-100 h-[38px] w-[202px] flex items-center justify-between px-4 py-1.5 rounded-lg bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                            <span className="text-gray-400 text-sm font-medium leading-[1.6]">디자인</span>
                            <ChevronDown className="w-4.5 h-4.5 text-gray-400" />
                        </div>

                        {/* Trash Button */}
                        <Button 
                            variant="ghost"
                            size="icon"
                            className="w-[38px] h-[38px] rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-400 shadow-none border-none"
                        >
                            <Trash2 className="w-5 h-5" />
                        </Button>

                        {/* Cancel Button */}
                        <Button 
                            variant="ghost"
                            size="icon"
                            className="w-[38px] h-[38px] rounded-lg bg-white hover:bg-gray-50 text-gray-400 border border-gray-100 shadow-none"
                            onClick={() => setSelectedIds([])}
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                    </>
                )}
            </div>
        </div>

        {/* Paper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <PaperCard 
                    key={i}
                    id={`${i}`}
                    variant="category"
                    isSelected={selectedIds.includes(`${i}`)}
                    onSelect={() => toggleSelect(`${i}`)}
                    title="디자인 현실적인 고민 무엇이든 물어보세요 | 공부법? 포트폴리오? 좋은 커리어?"
                    description="디자인 현실적인 고민 무엇이든 물어보세요 | 공부법? 포트폴리오? 좋은 커리어?"
                    tags={["디자인", "인공지능"]}
                />
            ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-10">
            <button className="text-gray-400 font-medium text-xl hover:text-gray-500 transition-colors">
                더보기
            </button>
        </div>
      </div>
    </div>
  )
}
