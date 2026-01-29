"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Asset Constants from Figma
const img1 = "https://www.figma.com/api/mcp/asset/206e291d-9b4c-4f1c-a24d-1dcc609e8efe"; // Logo
const imgLayer2 = "https://www.figma.com/api/mcp/asset/96c8dec7-ec8f-4eae-9fd8-2a30d1928703"; // Naver icon
const imgLayer3 = "https://www.figma.com/api/mcp/asset/82649c6f-5faa-4993-9b3b-a088235b9280"; // Kakao icon
const imgExclude = "https://www.figma.com/api/mcp/asset/2b10a648-bdc5-43c2-88f6-0f6219834086"; // Feature icon
const imgUnion = "https://www.figma.com/api/mcp/asset/3f3d66b2-fb5e-4590-9607-7534b966975a"; // Feature icon top

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      {/* Left: Login Form Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-[37.5rem] flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-5">
              <Image src={img1} alt="T-NO" fill className="object-contain" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-[2.25rem] font-bold text-gray-500 leading-[1.6]">로그인</h1>
              <p className="text-gray-300 font-medium text-base leading-[1.6]">
                계정에 로그인하고 나만의 논문 아카이빙을 시작해요
              </p>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-3 w-[30.875rem] mx-auto">
            <Button className="w-full h-16 bg-[#03c75a] hover:bg-[#02b350] rounded-full gap-2 border-none shadow-none text-white font-bold text-base">
              <div className="relative w-7 h-7">
                <Image src={imgLayer2} alt="Naver" fill className="object-contain" />
              </div>
              네이버로 시작하기
            </Button>
            <Button className="w-full h-16 bg-[#fbe300] hover:bg-[#f0cc00] rounded-full gap-2 border-none shadow-none text-black font-bold text-base">
              <div className="relative w-7 h-7">
                <Image src={imgLayer3} alt="Kakao" fill className="object-contain" />
              </div>
              카카오로 시작하기
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-5 w-full">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-300 font-medium text-base">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email Form */}
          <div className="flex flex-col gap-5 w-full">
            <div className="space-y-2">
              <label className="text-gray-400 font-medium text-base pl-1">이메일</label>
              <Input 
                placeholder="이메일 주소를 입력해주세요" 
                className="h-14 rounded-xl px-5 text-gray-500 placeholder:text-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 font-medium text-base pl-1">비밀번호</label>
              <Input 
                type="password"
                placeholder="비밀번호를 입력해주세요" 
                className="h-14 rounded-xl px-5 text-gray-500 placeholder:text-gray-300"
              />
            </div>
            
            <div className="pt-5 space-y-10 items-center flex flex-col">
                <Button className="w-full h-14 bg-gray-100 hover:bg-gray-200 text-gray-300 font-bold text-base rounded-xl shadow-none transition-colors">
                    로그인
                </Button>

                {/* Footer Links */}
                <div className="flex flex-col items-center gap-2.5 text-sm font-medium">
                    <div className="flex gap-2.5">
                        <span className="text-gray-300">계정이 기억나지 않으신가요?</span>
                        <Link href="/find-email" className="text-gray-500 hover:underline">이메일 찾기</Link>
                        <Link href="/find-password" className="text-gray-500 hover:underline">비밀번호 찾기</Link>
                    </div>
                    <div className="flex gap-2.5">
                        <span className="text-gray-300">아직 계정이 없으신가요?</span>
                        <Link href="/signup" className="text-gray-500 font-bold hover:underline">이메일로 회원가입</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Visual Brand Section */}
      <div className="w-[37.375rem] h-full p-10 flex items-center justify-center">
        <div 
          className="w-full h-[52.5rem] rounded-[2.5rem] relative overflow-hidden flex flex-col items-center justify-center"
          style={{ 
            backgroundImage: "linear-gradient(-0.45deg, #1e1e1e 13.88%, rgba(30, 30, 30, 0) 111.51%), #1e1e1e" 
          }}
        >
            {/* Abstract Graphic Background (Simplified representation) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-10">
                {/* Feature Icon */}
                <div className="relative w-[22rem] h-[22rem]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[11rem] h-[6rem]">
                        <Image src={imgUnion} alt="Graphic top" fill className="object-contain" />
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[18.5rem] h-[11rem] bg-gray-200 rounded-md overflow-hidden">
                        <div className="w-full h-10 bg-gray-400" />
                        <div className="relative w-full h-full p-10 flex items-center justify-center">
                             <Image src={imgExclude} alt="Graphic main" fill className="object-contain p-14 scale-75" />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="text-center space-y-2">
                    <h2 className="text-[2rem] font-bold text-white leading-[1.6]">한 눈에 읽는 논문</h2>
                    <div className="text-[#bbb] font-medium text-xl leading-[1.6]">
                        <p>논문을 텍스트로 변환하여</p>
                        <p>한 눈에 내용을 파악하기</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
