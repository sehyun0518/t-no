"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  handleSearch: () => void
  hasSearched: boolean
}

export function SearchHeader({ searchQuery, setSearchQuery, handleSearch, hasSearched }: SearchHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-10 text-center w-full">
      {!hasSearched && (
        <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-[2.25rem] font-bold text-gray-500 leading-[1.6]">
            찾고 싶은 키워드가 있나요?
          </h1>
          <p className="text-gray-300 font-medium text-base leading-[1.6]">
            찾고자 하는 키워드를 검색하면 관련 영상들을 찾아드릴게요
          </p>
        </div>
      )}

      {/* Search Bar Area */}
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full bg-gray-100 rounded-[0.75rem] p-4 flex items-center gap-5 box-border max-w-[64rem]">
            <div className="flex items-center gap-5 flex-1 pl-1">
                <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                    <Search className="w-7 h-7 text-gray-400" />
                </div>
                <Input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="검색하고 싶은 키워드를 입력해주세요" 
                    className="flex-1 bg-transparent border-none px-0 h-auto focus:border-none shadow-none text-xl"
                />
            </div>
            <div className="flex items-center gap-3">
                <Button 
                    onClick={handleSearch}
                    className={`font-bold text-base h-10 px-6 rounded-[0.5rem] shadow-none w-[6.25rem] transition-colors ${
                        searchQuery.trim() ? "bg-gray-500 text-white hover:bg-gray-600" : "bg-gray-100 text-gray-300 hover:bg-gray-200"
                    }`}
                >
                    start
                </Button>
            </div>
        </div>

        {/* Tooltip (Only visible before search) */}
        {!hasSearched && (
            <div className="absolute -bottom-[4.5rem] flex flex-col items-center animate-bounce duration-[2000ms] drop-shadow-[4px_4px_30px_rgba(0,0,0,0.16)]">
                <div className="relative w-[12px] h-[12px] z-10 -mb-px">
                    <img src="https://www.figma.com/api/mcp/asset/e38294a9-dc30-4b68-9307-f82946ef3f5e" alt="" className="block w-full h-full" />
                </div>
                <div className="bg-[#efff66] px-[28px] py-[12px] rounded-[4px] relative z-0">
                    <p className="text-[12px] font-medium text-[#1e1e1e] text-center leading-[1.6]">
                        로그인하고 더 편리하게 사용해보세요!
                    </p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
