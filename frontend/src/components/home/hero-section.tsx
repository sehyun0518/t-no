"use client"

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-[6rem] pb-[12rem] px-4 relative z-0">
      <div className="flex flex-col gap-2 items-center text-center mb-10">
        <h1 className="text-white font-bold text-4xl leading-[1.6]">
          어떤 논문을 정리해볼까요?
        </h1>
        <p className="text-gray-300 font-medium text-base leading-[1.6]">
          논문에서 글로 변환하고 싶은 DOI 또는 검색어를 입력해주세요
        </p>
      </div>

      {/* Input Area Wrapper */}
      <div className="relative w-full max-w-[56.75rem]">
          {/* Input Box */}
          <div className="w-full bg-white rounded-[0.75rem] p-4 flex items-center gap-5 box-border shadow-lg border border-transparent focus-within:border-gray-200 transition-all">
              <div className="flex items-center gap-5 flex-1 pl-1">
                  <div className="relative w-9 h-9 flex items-center justify-center shrink-0 bg-gray-100 rounded-lg">
                      <FileText className="w-6 h-6 text-gray-400" />
                  </div>
                  <Input 
                      placeholder="논문 제목, 키워드, 또는 DOI를 입력하세요..." 
                      className="flex-1 border-none px-0 h-auto focus:border-none shadow-none"
                  />
              </div>
              <div className="flex items-center gap-3">
                  <Button className="bg-gray-100 hover:bg-gray-200 text-gray-300 hover:text-gray-400 font-bold text-base h-10 px-6 rounded-[0.5rem] shadow-none w-[6.25rem] transition-colors">
                      start
                  </Button>
              </div>
          </div>
      </div>
    </div>
  )
}
