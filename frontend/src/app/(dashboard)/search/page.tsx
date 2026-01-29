"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

// Asset Constants from Figma
const imgSearchResult = "https://www.figma.com/api/mcp/asset/283ae20a-5548-47f1-916e-104ad97ded1f";

export default function SearchPage() {
  const [hasSearched, setHasSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true)
    }
  }

  return (
    <div className={`flex flex-col items-center justify-start min-h-full bg-white px-4 transition-all duration-500 ${hasSearched ? "pt-10" : "pt-[10rem]"}`}>
      <div className="w-full max-w-[64rem] flex flex-col items-center gap-[3.75rem]">
        {/* Header & Search Section */}
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

        {/* Conditional Content: Results or Recommended Tags */}
        {hasSearched ? (
            /* Search Results View (Figma Node 1:11102) */
            <div className="w-full flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
                <div className="w-full flex justify-start">
                    <p className="text-gray-300 font-medium text-sm leading-[1.6]">
                        총 12개의 영상이 발견되었어요!
                    </p>
                </div>

                {/* Result Cards List */}
                <div className="flex flex-col gap-5">
                    {[1, 2, 3].map((i) => (
                        <Link key={i} href={`/thesis/${i}`}>
                            <div className="bg-white flex items-stretch overflow-hidden rounded-[1rem] shadow-[0px_4px_40px_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_30px_rgba(0,0,0,0.1)] transition-all cursor-pointer group">
                                {/* Left Content */}
                                <div className="flex-1 flex flex-col gap-6 p-6">
                                    {/* Metadata */}
                                    <div className="flex items-center gap-2 text-[12px] font-medium text-gray-300">
                                        <span>여울</span>
                                        <div className="w-px h-3 bg-gray-200" />
                                        <span>2024년 1월 1일</span>
                                    </div>

                                    {/* Title & Desc */}
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bold text-base text-gray-500 leading-[1.6]">
                                            메조미디어가 본 내년 미디어 <span className="text-[#9bb700]">트렌드</span>는…생성AI·광고없는 구독
                                        </h3>
                                        <p className="text-gray-400 text-sm font-medium leading-[1.6]">
                                            2024 광고 시장의 현황
                                        </p>
                                        <p className="text-gray-300 text-sm leading-[1.6] line-clamp-2">
                                            올해 IT업계의 가장 큰 화제는 단연코 생성형 AI라고 할 수 있겠습니다. 2022년 11월, OpenAI가 출시한 ChatGPT는 멀게만 느껴졌던 AI 기술을 우리의 실생활에 밀접한 서비스로 바꾸었죠. 그리고 이제는 디지털 광고 영역에서도 본격...
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex gap-2">
                                        {["디자인", "인공지능", "마케팅"].map((tag) => (
                                            <div key={tag} className="bg-gray-100 px-2.5 py-1.5 rounded-lg">
                                                <span className="text-gray-400 text-[12px] font-medium leading-[1.6]"># {tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="relative w-[13.3rem] shrink-0 bg-gray-100 overflow-hidden">
                                    <Image 
                                        src={imgSearchResult} 
                                        alt="Result Thumbnail" 
                                        fill 
                                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        ) : (
            /* Recommended Tags Section */
            <div className="flex flex-col items-center gap-5 pt-10 animate-in fade-in duration-700">
                <div className="flex flex-wrap justify-center gap-3 max-w-[50rem]">
                    {[
                        "인공지능", "딥러닝", "머신러닝", "데이터 분석", "UX/UI", "프론트엔드"
                    ].map((tag) => (
                        <div 
                            key={tag} 
                            onClick={() => { setSearchQuery(tag); setHasSearched(true); }}
                            className="border border-gray-200 rounded-[0.5rem] px-4 py-2 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-gray-400 text-base font-medium"># {tag}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 max-w-[40rem]">
                    {[
                        "리서치", "광고 트렌드", "디자인", "미디어"
                    ].map((tag) => (
                        <div 
                            key={tag} 
                            onClick={() => { setSearchQuery(tag); setHasSearched(true); }}
                            className="border border-gray-200 rounded-[0.5rem] px-4 py-2 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-gray-400 text-base font-medium"># {tag}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
