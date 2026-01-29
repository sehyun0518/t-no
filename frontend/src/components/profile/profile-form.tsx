"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun } from "lucide-react"

// Asset Constants from Figma
const imgNaver = "https://www.figma.com/api/mcp/asset/caf956d1-dad8-44d8-87d9-7b93b86ab7d5";
const imgKakao = "https://www.figma.com/api/mcp/asset/3bb2b176-4c3a-448b-9fad-8ef4668fda77";

export function ProfileForm() {
  return (
    <div className="bg-white rounded-2xl p-9 shadow-[0px_4px_40px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-10">
      
      {/* Top Row: Avatar & Basic Info */}
      <div className="flex items-center gap-5">
        <div className="w-[5.25rem] h-[5.25rem] bg-green-400 rounded-xl flex items-center justify-center shrink-0">
            {/* Profile Image or Initial */}
            <span className="text-gray-500 font-bold text-3xl">여</span>
        </div>
        <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-400 font-medium text-base pl-1">이름</label>
            <div className="relative">
                <Input 
                    placeholder="이름을 입력해주세요" 
                    defaultValue="여울"
                    className="h-14 bg-white border-[1.5px] border-gray-200"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 text-[12px]">
                    2/10 (공백포함)
                </span>
            </div>
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 gap-10">
        {/* Gender Section */}
        <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-medium text-base pl-1">성별</label>
            <div className="flex gap-2.5">
                <Button variant="outline" className="flex-1 h-14 rounded-xl border-gray-200 text-gray-500 font-medium bg-gray-50/50 hover:bg-gray-100">남성</Button>
                <Button variant="outline" className="flex-1 h-14 rounded-xl border-gray-200 text-gray-500 font-bold bg-white ring-1 ring-gray-400">여성</Button>
                <Button variant="outline" className="flex-1 h-14 rounded-xl border-gray-200 text-gray-500 font-medium bg-gray-50/50 hover:bg-gray-100">선택안함</Button>
            </div>
        </div>

        {/* Birthday Section */}
        <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-medium text-base pl-1">생년월일</label>
            <div className="flex gap-3">
                <div className="flex-1 relative">
                    <Input defaultValue="1998" className="h-14 border-gray-200" />
                </div>
                <div className="flex-1 relative">
                    <Input defaultValue="05" className="h-14 border-gray-200" />
                </div>
                <div className="flex-1 relative">
                    <Input defaultValue="18" className="h-14 border-gray-200" />
                </div>
            </div>
        </div>

        {/* Account Linking Section */}
        <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-medium text-base pl-1">계정 연동</label>
            <div className="flex flex-col gap-3">
                <div className="h-14 flex items-center gap-3 px-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 bg-[#03c75a] rounded-lg p-1 flex items-center justify-center relative">
                        <Image src={imgNaver} alt="Naver" fill className="object-contain p-1" />
                    </div>
                    <span className="text-gray-400 text-base font-medium">yejin2174@naver.com</span>
                </div>
                <div className="h-14 flex items-center gap-3 px-4 bg-gray-50 rounded-xl">
                    <div className="w-7 h-7 bg-[#fbe300] rounded-lg p-1 flex items-center justify-center relative">
                        <Image src={imgKakao} alt="Kakao" fill className="object-contain p-1" />
                    </div>
                    <span className="text-gray-400 text-base font-medium">여울 (Kakao)</span>
                </div>
            </div>
        </div>

        {/* Display Settings */}
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-500 pl-1">화면 설정</h2>
            </div>
            <div className="bg-gray-50/50 p-8 rounded-2xl flex flex-col gap-8">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex-1 space-y-1">
                        <label className="text-gray-400 font-medium text-base">테마 모드</label>
                        <p className="text-gray-300 text-sm">원하는 화면 테마를 선택해주세요</p>
                    </div>
                    <div className="flex gap-2.5">
                        <Button className="w-[7.5rem] h-[3.25rem] rounded-full bg-gray-500 hover:bg-gray-600 gap-2 font-bold shadow-none">
                            <Sun className="w-4 h-4" /> 라이트
                        </Button>
                        <Button variant="outline" className="w-[7.5rem] h-[3.25rem] rounded-full border-gray-200 text-gray-300 gap-2 font-medium hover:bg-gray-50 shadow-none">
                            <Moon className="w-4 h-4" /> 다크
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
