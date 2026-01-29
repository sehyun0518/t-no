"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp, FolderPlus, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThesisCardProps {
  id: string
  title: string
  description?: string
  thumbnailUrl?: string
  tags?: string[]
  className?: string
  isSelected?: boolean
  onSelect?: (e: React.MouseEvent) => void
  variant?: "home" | "category" | "recent"
}

export function ThesisCard({
  id,
  title,
  description,
  thumbnailUrl = "/placeholder-paper.jpg",
  tags = [],
  className,
  isSelected = false,
  onSelect,
  variant = "home",
}: ThesisCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const categories = [
    { name: "인공지능", isHeader: true },
    { name: "머신러닝", isHeader: false },
    { name: "딥러닝", isHeader: false },
    { name: "디자인", isHeader: true },
    { name: "마케팅", isHeader: true },
    { name: "트렌드", isHeader: true },
  ]

  const isCategoryVariant = variant === "category"
  const isHomeVariant = variant === "home"

  return (
    <div className={cn(
        "group/card-wrapper relative w-full h-[23.5rem] transition-all",
        isDropdownOpen ? "z-[100]" : "z-20 hover:z-30"
    )}>
      {/* Background Overlay */}
      {isDropdownOpen && (
        <div 
            className="fixed inset-0 bg-black/15 z-[110] cursor-default"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDropdownOpen(false);
            }}
        />
      )}

      <div 
        className={cn(
            "absolute inset-0 overflow-hidden rounded-[1rem] shadow-[0_0.25rem_2.5rem_0_rgba(0,0,0,0.05)] border-none bg-white w-full flex flex-col transition-all duration-300 ease-in-out cursor-pointer z-10",
            isHomeVariant && "group-hover/card-wrapper:h-[27rem] group-hover/card-wrapper:shadow-[4px_4px_30px_0px_rgba(0,0,0,0.16)]",
            isHomeVariant && isDropdownOpen && "h-[27rem] shadow-[4px_4px_30px_0px_rgba(0,0,0,0.16)]",
            !isHomeVariant && "group-hover/card-wrapper:shadow-[4px_4px_30px_0px_rgba(0,0,0,0.16)]",
            className
        )}
      >
        <div className="relative h-[10.2rem] w-full bg-gray-100 shrink-0 flex items-center justify-center overflow-hidden">
            <Link href={`/thesis/${id}`} className="block w-full h-full relative">
                {thumbnailUrl !== "/placeholder-paper.jpg" ? (
                    <Image
                    src={thumbnailUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
                ) : (
                    <div className="flex flex-col items-center gap-2 opacity-20">
                        <div className="w-12 h-16 border-2 border-gray-400 bg-white rounded-sm"></div>
                        <div className="w-12 h-16 border-2 border-gray-400 bg-white rounded-sm -mt-12 ml-4"></div>
                    </div>
                )}

                {/* Selection Overlay (Only for category variant) */}
                {isCategoryVariant && isSelected && (
                    <div className="absolute inset-0 bg-black/50 z-10 transition-opacity animate-in fade-in duration-200" />
                )}
            </Link>

            {/* Checkmark Icon (Only for category variant) */}
            {isCategoryVariant && (
                <div 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onSelect?.(e);
                    }}
                    className={cn(
                        "absolute top-3 right-3 w-6 h-6 rounded-full border-[1.5px] border-white flex items-center justify-center transition-all z-20",
                        isSelected ? "bg-white/40" : "bg-transparent opacity-0 group-hover/card-wrapper:opacity-100 hover:bg-white/20"
                    )}
                >
                    <Check className={cn("w-3.5 h-3.5 text-white transition-opacity", isSelected ? "opacity-100" : "opacity-0")} />
                </div>
            )}
        </div>

        {/* Content */}
        <div className="flex flex-col p-5 gap-4 h-full relative">
            <Link href={`/thesis/${id}`} className="space-y-2 block">
                <h3 className="font-bold text-base leading-[1.6] text-gray-500 line-clamp-2">
                {title}
                </h3>
                {description && (
                <p className="font-medium text-sm leading-[1.6] text-gray-300 line-clamp-2">
                    {description}
                </p>
                )}
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 px-2.5 py-1.5 rounded-[0.5rem] flex items-center justify-center"
                >
                  <span className="text-gray-400 text-xs font-medium leading-none">
                    # {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Hover Actions: Category & Save (Only for home/recommended variant) */}
            {isHomeVariant && (
                <div className={cn(
                    "mt-auto opacity-0 group-hover/card-wrapper:opacity-100 transition-opacity duration-300 flex gap-2 items-center pt-2 relative",
                    isDropdownOpen && "opacity-100"
                )}>
                    <div 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsDropdownOpen(!isDropdownOpen);
                        }}
                        className="border border-gray-200 flex-1 h-[38px] flex items-center justify-between px-4 py-1.5 rounded-lg bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-gray-400 text-[14px] font-medium leading-[1.6]">디자인</span>
                        {isDropdownOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </div>
                    <div className="bg-green-400 h-[38px] w-10 flex items-center justify-center rounded-lg shadow-sm cursor-pointer hover:bg-green-500 transition-colors">
                        <FolderPlus className="w-5 h-5 text-gray-500" />
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div 
                            className="absolute bottom-[44px] left-0 w-[calc(100%-3rem)] bg-white border border-gray-100 rounded-xl shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] overflow-hidden z-120 animate-in fade-in slide-in-from-bottom-2 duration-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="max-h-[200px] overflow-y-auto pr-4 py-2 custom-scrollbar scrollbar-hide">
                                <style jsx>{`
                                    .scrollbar-hide::-webkit-scrollbar {
                                        display: none;
                                    }
                                    .scrollbar-hide {
                                        -ms-overflow-style: none;
                                        scrollbar-width: none;
                                    }
                                `}</style>
                                {categories.map((cat, idx) => (
                                    <div 
                                        key={idx}
                                        className={cn(
                                            "flex items-center gap-2 px-5 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors",
                                            !cat.isHeader && "pl-11"
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {cat.isHeader && (
                                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                                        )}
                                        <span className={cn(
                                            "text-[14px] leading-[1.6] text-gray-400",
                                            cat.isHeader ? "font-bold" : "font-medium"
                                        )}>
                                            {cat.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* Scroll indicator mimic */}
                            <div className="absolute right-1 top-4 bottom-4 w-1 bg-gray-50 rounded-full">
                                <div className="absolute top-2 left-0 right-0 h-12 bg-gray-200 rounded-full" />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}
