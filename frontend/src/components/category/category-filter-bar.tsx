"use client"

import { ArrowUpDown, Trash2, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterBarProps {
  activeTab: string
  tabs: string[]
  onTabChange: (tab: string) => void
  isEditMode: boolean
  selectedCount: number
  onSelectAll: () => void
  onClearSelection: () => void
}

export function CategoryFilterBar({
  activeTab,
  tabs,
  onTabChange,
  isEditMode,
  selectedCount,
  onSelectAll,
  onClearSelection
}: CategoryFilterBarProps) {
  return (
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
                        onClick={() => onTabChange(tab)}
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
                    onClick={onSelectAll}
                >
                    전체선택
                </Button>
                <span className="text-sm font-medium text-gray-400">
                    {selectedCount}개 선택
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
                    onClick={onClearSelection}
                >
                    <X className="w-5 h-5" />
                </Button>
            </div>
            </>
        )}
    </div>
  )
}
