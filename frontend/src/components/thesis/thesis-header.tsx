"use client"

import Image from "next/image"
import { FolderPlus } from "lucide-react"

// Asset Constants (Reusing existing)
const img15 = "https://www.figma.com/api/mcp/asset/3bb7e43c-f7be-4a8c-b740-ccde5b146f8c";

export function ThesisHeader() {
  return (
    <>
      {/* 1. Paper Header Section */}
      <div className="p-10 pb-6 flex flex-col gap-6 items-center text-center">
            <span className="text-gray-400 text-sm font-medium">2024년 1월 1일 출판</span>
            <h1 className="font-bold text-gray-800 text-3xl leading-tight">
              메조미디어가 본 미디어 트렌드는…생성AI·광고없는 구독
            </h1>
            <div className="flex gap-2.5">
              {["# 인공지능", "# 마케팅", "# 트렌드"].map((tag, i) => (
                  <div key={i} className="bg-gray-100 px-2.5 py-1.5 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs font-medium leading-[1.6]">
                          {tag}
                      </span>
                  </div>
              ))}
            </div>
      </div>

      {/* Category & Actions (Figma Node 1:3706) */}
      <div className="flex gap-2 items-start w-full px-10 mb-10">
          <div className="border border-gray-200 flex-1 h-[38px] flex items-center justify-between px-4 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <p className="font-medium text-gray-400 text-sm">
                  어떤 카테고리에 넣을까요?
              </p>
              <div className="w-[18px] h-[18px] relative flex items-center justify-center">
                  <Image src={img15} alt="down" fill className="object-contain" />
              </div>
          </div>
          <div className="bg-gray-200 h-[38px] w-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-300 transition-colors">
                <FolderPlus className="w-5 h-5 text-gray-500" />
          </div>
      </div>
    </>
  )
}
