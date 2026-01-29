"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// Asset Constants from Figma
const img1 = "https://www.figma.com/api/mcp/asset/939d9848-9bcb-4dc7-a1b0-14e3e4203300"; // Logo
const imgExclude = "https://www.figma.com/api/mcp/asset/32510cd1-1c7a-4180-9f83-9f8f0c575a4c"; // Graphic
const imgUnion = "https://www.figma.com/api/mcp/asset/fa6ca036-d426-465e-9725-bfb1a0b0e250"; // Graphic top

export default function SignupPage() {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      {/* Left: Visual Brand Section */}
      <div className="w-[42rem] h-full p-10 flex items-center justify-center">
        <div 
          className="w-full h-[52.5rem] rounded-[2.5rem] relative overflow-hidden flex flex-col items-center justify-center"
          style={{ 
            backgroundImage: "linear-gradient(-0.45deg, #1e1e1e 13.88%, rgba(30, 30, 30, 0) 111.51%), #1e1e1e" 
          }}
        >
            {/* Abstract Graphic Background */}
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
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[18.5rem] h-[11rem] bg-gray-200 rounded-md overflow-hidden border border-white/10">
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

      {/* Right: Signup Form Section */}
      <div className="flex-1 flex flex-col items-center relative overflow-hidden">
        <ScrollArea className="w-full h-full">
            <div className="w-full max-w-[37.5rem] mx-auto flex flex-col gap-10 py-20 px-10">
                {/* Header */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-16 h-5">
                        <Image src={img1} alt="T-NO" fill className="object-contain" />
                    </div>
                    <div className="text-center space-y-2">
                        <h1 className="text-[2.25rem] font-bold text-gray-500 leading-[1.6]">회원가입</h1>
                        <p className="text-gray-300 font-medium text-base leading-[1.6]">
                            새로운 계정을 생성하고 나만의 논문 아카이빙을 시작해요
                        </p>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-8 w-full">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-gray-400 font-medium text-base pl-1">이름</label>
                        <Input 
                            placeholder="이름을 입력해주세요" 
                            className="h-14 rounded-xl px-5 text-gray-500 placeholder:text-gray-300"
                        />
                    </div>

                    {/* Birthday */}
                    <div className="space-y-2">
                        <label className="text-gray-400 font-medium text-base pl-1">생년월일</label>
                        <div className="flex gap-2">
                            <Input placeholder="YYYY" className="h-14 flex-1 rounded-xl px-5 text-gray-500 placeholder:text-gray-300" />
                            <Input placeholder="MM" className="h-14 flex-1 rounded-xl px-5 text-gray-500 placeholder:text-gray-300" />
                            <Input placeholder="DD" className="h-14 flex-1 rounded-xl px-5 text-gray-500 placeholder:text-gray-300" />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-gray-400 font-medium text-base pl-1">전화번호</label>
                        <div className="flex gap-2">
                            <Input placeholder="휴대폰 번호 입력 (-제외)" className="h-14 flex-1 rounded-xl px-5 text-gray-500 placeholder:text-gray-300" />
                            <Button variant="outline" className="h-14 px-6 rounded-xl border-gray-200 text-gray-400 font-bold hover:bg-gray-50">인증번호 전송</Button>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-gray-400 font-medium text-base pl-1">이메일 주소</label>
                        <div className="flex gap-2">
                            <Input placeholder="abcd@email.com" className="h-14 flex-1 rounded-xl px-5 text-gray-500 placeholder:text-gray-300" />
                            <Button variant="outline" className="h-14 px-6 rounded-xl border-gray-200 text-gray-400 font-bold hover:bg-gray-50">중복 확인</Button>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-gray-400 font-medium text-base pl-1">비밀번호</label>
                        <Input 
                            type="password"
                            placeholder="비밀번호를 입력해주세요" 
                            className="h-14 rounded-xl px-5 text-gray-500 placeholder:text-gray-300"
                        />
                        <p className="text-[12px] text-gray-300 pl-1">영문, 숫자, 특수문자 포함 8~16자</p>
                    </div>

                    {/* Password Confirm */}
                    <div className="space-y-2">
                        <label className="text-gray-400 font-medium text-base pl-1">비밀번호 확인</label>
                        <Input 
                            type="password"
                            placeholder="비밀번호를 다시 입력해주세요" 
                            className="h-14 rounded-xl px-5 text-gray-500 placeholder:text-gray-300"
                        />
                    </div>

                    {/* Form Actions (Integrated into flow) */}
                    <div className="pt-10 flex flex-col items-center gap-10">
                        <Button className="w-full h-14 bg-gray-100 hover:bg-gray-200 text-gray-300 font-bold text-base rounded-xl shadow-none transition-colors">
                            회원가입 완료
                        </Button>
                        <div className="flex gap-2.5 text-sm font-medium">
                            <span className="text-gray-300">이미 계정이 있으신가요?</span>
                            <Link href="/login" className="text-gray-500 font-bold hover:underline">로그인</Link>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollArea>
      </div>
    </div>
  )
}
