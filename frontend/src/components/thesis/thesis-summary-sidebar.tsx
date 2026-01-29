"use client"

import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Edit3, Trash2, Check, ChevronRight, FileText } from "lucide-react"
import { ContentInput } from "./content-input"

// Asset Constants (Reusing existing)
const img7 = "https://www.figma.com/api/mcp/asset/f97895aa-aeff-46da-9b2a-eb78ff4a839e";
const img10 = "https://www.figma.com/api/mcp/asset/4e74bd64-5f65-40c3-ab42-a4c6dbb6012d";
const img14 = "https://www.figma.com/api/mcp/asset/3f8def7e-094a-4c77-9102-608c4f29de05";

export function ThesisSummarySidebar() {
  return (
    <div className="w-[28rem] bg-white border-l border-gray-100 flex flex-col h-full overflow-hidden z-20">
        {/* 1. Header Actions */}
        <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-500" />
                분석 & 요약
            </h2>
            
            {/* Right Icons */}
            <div className="flex items-center gap-2">
            <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
                    <div className="relative w-4 h-4">
                        <Image src={img7} alt="search" fill className="object-contain" />
                    </div>
            </div>
            <div className="bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100">
                <div className="relative w-4 h-4 text-gray-500">
                    <Image src={img10} alt="profile" fill className="object-contain" />
                </div>
            </div>
            </div>
        </div>

        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-10 p-6">
            
            {/* 2. Key Takeaways Section */}
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                    <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                        <Image src={img14} alt="icon" fill className="object-contain p-1" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-[20px] leading-[1.6]">핵심 요약 (Key Takeaways)</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                    {[
                        { id: 1, title: "생성형 AI의 검색 시장 침투", desc: "검색 정보 소비 여정의 단축 및 광고 효율성 변화" },
                        { id: 2, title: "구독형 모델의 광고 도입 확대", desc: "주요 빅테크 기업의 AI 전용 광고 베타 테스트 진행" },
                        { id: 3, title: "숏폼 콘텐츠의 비즈니스화", desc: "연간 매출 전망 100억 달러 규모의 성장세 분석" },
                        { id: 4, title: "쿠키리스 시대의 맞춤형 광고", desc: "퍼스트파티 데이터를 활용한 새로운 타겟팅 전략" }
                    ].map((item) => (
                        <div key={item.id} className="flex gap-4 items-start group relative">
                            <div className="bg-[#dfff00] w-6 h-6 flex items-center justify-center rounded-md text-xs font-bold shrink-0 mt-1">
                                {item.id}
                            </div>
                            <div className="flex flex-1 flex-col gap-1">
                                <p className="font-bold text-gray-800 text-base leading-tight">
                                    {item.title}
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed pr-12">
                                    {item.desc}
                                </p>
                            </div>
                            
                            {/* Edit/Delete Actions on Hover */}
                            <div className="absolute right-0 top-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                                    <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-1.5 hover:bg-red-50 rounded text-gray-400 hover:text-red-500">
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-px bg-gray-50 w-full"></div>

            {/* 3. AI Notes Section */}
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                            <Image src={img14} alt="icon" fill className="object-contain p-1" />
                        </div>
                        <h3 className="font-bold text-gray-800 text-[20px] leading-[1.6]">AI 노트 (AI Notes)</h3>
                    </div>
                    <span className="text-[10px] font-bold text-green-500 flex items-center gap-1">
                        <Check className="w-3 h-3" /> 저장됨
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 relative group">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                🤖 이 논문은 디지털 광고 생태계의 근본적인 변화를 다룹니다. 특히 <span className="font-bold text-gray-800">퍼스트파티 데이터</span>의 중요성을 강조하고 있어요.
                            </p>
                            <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 hover:bg-white rounded shadow-sm transition-all">
                                <Edit3 className="w-3 h-3 text-gray-400" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                        <ContentInput />
                        <ContentInput />
                        </div>

                        <div className="relative mt-2">
                            <input 
                            type="text" 
                            placeholder="질문을 입력하세요..." 
                            className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-gray-200 text-sm outline-none transition-all shadow-sm"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                </div>
            </div>

            {/* 4. Related Papers */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider">관련 논문</h3>
                    <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">모두 보기</span>
                </div>
                <div className="flex flex-col gap-2">
                    {[1, 2].map((i) => (
                        <div key={i} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer border border-transparent hover:border-gray-100">
                            <div className="bg-gray-100 p-2 rounded-lg text-gray-400 group-hover:bg-white group-hover:text-green-600 transition-colors border border-transparent group-hover:border-gray-100">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-700 text-sm leading-tight group-hover:text-gray-900">
                                    {i === 1 ? "생성형 AI 검색과 광고 시장" : "숏폼 콘텐츠와 커머스 결합"}
                                </h4>
                                <span className="text-xs text-gray-400">{i === 1 ? "김철수 외 • 2023" : "이영희 • 2023"}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            </div>
        </ScrollArea>
    </div>
  )
}
